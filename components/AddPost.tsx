import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Link from 'next/link'
type Props = {}

const AddPost = (props: Props) => {

  const [name,setName] = useState('')
  const [explanation,setExplanation] = useState('')


  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    const  date =  new Date()
    await axios.post('/api/post/add',{
      name: name,
      explanation: explanation,
      date:date.toDateString()
    })
    .then(response => console.log(response))
    .catch((err)=>{console.log(err)})
    return <Navigate to='/'/>
  }

  return (
    
<form onSubmit={handleSubmit}>
  <div className="mb-6">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input  onChange={(e)=> setName(e.target.value)} type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
  </div>
  
  <div className='mb-6' >
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea id="message" onChange={(e)=> setExplanation(e.target.value)}  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
  </div>
    
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onSubmit={(e)=>e.preventDefault()}>Submit</button>
</form>

  )
}

export default AddPost