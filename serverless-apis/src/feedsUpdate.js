'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.update = (event, context, callback) => {
    console.error(event.body);
    const data = JSON.parse(event.body);
    if (typeof data !== 'object') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
            body: 'Couldn\'t update feed. Data not sent properly.',
        });
        return;
    }
    const id = event.pathParameters.id;
    const params = {
        TableName: "PlacementSocketFeeds",
        Key: {
            id: id,
        },

        ExpressionAttributeValues: {
            ":context": data.firstname,
            ":likes": data.lastname,
            ":stu_liked": data.email,
            ":subject": data.mobile,
        },

        UpdateExpression: "set context=:context,likes=:likes,stu_liked=:stu_liked,subject=:subject",

        ReturnValues: 'ALL_NEW',
    };

    dynamoDb.update(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
                body: 'Couldn\'t update the act. DynamoDb error update.',
            });
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify(result.Attributes),
            headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" }
        };
        callback(null, response);
    });
};