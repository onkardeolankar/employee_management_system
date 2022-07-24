import './App.css';
import Dashboard from './Page/Dashboard';
import {useEffect, useState} from "react";

const API = "https://employeenodejass.herokuapp.com/employees";

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  useEffect(() => {
    fetch(`${API}`)
    .then((data) => data.json())
    .then((mbs) => setEmployeesData(mbs));
  },[]);

  return (
    <div>
      <Dashboard />
    </div>
  );
}

export default App;
