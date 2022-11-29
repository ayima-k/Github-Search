import React from 'react'
import Logo from '../../assets/logo.png'
import { useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai'
import cls from './Navbar.module.scss'
import { fetchUsers } from '../../redux/userSlice';

const Navbar = () => {
  const dispatch = useDispatch()
  // dispatch(fetchUsers())

  return (
    <div className={cls.block}>
      <img src={Logo} alt=""/>
      <div>
        <label><AiOutlineSearch/></label>
        <input type="text" placeholder='Search user...' />
      </div>
    </div>
  )
}

export default Navbar