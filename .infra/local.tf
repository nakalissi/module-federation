provider "kubernetes" {
  config_path = "~/.kube/config"
}

resource "null_resource" "kind_cluster" {
  provisioner "local-exec" {
    command = "kind create cluster --name local-cluster"
  }
}

provider "aws" {
  region = "us-east-1"
}

module "eks" {
  source          = "terraform-aws-modules/eks/aws"
  cluster_name    = "my-eks-cluster"
  cluster_version = "1.24"
  subnets         = ["subnet-12345", "subnet-67890"]
  vpc_id          = "vpc-12345"
}