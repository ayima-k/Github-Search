import React from 'react'
import axios from 'axios';
import cls from './ReposBlock.module.scss'

const ReposBlock = ({username}) => {
  const [data, setData] = React.useState(null)
  const [sort, setSort] = React.useState('all')
  const [type, setType] = React.useState('all')
  const [lang, setLang] = React.useState('javascript')
  const page = 1

  const getRepos = async () => {
    return await axios.get(`https://api.github.com/users/${username}/repos?sort=${sort}`)
    .then(r => setData(r.data))
    .catch(e => console.log(e))
  }

  React.useEffect(() => {
    getRepos()
  }, [data])

  return (
    <div className={cls.reposBlock}>
      <div className={cls.block}>
        <select name="type" onChange={(e) => setType(e.target.value)}>
          <option value="type" hidden>Type</option>
          <option value="all" className={cls.op} >All</option>
          <option value="public" className={cls.op} >Public</option>
          <option value="private" className={cls.op} >Private</option>
        </select>
        <select name="language" onChange={(e) => setLang(e.target.value)}>
          <option value="type" hidden>Language</option>
          <option value="all" className={cls.op} >All</option>
          <option value="js" className={cls.op} >JavaScript</option>
          <option value="ts" className={cls.op} >TypeScript</option>
          <option value="html" className={cls.op} >HTML</option>
          <option value="css" className={cls.op} >CSS</option>
        </select>
        <select name="sort" onChange={(e) => setSort(e.target.value)}>
          <option value="sort" hidden>Sort</option>
          <option value="name" className={cls.op} >Name</option>
          <option value="stars" className={cls.op} >Stars</option>
        </select>
      </div>
      {
        data?.map(({name, id, visibility, language, html_url}) =>
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
        )
      }
      <div className={cls.pagination}>
        <button disabled={page === 1}>Previous </button>
        <button>Next</button>
      </div>
    </div>
  )
}

export default ReposBlock