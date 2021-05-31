import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class ProfileView extends React.Component {

  render() {
    return (
      <div className="profile-view">
        <div>Username</div>
        <div>Password</div>
        <div>Email</div>
        <div>Birthday</div>
      </div>
    );
  }
}