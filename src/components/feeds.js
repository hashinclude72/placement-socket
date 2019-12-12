import React from 'react';
import axios from 'axios';
import { Feed } from "./feed";
export class Feeds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

    }
    render() {
        return (
            <div>
                <Feed/>
            </div>
        );
    }
}
