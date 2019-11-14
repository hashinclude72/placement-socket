'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.get = (event, context, callback) => {
    const companyId = event.pathParameters.id;
    const paramsForScan = {
        TableName: "PlacementSocketCompanies"
    };

    const params = {
        TableName: "PlacementSocketCompanies",
        Key: {
            id: companyId,
        },
    };

    if (companyId.toUpperCase() !== "ALL") {
        dynamoDb.get(params, (error, result) => {
            if (error) {
                console.error(error);
                callback(null, {
                    statusCode: error.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
                    body: 'Couldn\'t fetch the company, dynamo error72.',
                });
                return;
            }

            const response = {
                statusCode: 200,
                body: JSON.stringify(result.Item),
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" }
            };
            callback(null, response);
        });
    } else {

        dynamoDb.scan(paramsForScan, (error, result) => {
            if (error) {
                console.error(error);
                callback(null, {
                    statusCode: error.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
                    body: 'Couldn\'t fetch the company, dynamo error72.',
                });
                return;
            }

            const response = {
                statusCode: 200,
                body: JSON.stringify(result.Items),
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" }
            };
            callback(null, response);

        });
    }
};