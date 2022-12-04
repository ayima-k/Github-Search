import axios from 'axios'
import React from 'react'
import cls from './Followers.module.scss'

const Followers = ({login}) => {
  const [data, setData] = React.useState(null)

  const getFollowers = async () => {
    return await axios.get(`https://api.github.com/users/${login}/followers`)
    .then(r => setData(r.data))
    .catch(e => console.log(e))
  }

  React.useEffect(() => {
    getFollowers()
  }, [data])

  return (
    <div className={cls.follow}>
      {
        data?.map(({login, bio, html_url, avatar_url, location, company, blog}) => (
          <div key={login} className={cls.d} onClick={() => window.location.replace(html_url)}>
            <img src={avatar_url} alt="" />
            <span>{login}</span>
          </div>
        ))
      }
    </div>
  )
}

export default Followers