import React from 'react'
import { AiOutlineLink } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'
import cls from './UserCard.module.scss'

const UserCard = ({ avatar_url, name, login, bio, followers, followings, location, blog, public_repos }) => {
  return (
    <div className={cls.card}>
      <div className={cls.sidebar}>
        <div className={cls.img}>
          <img src={avatar_url} alt="" />
        </div>
        <div className={cls.name}>
          <span>{name}</span>
          <span className={cls.nick}>{login}</span>
        </div>
        <div>
          <p>{bio}</p>
        </div>
        <div>
          <Link to={'/'}><FiUsers/> <span>{followers}</span> followers</Link>
          <Link to={'/'}><span>{followings}</span> followings</Link>
        </div>
        <div>
          <p><GoLocation/> {location}</p>
          <Link className={cls.foot}><p><AiOutlineLink/></p> {blog}</Link>
        </div>
      </div>
      <div className={cls.block}>
        <div className={cls.header}>
          <button>Repositories {public_repos}</button>
          <button>Stars 1</button>
        </div>
        <div className={cls.content}>

        </div>
      </div>
    </div>
  )
}

export default UserCard