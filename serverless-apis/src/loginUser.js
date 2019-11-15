'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.login = (event, context, callback) => {
    console.error(event.body);
    const data = JSON.parse(event.body);
    if (typeof data !== 'object') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t log the User, object.',
        });
        return;
    }
    const params = {
        TableName: "PlacementSocketStudents",
        Key: {
            id: data.sapid,
        },
    };

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

};
