import axios from 'axios';
import React from 'react'
import cls from "./StarredBlock.module.scss";

const StarredBlock = ({username}) => {
  const [data, setData] = React.useState(null)

  const getRepos = async () => {
    return await axios.get(`https://api.github.com/users/${username}/starred`)
    .then(r => setData(r.data))
    .catch(e => console.log(e))
  }

  React.useEffect(() => {
    getRepos()
  }, [data])

  return (
    <div className={cls.starredBlock}>
      {
        data?.map(({name, visibility, language, id, html_url}) => (
          <h2 
            key={id} 
            onClick={() => window.location.replace(html_url)}
          >
            {name}
            <span>{visibility}</span> 
            <p>
              <span 
                className={language === 'JavaScript' ? cls.yellow : language === 'HTML' ? cls.red : cls.blue}
              ></span> 
              {language ? language : 'readme.md'}
            </p>
          </h2>
        ))
      }
    </div>
  )
}

export default StarredBlock