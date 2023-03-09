import styles from './navbarUser.module.css';
import Button from 'shared/components/Button/Button';

import { useSelector } from 'react-redux';

import { getUser } from 'redux/auth/auth-selectors';

const NavbarUser = () => {
  const { email } = useSelector(getUser);

  return (
    <div>
      <span className={styles.userName}>{email}</span>
      <Button>Logout</Button>
    </div>
  );
};

export default NavbarUser;
