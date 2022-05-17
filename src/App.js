import './App.css';
import { ApiProvider } from './store/ApiContext';
import Button from './components/Button';
import Home from './components/Home'

function App() {
  return (
    <div>
      <h1>Hola</h1>
      <ApiProvider>
        <Button/>
        <Home/>
      </ApiProvider>
    </div>
  );
}

export default App;
