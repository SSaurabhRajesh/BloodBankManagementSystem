import React, { Component } from 'react';
import BstockService from '../services/BstockService';


class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bstock: []
        }
    }

    componentDidMount() {
        BstockService.getBloodStock().then((res) => {
            this.setState({ bstock: res.data });
        });
    }

    render() {
        return (
            <div>
                <table >
                    <tr class="row w-75">
                        {this.state.bstock.map(bstock =>
                                    <td><a href="./Login" class="text-decoration-none">
                                        <div class="card w-auto p-3 text-white bg-danger mb-4 ">
                                            <div class="card-body text-center">
                                                <p class="card-text">{bstock.bloodgrp}</p>
                                                <p class="card-text">{bstock.quantity}</p>
                                            </div>
                                        </div>
                                    </a>
                                    </td>)}
                    </tr>
                </table>
            </div>
        );
    }
}

export default HomePage;