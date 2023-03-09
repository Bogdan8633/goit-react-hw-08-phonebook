import styles from './navbarUser.module.css';
import Button from 'shared/components/Button/Button';

const NavbarUser = () => {
  return (
    <div>
      <span className={styles.userName}>Bogdan</span>
      <Button>Logout</Button>
    </div>
  );
};

export default NavbarUser;
