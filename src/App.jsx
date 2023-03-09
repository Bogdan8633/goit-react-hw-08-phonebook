import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from 'modules/Navbar/Navbar';
import UserRoutes from 'UserRoutes';

import { store } from './redux/store';

import styles from './app.module.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className={styles.totalContainer}>
          <Navbar />
          <UserRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
