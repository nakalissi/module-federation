FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Instale dependências
RUN apt-get update && apt-get install -y curl git

# Instale Node.js 18
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs

WORKDIR /app