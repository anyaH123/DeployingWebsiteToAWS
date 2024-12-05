# DeployingWebsiteToAWS

# CODE
# DeployingWebsiteToAWSAPI
create package.json: npm init -y

# DeployingWebsiteToAWSUI
create react app: npx create-react-app deploying_website_to_aws_ui


# DockerImages
docker build -t deploying_website_to_aws_api .
docker build -t deploying_website_to_aws_ui .
docker run -p 8080:8080 deploying_website_to_aws_api
docker run -p 8084:3000 deploying_website_to_aws_ui


# aws cli
creating a s3 bucket : aws s3 mb s3://ah-ninnin-2401 --region ap-south-1