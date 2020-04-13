import React from 'react';
import Moment from 'react-moment';
import axios from 'axios';
export class Feed extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.username);
        this.state = {
            stu_liked: this.props.feed.stu_liked,
            likes: this.props.feed.likes
        };
        this.handleLiked = this.handleLiked.bind(this);
    }

    // componentDidMount() {
    //     this.setState(() => {
    //         return {
    //             stu_liked: this.props.feed.stu_liked,
    //             likes: this.props.feed.likes
    //         };
    //     });
    // }

    handleLiked(){
        var id = this.props.feed.id;
        var data = {
            context: this.props.feed.context,
            likes: this.state.feed.likes + 1,
            stu_liked: this.state.stu_liked.push(this.props.username),
            subject: this.props.feed.subject,
        }

        console.log("update feed data :", data);
        axios({
            url: 'https://ex663qcrv2.execute-api.us-east-1.amazonaws.com/dev/updateFeeds/' + id,
            method: 'POST',
            data: data,
        }).then((response) => {
            console.log('resonse_data_dynamo :', response.data);
            this.setState(() => {
                var stu_liked = response.stu_liked;
                var likes = response.likes;
                return {
                    stu_liked: stu_liked,
                    likes: likes
                };
            });
        });   
    }

    render() {
        return (
            <div className="row text-left bg-white border border-primary justify-content-center">
                <div className="col-md-11 mt-4">
                    <h4 style={{ 'display': 'inline' }}><strong>{this.props.feed.subject}&nbsp;&nbsp;</strong></h4>
                    <small class="blockquote-footer">posted a new feed,&nbsp;&nbsp;<Moment fromNow>{this.props.feed.createdAt}</Moment></small>
                    <h6></h6>
                </div>
                <div className="col-md-11 mb-4">
                    {/* {alert(this.state.stu_liked)} */}
                    <div class="added-text">{this.props.feed.context}</div>
                    {this.state.stu_liked.includes(this.props.username) ? <i class="fas fa-heart"></i> : <a onClick={this.handleLiked}><i class="far fa-heart"></i></a>}
                    <span>&nbsp;{this.state.likes}</span>
                </div>
            </div>
        );
    }
}
