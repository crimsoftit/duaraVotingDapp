import React, { Component } from 'react';
import {login,logout} from './../utils'
import './Navbar.css'


class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            accName:'Please Login'
        }
    }

    getName=async()=>{
       console.log(window.accountId)
    }

    render() {
        return (
            <div className="barHouse">
                <div className="pageTitle">BlockShop</div> 
        <div onClick={(window.accountId!=='')?logout:login} className="account">{(window.accountId!=='')?window.accountId:'Please Login'}</div>
                
            </div>
        );
    }
}

export default Navbar;

