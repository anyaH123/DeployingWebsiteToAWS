# DeployingWebsiteToAWS

# CODE
# DeployingWebsiteToAWSAPI
create package.json: npm init -y

# DeployingWebsiteToAWSUI
create react app: npx create-react-app deploying_website_to_aws_ui


# DockerImages
docker build -t deploying_website_to_aws_api .
docker run -p 8080:8080 deploying_website_to_aws_api