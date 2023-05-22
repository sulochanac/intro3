import logo from './logo.svg';
import './App.css';
import { Student } from './Components/Student/Student';
import { ParentComp } from './Components/Child/ParentComp';
import { UsersComp } from './Components/User.jsx/UsersComp';

function App() {
  return (
    <div className="App">
      {/* <Student/> */}
      {/* <ParentComp/> */}
      <UsersComp/>
    </div>
  );
}

export default App;
