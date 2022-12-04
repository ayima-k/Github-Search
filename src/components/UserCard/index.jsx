import React from 'react'
import { AiOutlineLink, AiOutlineStar } from 'react-icons/ai'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { GoLocation } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { FiUsers } from 'react-icons/fi'
import ReposBlock from '../ReposBlock'
import StarredBlock from '../StarredBlock'
import cls from './UserCard.module.scss'
import Followers from '../Followers'
import Followings from '../Followings'

const UserCard = ({ avatar_url, name, login, bio, followers, following, location, blog, public_repos, company, html_url }) => {

  const [repos, setRepos] = React.useState(true)
  const [star, setStar] = React.useState(false)
  const [follow, setFollow] = React.useState(false)
  const [followi, setFollowi] = React.useState(false)

  return (
    <div className={cls.card}>
      <div className={cls.sidebar}>
        <div className={cls.dflex}>
          <div className={cls.img}>
            <img src={avatar_url} alt="" />
          </div>
          <div className={cls.name}>
            <span>{name}</span>
            <span className={cls.nick}>{login}</span>
          </div>
        </div>
        <div>
          <p className={cls.bio}>{bio}</p>
        </div>
        <div>
          <Link 
            onClick={() => {
              setFollow(true) 
              setFollowi(false)
              setRepos(false)
              setStar(false)
            }}
          >
            <FiUsers/> 
            <span>{followers}</span> 
            followers
          </Link>
          <Link 
            onClick={() => {
              setFollowi(true) 
              setRepos(false)
              setStar(false)
              setFollow(false)
            }}
          >
              <span>{following}</span> 
              followings
          </Link>
        </div>
        <div>
          {location ? <p><GoLocation/> {location}</p> : ''}
          {blog ? <Link className={cls.foot}><p><AiOutlineLink/></p> {blog}</Link> : ''}
        </div>
        <div>
          {company ? <p><HiOutlineBuildingOffice2/> {company}</p> : ''}
        </div>
      </div>
        {
          repos || star ? (
            <div className={cls.block}>
              <div className={cls.header}>
                <button
                  onClick={() => {
                    setRepos(true)
                    setStar(false)
                    setFollow(false)
                    setFollowi(false)
                  }}
                  className={repos ? cls.active : ''}
                >
                  Repositories
                  <span>
                    {public_repos}
                  </span>
                </button>
                <button 
                  onClick={() => {
                    setStar(true)
                    setRepos(false)
                    setFollow(false)
                    setFollowi(false)
                  }} 
                  className={star && !repos ? cls.active : ''}
                >
                  <AiOutlineStar/> Stars
                </button>
              </div>
              <div className={cls.content}>
                {
                  repos && <ReposBlock username={login}/>
                }
                {
                  star && <StarredBlock username={login}/>
                }
              </div>
            </div>
          ) : ''
        }
        {
          follow && <Followers login={login} />
        }
        {
          followi && <Followings login={login}/>
        }
    </div>
  )
}

export default UserCard