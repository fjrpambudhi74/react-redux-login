import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login';
import Logout from './components/Logout';
import './App.css';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      {user ? <Logout/> : <Login/>}
    </div>
  );
}

export default App;
