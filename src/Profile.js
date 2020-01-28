import React, { Component } from 'react';
import 'bootstrap';
import './Profile.css'

class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <br/>
                <img src={require("../public/images/"+this.props.img)} alt="profile img" />
                <h1>{String(this.props.name).toUpperCase()}</h1>
                <span className="">{this.props.position.toUpperCase()}</span>
            </div>
        )
    }
}

export default Profile;