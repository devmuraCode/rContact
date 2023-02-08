import axios from 'axios'
import { IUser } from '../../models/IUser'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const fetchUser = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkApi) => {
    try {
        const response = await axios.get<IUser[]>('https://r-contact-backend.onrender.com/api')
          return response.data
    } catch (e) {
        return thunkApi.rejectWithValue('Error')
    }
  }
)
