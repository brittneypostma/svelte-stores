import {persistStore} from './persistStore'


const defaultData = [
  {
    title: 'Todo',
  },
  {
    title: 'In Progress',
  },
  {
    title: 'Complete',
  },
]

export const store = persistStore('data', defaultData)