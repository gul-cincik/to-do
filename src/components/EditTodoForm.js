//1
// rafc
import React, {useState} from 'react'

export const EditToDdoForm = ({editTodo, task}) => {

  // const [value, setValue] = useState("") // input şu anda boş bi string. yani başlangıçta.
  const [value, setValue] = useState(task.task) // input şu anda boş bi string. yani başlangıçta.

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);

    //after submit te form we want to setValue to be an empty string.
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className='todo-input' value={value} placeholder='Görevi güncelle' onChange={(e) => setValue(e.target.value)}/> 
      <button type='submit' className='todo-btn'>Güncelle</button>
    </form>
  )
}
