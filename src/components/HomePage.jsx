import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props){
        super(props)
            this.state={

            
        }
    }
    render() {
        return (
            <div>
                <iframe src="./login.html" height="500" width="450" title="login page"/>
                <iframe src="./bloodavailability.html" height="500" width="1000" title="Blood Bag Availability Data"/>
            </div>
        );
    }
}

export default HomePage;