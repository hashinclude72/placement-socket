'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

module.exports.add = (event, context, callback) => {
    const timestamp = new Date().getTime();
    console.error(event.body);
    const data = JSON.parse(event.body);
    if (typeof data !== 'object') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t create the Company , Invalid data.',
        });
        return;
    }
    var id = uuid.v1();
    var decodedPdf1 = data.encodedPdfList[0];
    decodedPdf1 = Buffer.from(decodedPdf1, 'base64');
    var blogPdf1Path = "company-files/" + id + "1.pdf";

    // var decodedAuthorImage = data.encodedAuthorImage.replace(/^data:image\/png\/\w+;base64,/, "");
    var decodedPdf2 = data.encodedPdfList[1];
    decodedPdf2 = Buffer.from(decodedPdf2, 'base64');
    var blogPdf2Path = "company-files/" + id + "2.pdf";

    var Pdf1Params = {
        "Body": decodedPdf1,
        "Bucket": "placement-socket",
        "Key": blogPdf1Path,
        // "ACL": "public-read",
    };
    s3.upload(Pdf1Params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            let response = {
                "statusCode": 200,
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
                "body": JSON.stringify(data),
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });

    var Pdf2Params = {
        "Body": decodedPdf2,
        "Bucket": "placement-socket",
        "Key": blogPdf2Path,
        // "ACL": "public-read",
    };
    s3.upload(Pdf2Params, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            let response = {
                "statusCode": 200,
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
                "body": JSON.stringify(data),
                "isBase64Encoded": false
            };
            callback(null, response);
        }
    });

    var blogPdf1Url = "https://placement-socket.s3.amazonaws.com/" + blogPdf1Path;
    var blogPdf2Url = "https://placement-socket.s3.amazonaws.com/" + blogPdf2Path;

    const params = {
        TableName: "PlacementSocketCompanies",
        Item: {
            id: uuid.v1(),
            "companyName": data.companyName,
            "category": data.category,
            "jobProfile": data.jobProfile,
            "expectedSalary": data.expectedSalary,
            "studentsRequired": data.studentsRequired,
            "companyVisitingCampus": data.companyVisitingCampus,
            "criteriaOf10th": data.criteriaOf10th,
            "criteriaOf12th": data.criteriaOf12th,
            "collegeCriteria": data.collegeCriteria,
            "description": data.description,
            "encodedPdfList": [blogPdf1Url, blogPdf2Url],
            "role": "Company",
            createdAt: timestamp,
            updatedAt: timestamp
        },
    };

    // write the todo to the database
    dynamoDb.put(params, (error) => {
        // handle potential errors
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain' },
                body: 'Couldn\'t create the Company, dynamo error72.',
            });
            return;
        }

        // create a response
        const response = {
            statusCode: 200,
            body: JSON.stringify(params.Item),
            headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" }
        };
        callback(null, response);
    });
};
