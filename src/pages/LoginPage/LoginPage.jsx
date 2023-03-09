import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selectors';

import LoginForm from 'modules/LoginForm/LoginForm';

const LoginPage = () => {
  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/my-contacts" />;
  }

  return (
    <div>
      <h2>Login Page</h2>
      <LoginForm onSubmit={handleSignup} />
    </div>
  );
};
export default LoginPage;
