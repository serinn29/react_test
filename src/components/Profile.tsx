import * as React from 'react';

import './Profile.css';

interface IProps {
  name: string;
  job: string;
}

class Profile extends React.Component<IProps> {
  render() {
    const { name, job } = this.props;
    return (
      <div className='prmain'>
        <h1>프로필 </h1>
        <div >
          <b>이름: </b>
          {name}
          <br></br>
          <b>직업: </b>
          {job}
        </div>
      </div>
    );
  }
}

export default Profile;