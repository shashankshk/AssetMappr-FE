# AssetMappr-FE


## Deploy using GitHub Actions
### Steps
**Development**

1. Launch a t2.micro instance. (Create new of use existing key - .pem file)
2. Grant HTTP inbound access permission to 0.0.0.0/0 
3. ssh to instance
```bash
ssh -o StrictHostKeyChecking=no -i <private_key> <user>@<ip>
```
4. Install docker
```bash
curl -fsSL https://get.docker.com -o get-docker.sh && sudo sh get-docker.sh
# Provide permissions to docker command
sudo usermod -aG docker $(whoami)
```
5. Add/Update variables and secrets (Current Repo -> Settings -> Security -> Secrets and Variables -> Actions)

> Variables
> - APP_NAME=AssetMappr-FE
> 
> Secrets
> 
> - AWS_EC2_HOST=<instance_ip>
> - AWS_EC2_USER=<instance_user>
> - AWS_PRIVATE_KEY=<private_key>

6. Branch out a release branch from main branch with pattern 'release/dev/*'