import React, { useState } from 'react'
import List from './List'
import Form from './Form'

export default function CreateForm() {
    const [form,useForm] = useState([]);
    const [list,useList] = useState()   
  return (
    <div>
        <Form/>
        <List/>
    </div>
  )
}
