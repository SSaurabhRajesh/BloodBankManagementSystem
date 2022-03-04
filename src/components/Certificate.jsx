import React, { Component } from 'react';
import UserService from '../services/UserService';

class Certificate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            user: {}
        }

    }
    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setstate({ user: res.data });
        })

    }

    render() {
        return (
            <div>
                <table style="margin-left: auto;
    margin-right: auto;width:100%;height:100%;background-image: url(/images/Certificate\ background.jpg);border: 6px double Black;">
                    <tr><td><h1 style="font-size: 50px; padding: top 10px;">New Life Blood Bank</h1></td></tr>
                    <tr>
                        <td><center><img src="./images/logo.png" alt="logo" style="width:70px"/></center></td>
                    </tr>
                    <tr><td ><h1 style="color: rgb(94, 64, 193);font-size: 40px;"><center>Certificate of Appreciation</center></h1></td></tr>
                    <tr><td style="font-size: 30px;margin: top 30px;"><center>This Certificate is greatfully presented to </center></td></tr>
                    <tr><td style="font-size: 47px;font-weight: bold;margin: 30px;text-shadow: 2px 2px 4px #000000;"><center>Name of Donor</center></td></tr>
                    <tr><td style="font-size: 26px;margin: top 30px;"><center>for it's valuable blood donation <br/> in <b>"New Life Blood Bank"</b> on ______and hope <br/> for it's support in future also.</center></td></tr>
                        <tr>
                            <td style="font-size: 30px; float: right;">
                                <img src="./images/demosign1.png" alt="sign" width="100px"/>
                            </td>
                            <td style="font-size: 30px;float: left;">
                                <img src="./images/demosign2.png" alt="sign" width="100px"/>
                            </td>
                        </tr>
                            <tr>
                                <td style="font-size: 27px; padding-bottom: 10px;float: right;">
                                    Medical Officer
                                </td>
                                <td style="font-size: 27px;padding-bottom: 10px;float: left;">
                                    <center>President</center>
                                </td>
                            </tr>
                            </table>
                            <button onclick="window.print()">Print this page</button>
                        </div>
                        );
    }
}

                        export default Certificate;