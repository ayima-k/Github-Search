import React from 'react'
import axios from 'axios'
import cls from './Followings.module.scss'
import { useDispatch } from 'react-redux'

const Followings = ({login}) => {
  const [data, setData] = React.useState(null)

  const getFollowings = async () => {
    return await axios.get(`https://api.github.com/users/${login}/following`)
    .then(r => setData(r.data))
    .catch(e => console.log(e))
  }

  React.useEffect(() => {
    getFollowings()
  }, [data])

  return (
    <div className={cls.follow}>
      {
        data?.map(({login, bio, html_url, avatar_url}) => (
          <div key={login} className={cls.d} onClick={() => window.location.replace(html_url)}>
            <img src={avatar_url} alt="" />
            <span>{login}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Followings