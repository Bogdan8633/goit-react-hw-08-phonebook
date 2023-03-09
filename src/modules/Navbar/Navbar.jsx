import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth.jsx';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from 'redux/auth/auth-selectors';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={styles.navbar}>
      <Link to="/">Logo</Link>
      <NavbarMenu />
      {!isLogin ? <NavbarAuth /> : <NavbarUser />}
    </div>
  );
};

export default Navbar;
