import React, { useEffect, useState } from 'react';
// import { userService } from '../services';
import { getCookie } from '../utils/cookie';

const Profile = () => {
  // const [username, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [userDataLoading, setUserDataLoading] = useState(false);

  const userId = JSON.parse(getCookie('userData'));
  console.log(userId);

  // useEffect(() => {
  //   setUserDataLoading(true);
  //   userService
  //     .getUserById(userId)
  //     .then((res) => {
  //       console.log(res.username);
  //       setName(res.username);
  //       // setEmail(res.data.email);
  //     })
  //     .catch((err) => {
  //       return console.log(err);
  //     })
  //     .finally(() => {
  //       setUserDataLoading(false);
  //     });
  // }, [userId]);

  return (
    <div>
      <h1> My Profile!</h1>
      <p>username:{userId}</p>
      {/* {userDataLoading ? ( */}
      {/*   <span>Loading...</span> */}
      {/* ) : ( */}
      {/*   <div> */}
      {/*     <p style={{ color: 'red' }}>{`name : ${username}`}</p> */}
      {/*     {/* <p>{`email : ${email}`}</p> */}
      {/*   </div> */}
      {/* )} */}
    </div>
  );
};

export default Profile;
