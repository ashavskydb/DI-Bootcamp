import { Provider } from 'react-redux';
import store from './app/store';
import UserData from './app/components/UserData';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <UserData />
    </Provider>
  );
};

export default App;
