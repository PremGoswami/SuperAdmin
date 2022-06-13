import './App.css';
import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom'
import ConsumersData from './components/consumers-data/consumers-data';
import UserData from './components/userData/user-data'
import EditUser from './components/Edit-user/edit-user'


const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<ConsumersData/>}/>
      <Route path='/user' element = {<UserData/>}/>
      <Route path = '/user/edit-user' element = {<EditUser/>}/>
    </Routes>
  );
}

export default App;
