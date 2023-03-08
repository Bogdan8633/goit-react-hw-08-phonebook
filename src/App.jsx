import { Provider } from 'react-redux';

import { store } from './redux/store';

import MyContactsPage from './pages/MyContactsPage/MyContactsPage';
import styles from './app.module.css';

function App() {
  return (
    <Provider store={store}>
      <div className={styles.totalContainer}>
        <MyContactsPage />
      </div>
    </Provider>
  );
}
export default App;
