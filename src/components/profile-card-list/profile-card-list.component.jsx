import React from "react";
import "./profile-card-list-style.css";
import ProfileCard from "../profile-card/profile-card-component";

const ProfileCardList = props => (
  <div className="profile-card-list">
    {props.users.map(user => (
      <ProfileCard key={user.id} user={user} />
    ))}
  </div>
);

export default ProfileCardList;
