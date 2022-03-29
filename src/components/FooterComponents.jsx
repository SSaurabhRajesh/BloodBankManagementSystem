import React, { Component } from 'react';

class FooterComponents extends Component {
    constructor(props){
        super(props)
        this.state={
        }
      }
    render() {
        return (
            <div fixed="bottom" style={{position:"relative", left:"0",right:"0", bottom:"0", padding:"25px"}}>
                <footer className='footer bg-danger bg-gradient-light'>
                &copy; <span className='text-muted'>All rights Reserved 2022 Saurabh and Shubham</span>
                </footer>
            </div>
        );
    }
}

export default FooterComponents;