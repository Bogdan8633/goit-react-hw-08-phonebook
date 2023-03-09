import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth.jsx';

import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Logo</Link>
      <NavbarMenu />
      <NavbarAuth />
    </div>
  );
};

export default Navbar;
