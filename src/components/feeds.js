import React from 'react';
import axios from 'axios';
import { Feed } from "./feed";
export class Feeds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feeds: [],
        };

    }

    componentDidMount() {
        this.fetch_all_Feeds()
    }

    fetch_all_Feeds() {
        //fetch all acts from aws DynamoDb and save it to "feeds"

        this.fetch_from_dynamo('all').then(data => {
            console.log('fetch_all_Feeds :', data);
            var feedss = [];
            data.forEach(function (item) {
                feedss.push(item);
            });
            this.setState({
                feeds: feedss
            })
        })
    }

    fetch_from_dynamo(id) {
        //fetches acts from aws. Gets all acts if id == 'all' and one specific act if id == 'id-of-act'

        return axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/getFeed/' + id,
            method: 'GET',
            crossDomain: true,
            responseType: 'json', // important
        }).then((response) => {
            // console.log('fetch_from_dynamo :', response.data)
            return response.data;

        });
    }

    // handleClicked(id) {
    //     // console.log("id list",id);
    //     var companies = this.state.resdata;
    //     var company = companies.filter(d => d.id === id);
    //     // console.log(company);


    //     this.setState(() => {
    //         return {
    //             clickId: id,
    //             company: company[0]
    //         };
    //     });
    //     // console.log("this.state.company : ",this.state.company);
    //     // return 'This option already exists';
    // }
    render() {
        return (
            <div>
                <h2 className="mb-4 mt-0 text-center">Feeds</h2>
                {
                  this.state.feeds.map((option) => <Feed key={option.id} feed={option} />)
                }
            </div>
        );
    }
}
