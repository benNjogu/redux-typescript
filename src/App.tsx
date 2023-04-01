import { Provider } from 'react-redux';
import { store } from './state';

import RepositoryList from './components/repository-list/repository-list.component';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Search for a package</h1>
        <RepositoryList />
      </div>
    </Provider>
  );
}

export default App;
