'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const uuid = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = (event, context, callback) => {
    const timestamp = new Date().getTime();
    console.error(event.body);
    const data = JSON.parse(event.body);
    if (typeof data !== 'object') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t create the register log.',
        });
        return;
    }

    const params = {
        TableName: "PlacementSocketRegisterLogs",
        Item: {
            id: uuid.v1(),
            "companyId": data.companyId,
            "studentSapId": data.studentSapId,
            "registerStatus": true,
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
                body: 'Couldn\'t create the register log, object.',
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


module.exports.get = (event, context, callback) => {
    const registerLogId = event.pathParameters.id;
    const paramsForScan = {
        TableName: "PlacementSocketRegisterLogs"
    };

    const params = {
        TableName: "PlacementSocketRegisterLogs",
        Key: {
            id: registerLogId,
        },
    };

    if (registerLogId.toUpperCase() !== "ALL") {
        dynamoDb.get(params, (error, result) => {
            if (error) {
                console.error(error);
                callback(null, {
                    statusCode: error.statusCode || 501,
                    headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
                    body: 'Couldn\'t fetch the regiter log, dynamo error72.',
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
                    body: 'Couldn\'t fetch the register log, dynamo error72.',
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