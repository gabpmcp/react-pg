import { Provider } from 'react-redux';
import store from './state/store';
import Layout from './organism/Layout.jsx'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout/>
      </div>
    </Provider>
  )
}

export default App;
