import React from 'react';
import './profile-card-style.css'
// import { render } from 'react-dom';

const ProfileCard = props => (
    <div className="profile-card">
        <img  src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`} alt="" />
        <h5>{props.user.name}</h5>
        <span>{props.user.email}</span>
    </div>
);

export default ProfileCard;