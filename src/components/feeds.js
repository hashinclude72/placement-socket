import React from 'react';
import axios from 'axios';
export class Feeds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
            <div className="container">
                <div class="col-md">
                    <div class="pb_pricing_v1 p-5 border border-primary text-center bg-white">
                        <h3>Business</h3>
                        <span class="price"><sup>$</sup>39<span>month</span></span>
                        <p class="pb_font-15">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                        <p class="mb-0"><a href="#" role="button" class="btn btn-primary btn-shadow-blue">Get started</a></p>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}
