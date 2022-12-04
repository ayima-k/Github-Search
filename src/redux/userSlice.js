import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios  from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchUsersStatus', async(params) => {
  const { user } = params
  const users = await axios.get(
    `https://api.github.com/${user}`
  )
  .then(r => r.data)
  .catch(e => console.log(e))
  return users;
})

const initialState = { 
  items: [],
  searchValue: ' ',
  status: 'loading'
}

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers(state, action) {
      state.items = action.payload
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = 'success'
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.items = []
      state.status = 'pending'
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = 'error'
      state.items = []
    });
  }
})

export const { setUsers, setSearchValue } = userSlice.actions

export default userSlice.reducer