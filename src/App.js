import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import { useDispatch,  useSelector } from 'react-redux'
import { useEffect, useRef, useState } from "react";
import { fetchUsers, setUsers } from "./redux/userSlice";
 
function App() {
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const { items, searchValue } = useSelector((state) => state.users)
  
  const getUsers = async () => {
    const user = 'users/ayima-k'
    dispatch(fetchUsers({user}))
  }
  useEffect(() => {
    if (!isSearch.current) {
      getUsers()
    }
    isSearch.current = false
  }, [searchValue])
  
  return (
    <div className="App">
      <Navbar />
      <UserCard {...items} />
    </div>
  );
}

export default App;