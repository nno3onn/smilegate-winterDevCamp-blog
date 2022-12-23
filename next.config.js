/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DB_USER: process.env.NEXT_PUBLIC_DB_USER,
    DB_PASSWORD: process.env.NEXT_PUBLIC_DB_PASSWORD,
    DB_HOST: process.env.NEXT_PUBLIC_DB_HOST,
    DB_PORT: process.env.NEXT_PUBLIC_DB_PORT,
    DB: process.env.NEXT_PUBLIC_DB,
    S3_BUCKET: process.env.NEXT_PUBLIC_S3_BUCKET,
    REGION: process.env.NEXT_PUBLIC_REGION,
    ACCESS_KEY_ID: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  },
};

module.exports = nextConfig;
