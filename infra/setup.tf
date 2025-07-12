# Terraform script to create GitHub OIDC Role with SecretsManager access

provider "aws" {
  region = "us-east-1" # substitua conforme necessário
}

variable "github_org" {
  description = "GitHub organization or user"
  type        = string
  default     = "meu-org"
}

variable "github_repo" {
  description = "GitHub repository"
  type        = string
  default     = "meu-repo"
}

variable "environments" {
  description = "List of environments"
  type        = list(string)
  default     = ["dev", "stage", "prod"]
}

# OIDC Provider
resource "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
  client_id_list = ["sts.amazonaws.com"]
  thumbprint_list = ["6938fd4d98bab03faadb97b34396831e3780aea1"]
}

# IAM Role
resource "aws_iam_role" "github_oidc_role" {
  name = "github-oidc-role-frontend"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Principal = {
          Federated = aws_iam_openid_connect_provider.github.arn
        },
        Action = "sts:AssumeRoleWithWebIdentity",
        Condition = {
          StringEquals = {
            "token.actions.githubusercontent.com:sub" : "repo:${var.github_org}/${var.github_repo}:ref:refs/heads/main"
          }
        }
      }
    ]
  })
}

# Policy to allow reading secrets under /frontend/*
resource "aws_iam_policy" "secretsmanager_read" {
  name = "SecretsManagerFrontendReadAccess"

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect = "Allow",
        Action = ["secretsmanager:GetSecretValue"],
        Resource = [
          for env in var.environments :
          "arn:aws:secretsmanager:us-east-1:*:secret:/frontend/${env}/*"
        ]
      }
    ]
  })
}

# Attach policy to role
resource "aws_iam_role_policy_attachment" "attach_secrets_policy" {
  role       = aws_iam_role.github_oidc_role.name
  policy_arn = aws_iam_policy.secretsmanager_read.arn
}
