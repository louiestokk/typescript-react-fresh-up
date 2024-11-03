import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface TaskState {
    task: string[]
  }
  
  const initialState: TaskState = {
    task: [],
  }
  
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
      addTask: (state, action: PayloadAction<string>)  => {
        state.task.push(...action.payload)
      },
    
      
    },
  })

  export const {addTask} = taskSlice.actions
  export const addedTask = (state:RootState) => state.task
  export default taskSlice.reducer