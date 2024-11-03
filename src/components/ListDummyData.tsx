import React from 'react'
import { User } from '../models'
interface Props {
    users:User[];
}

const ListDummyData:React.FC<Props> = () => {
  return (
    <div>ListDummyData</div>
  )
}

export default ListDummyData