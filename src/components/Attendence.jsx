import React, { Component } from 'react';

class Attendence extends Component {
    constructor(){
        var date;
        super();
        var today= new Date();
        date=today.getUTCFullYear+'-'+(today.getUTCMonth + 1) + '-' + today.getUTCDate;
        this.state = {
            date: date  
    };
}
    render() {
        return (
            <div>
        <h2 className='text-center'>Attendence of Staff</h2>
       <form action="" method="post">
       <div className='row mx-md-n5'>
            <table className=' table table-striped table-bordered col px-md-4'>
                <thead>
                    <tr>
                        <th>Name of Staff</th>
                        
                       <th>Date:{new Date().toLocaleString() + ''}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                    <tr aria-colspan={2}>
                        <div>
                        <button type="reset" className="btn btn-outline-warning" >Reset</button>
                        <button type="submit" className="btn btn-outline-success">Submit</button>
                        </div>
                        </tr>
                </tbody>
            </table>
        </div>
       </form>
    </div>

        );
    }
}

export default Attendence;