'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.register = (event, context, callback) => {
    const timestamp = new Date().getTime();
    console.error(event.body);
    const data = JSON.parse(event.body);
    if (typeof data !== 'object') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain' },
            body: 'Couldn\'t create the User.',
        });
        return;
    }

    const params = {
        TableName: "PlacementSocketStudents",
        Item: {
            id: uuid.v1(),
            "firstname": data.firstname,
            "lastname": data.lastname,
            "email": data.email,
            "mobile": data.mobile,
            "sapid": data.sapid,
            "rollNo": data.rollNo,
            "sex": data.sex,
            "course": data.course,
            "branch": data.branch,
            "address": data.address,
            "higherSecondaryBoard": data.higherSecondaryBoard,
            "higherSecondaryYear": data.higherSecondaryYear,
            "higherSecondaryPercentage": data.higherSecondaryPercentage,
            "seniorSecondaryBoard": data.seniorSecondaryBoard,
            "seniorSecondaryYear": data.seniorSecondaryYear,
            "seniorSecondaryPercentage": data.seniorSecondaryPercentage,
            "cgpa": data.cgpa,
            "cgpaStatus": false,
            "totalBacklogs": data.totalBacklogs,
            "standingBacklogs": data.standingBacklogs,
            "profileStatus": false,
            "role": "student",
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
                body: 'Couldn\'t create the User.',
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
