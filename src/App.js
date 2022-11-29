import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import { useDispatch,  useSelector } from 'react-redux'
import { useEffect } from "react";
import { fetchUsers } from "./redux/userSlice";
 
function App() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)

  const getUsers = async () => {
    dispatch(fetchUsers())
  }
  useEffect(() => {
    getUsers()
  }, [])

  console.log(users);
  
  return (
    <div className="App">
      <Navbar/>
      {/* <UserCard /> */}
    </div>
  );
}

export default App;