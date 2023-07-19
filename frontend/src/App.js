import './App.css';
import Add from "./components/add"
import UpdateEmploye  from './components/updateEmploye';
// import Update from "./components/updateEmploye"
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios'
import DeleteData from './components/Delete'
const API = "http://localhost:4000/"
const App = () => {
  const history = useNavigate();
  const [users, setUsers] = useState([])
  const fatchUsers = async (url) => {
    try {
      const res = await axios.get(url)
      const data = await res.data

      setUsers(data);
      console.log("hii")

    } catch (e) {
      console.error(e)
    }
  }
  const up = () => {
    let demo = [...users]
    if (users.length > 0) {
      let result = demo.sort((a, b) => a.name.localeCompare(b.name))
      setUsers(result)
    }
  }
  const down = () => {
    let demo = [...users]
    if (users.length > 0) {
      let result = demo.sort((a, b) => b.name.localeCompare(a.name))
      setUsers(result)
    }
  }

  function add() {
    history("/Add")

  }
  useEffect(() => {
    fatchUsers(API);
  }, [])
  return (
    <>
      <Routes>
        <Route exact path="/" element={
          <table className="container">
            <thead >
              <tr className='para' >
                <td style={{ display: "flex", justifyContent: "space-around" }}><p>  <h3 >Experience</h3> </p>
                  <h3 style={{ marginTop: "35px" }}>{users.length} Item(s)</h3>
                  <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}><button onClick={up}>🔼</button>
                    <button onClick={down}  >🔽</button></div>
                  <div style={{ marginTop: "33px" }}><button onClick={add}>New user</button></div>
                </td>
              </tr>
            </thead>
            <tbody style={{ margin: "0px, 20px" }}>
              <DeleteData users={users} />
            </tbody>
          </table>} />

        <Route exact path="/Add" element={<Add />} />
        <Route exact path="/Update/:id" element={<UpdateEmploye />} />
      </Routes>

    </>
  )
}
export default App