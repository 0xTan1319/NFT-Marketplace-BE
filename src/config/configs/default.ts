export const config = {
  application: {
    PORT: 8080,
    BCRYPT_SALT: 10,
    HOST: 'localhost',
    ENV: 'development',
    isProd: false,
    CLIENT_URL: 'localhost:3000',
  },
  database: {
    DB_CONNECTOR: 'postgres',
    DB_HOST: 'localhost',
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_DATABASE: 'ink_be',
    DB_PORT: 5432,
    DATABASE_URL: '',
  },
  secrets: {
    JWT_PRIVATE_KEY: 'JWT_PRIVATE_KEY',
    JWT_REFRESH_PRIVATE_KEY: 'JWT_REFRESH_PRIVATE_KEY',
    JWT_CLIENT_PRIVATE_KEY: 'JWT_CLIENT_PRIVATE_KEY',
    JWT_PUBLIC_KEY: 'JWT_PUBLIC_KEY',
    JWT_ALGORITHM: 'HS256',
    JWT_EXPIRE_TIME: 900,
    JWT_EXPIRE_REFRESH_TIME: 86400,
    SESSION_SECRET: 'SESSION_SECRET',
  },
  social: {
    TWITTER_CONSUMER_KEY: '',
    TWITTER_CONSUMER_SECRET: '',
  },
  s3Bucket: {
    AWS_S3_BUCKET_REGION: process.env.AWS_S3_BUCKET_REGION,
    AWS_S3_ACCESS_KEY_ID: process.env.AWS_S3_ACCESS_KEY_ID,
    AWS_S3_SECRET_ACCESS_KEY: process.env.AWS_S3_SECRET_ACCESS_KEY,
    AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
    AWS_S3_API_VERSION: process.env.AWS_S3_API_VERSION,
  },
  email: {
    MG_PRIVATE_API_KEY: process.env.MG_PRIVATE_API_KEY,
    MG_PUBLIC_API_KEY: process.env.MG_PUBLIC_API_KEY,
    MG_SANDBOX_DOMAIN: process.env.MG_SANDBOX_DOMAIN,
    MG_URL: process.env.MG_URL,
    MG_USERNAME: process.env.MG_USERNAME,
  },
  emailConfirmationExpireTime: 3600,
};
