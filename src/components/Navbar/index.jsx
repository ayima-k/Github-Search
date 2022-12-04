import axios from 'axios';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BsGithub } from 'react-icons/bs'
import { fetchUsers } from '../../redux/userSlice';
import Search from '../Search';
import cls from './Navbar.module.scss'

const Navbar = () => {
  const { searchValue } = useSelector(state => state.users)
  const [data, setData] = React.useState(null)
  const dispatch = useDispatch()

  const getSearch = async () => {
    return await axios.get(`https://api.github.com/search/users?q=${searchValue}`)
    .then(r => setData(r.data.items))
    .catch(e => console.log(e))
  }

  React.useEffect(() => {
    if (searchValue.length > 3) {
      getSearch()
    }
  }, [data, searchValue])
  console.log(data);

  const handleSearch = async (login) => {
    const user = `users/${login}`
    dispatch(fetchUsers({user}))
  }


  return (
    <div className={cls.block}>
      <BsGithub style={{color: 'white', fontSize: '45px'}}/>
      <div>
        <Search/>
        {
        searchValue.length > 3 && <div className={cls.dropdown}>
            <div className={cls.block}>
              {
                searchValue.length > 3 && data?.map(({login}) => (
                  <div><h2 onClick={() => handleSearch(login)}>{login ? login : 'Not Found'}</h2></div>
                ))
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar