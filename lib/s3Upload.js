'use strict'
require('dotenv').config()
const AWS = require('aws-sdk')

const s3 = new AWS.S3()

const promiseS3Upload = function (fileObject) {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: process.env.BUCKET_NAME,
      Key: `${Date.now()}${fileObject.originalname}`,
      Body: fileObject.buffer,
      ACL: 'public-read',
      ContentType: fileObject.mimetype
    }
    s3.upload(params, function (error, data) {
      if (error) {
        reject(error)
      } if (data) {
        resolve(data)
      }
    })
  })
}

module.exports = promiseS3Upload
