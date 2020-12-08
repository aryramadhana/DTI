export default {
  LOGIN: '/login',
  REGISTER: 'auth/register',
  USERBYID: (userId) => {
    return `login/${userId}`;
  },
};
