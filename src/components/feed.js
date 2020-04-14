import React from 'react';
import Moment from 'react-moment';
import axios from 'axios';
export class Feed extends React.Component {
    constructor(props) {
        super(props);
        var is_liked;
        console.log(this.props.username);
        this.state = {
            is_liked: this.props.feed.stu_liked.includes(this.props.username),
            likes: this.props.feed.stu_liked.length,
            feed_details: this.props.feed
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
        var stu_liked = this.props.feed.stu_liked;
        if (this.props.feed.stu_liked.includes(this.props.username)){
            stu_liked = stu_liked.filter(item => item != this.props.username);
        }
        else{
            stu_liked.push(this.props.username);
        }
        var data = {
            context: this.props.feed.context,
            stu_liked: stu_liked,
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
                var is_liked = response.data.stu_liked.includes(this.props.username);
                var likes = response.data.stu_liked.length;
                return {
                    is_liked: is_liked,
                    likes: likes,
                    feed_details: response.data
                };
            });
        });   
    }

    render() {
        return (
            <div className="row text-left bg-white border border-primary justify-content-center m-2" style={{'line-height': '1'}}>
                <div className="col-md-11 mt-4 pb-2">
                    <h4><strong>{this.state.feed_details.subject}&nbsp;&nbsp;</strong></h4>
                    <small class="blockquote-footer">posted a feed,&nbsp;&nbsp;<Moment fromNow>{this.state.feed_details.createdAt}</Moment></small>
                    <h6></h6>
                </div>
                <div className="col-md-11 mb-4">
                    <div class="added-text">{this.state.feed_details.context}</div>
                    <br />
                    {this.state.is_liked ? <a onClick={this.handleLiked}><i class="fas fa-heart"></i></a> : <a onClick={this.handleLiked}><i class="far fa-heart"></i></a>}
                    <span>&nbsp;{this.state.likes}</span>
                </div>
            </div>
        );
    }
}
