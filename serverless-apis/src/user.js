'use strict';

const AWS = require('aws-sdk'); // eslint-disable-line import/no-extraneous-dependencies

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
            body: 'Couldn\'t create the User.',
        });
        return;
    }

    const params = {
        TableName: "PlacementSocketStudents",
        Item: {
            id: data.sapid,
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
                body: 'Couldn\'t create the User, object.',
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
    const sapid = event.pathParameters.id;
    const paramsForScan = {
        TableName: "PlacementSocketStudents"
    };

    const params = {
        TableName: "PlacementSocketStudents",
        Key: {
            id: sapid,
        },
    };

    if (sapid.toUpperCase() !== "ALL") {
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


module.exports.update = (event, context, callback) => {
    console.error(event.body);
    const data = JSON.parse(event.body);
    if (typeof data !== 'object') {
        console.error('Validation Failed');
        callback(null, {
            statusCode: 400,
            headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
            body: 'Couldn\'t add the act. Data not sent properly.',
        });
        return;
    }
    const id = event.pathParameters.id;
    const params = {
        TableName: "PlacementSocketStudents",
        Key: {
            id: id,
        },

        ExpressionAttributeNames: {
            '#role': 'role',
        },

        ExpressionAttributeValues: {
            ":firstname": data.firstname,
            ":lastname": data.lastname,
            ":email": data.email,
            ":mobile": data.mobile,
            ":sapid": data.sapid,
            ":rollNo": data.rollNo,
            ":sex": data.sex,
            ":course": data.course,
            ":branch": data.branch,
            ":address": data.address,
            ":higherSecondaryBoard": data.higherSecondaryBoard,
            ":higherSecondaryYear": data.higherSecondaryYear,
            ":higherSecondaryPercentage": data.higherSecondaryPercentage,
            ":seniorSecondaryBoard": data.seniorSecondaryBoard,
            ":seniorSecondaryYear": data.seniorSecondaryYear,
            ":seniorSecondaryPercentage": data.seniorSecondaryPercentage,
            ":cgpa": data.cgpa,
            ":cgpaStatus": false,
            ":totalBacklogs": data.totalBacklogs,
            ":standingBacklogs": data.standingBacklogs,
            ":profileStatus": false,
            ":role": "student",
        },

        UpdateExpression: "set firstname=:firstname,lastname=:lastname,email=:email,mobile=:mobile,sapid=:sapid,rollNo=:rollNo,sex=:sex,course=:course,branch=:branch,address=:address,higherSecondaryBoard=:higherSecondaryBoard,higherSecondaryYear=:higherSecondaryYear,higherSecondaryPercentage=:higherSecondaryPercentage,seniorSecondaryBoard=:seniorSecondaryBoard,seniorSecondaryYear=:seniorSecondaryYear,seniorSecondaryPercentage=:seniorSecondaryPercentage,cgpa=:cgpa,cgpaStatus=:cgpaStatus,totalBacklogs=:totalBacklogs,standingBacklogs=:standingBacklogs,profileStatus=:profileStatus,#role=:role",

        ReturnValues: 'ALL_NEW',
    };

    dynamoDb.update(params, (error, result) => {
        if (error) {
            console.error(error);
            callback(null, {
                statusCode: error.statusCode || 501,
                headers: { 'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': "*" },
                body: 'Couldn\'t update the act. DynamoDb error',
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