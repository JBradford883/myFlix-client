import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export class ProfileView extends React.Component {

  render() {
    let { onBackClick } = this.props;

    return (
      <div className="profile-view">
        <div>Profile photo</div>
        <div>Username</div>
        <div>Password</div>
        <div>Email</div>
        <div>Birthday</div>
        <Button onClick={() => onBackClick()} block variant='danger'>Back to main</Button>
      </div>
    );
  }
}
