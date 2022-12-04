import React from 'react'
import { useDispatch } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { setSearchValue } from '../../redux/userSlice';
import debounce from 'lodash.debounce'

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('')
  const inputRef = React.useRef(null)
  
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str))
    }, 500
  ), [])

  const onChangeInput = (e) => {
    setValue(e)
    updateSearchValue(e)
  }

  return (
    <>
      <label><AiOutlineSearch/></label>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
        type="text" 
        placeholder='Search or jump to...' 
      />
    </>
  )
}

export default Search