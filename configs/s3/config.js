import AWS from "aws-sdk";

const S3_BUCKET = process.env.S3_BUCKET;
const REGION = process.env.REGION;

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const myBucket = new AWS.S3({
  params: { Bucket: S3_BUCKET },
  region: REGION,
});

const Key = Date.now() + "";

export const uploadFile = async (file) => {
  const params = {
    ACL: "public-read",
    Body: file,
    Bucket: S3_BUCKET,
    Key,
    ContentEncoding: "base64",
    ContentType: "image/png",
  };
  myBucket.putObject(params, (err, data) => {});
  const url = `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${Key}`;
  return url;
};
