const dev = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1b24jis50b4j9"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://uezk81q818.execute-api.us-east-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_FmMXckSdR",
    APP_CLIENT_ID: "3lt6cj3mbapsfkba6h8a712n6r",
    IDENTITY_POOL_ID: "us-east-2:8bd73132-8a10-4abe-914c-f8f8654b420d"
  }
};

const prod = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-bbur3x7atf9b"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://kxktc9oebg.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_md8F0ViRv",
    APP_CLIENT_ID: "58rff7mto4193aauuh27f3tq30",
    IDENTITY_POOL_ID: "us-east-2:e6d8ac16-699a-4bd7-aab1-06b6bcf45f94"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
