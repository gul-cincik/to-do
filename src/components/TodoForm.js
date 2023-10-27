//1
// rafc
import React, {useState} from 'react'

export const ToDoForm = ({addTodo}) => {

  const [value, setValue] = useState("") // input şu anda boş bi string. yani başlangıçta.

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)

    //after submit te form we want to setValue to be an empty string.
    setValue("")
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      {/* Buraya onChange={handleChange} vermek yerine e=>e.target.value yapıyoruz. ve setvalue verioruz.*/}
      {/* <input type="text" className='todo-input'placeholder='Bugün ne yapılacak?' onChange={handleChange}/> 
      <input type="text" className='todo-input'placeholder='Bugün ne yapılacak?' onChange={(e) => console.log(e.target.value)}/>  */}
      <input type="text" className='todo-input' value={value} placeholder='Bugün ne yapılacak?' onChange={(e) => setValue(e.target.value)}/> 
      <button type='submit' className='todo-btn'>Ekle</button>
    </form>
  )
}
