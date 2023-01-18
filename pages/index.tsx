import React, { useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios';
import Blog from '../components/Blog'
import connectDB from '../utils/connectDB';
import model from '../model/model';
import NavBar from '../components/NavBar';


type Props = {
  post:[
    name: string,
    explanation:string,
    date:Date
  ]
  
}
type Data = {
  name:string,
  explanation:string,
  date:Date
}



const Home =  ( {post}:Props ) => {
  

  const [data, setData] = React.useState<[Data]>([{
    name: 'Sexavet',
    explanation: 'Emirli'
  }] as [Data]);

  useEffect(()=>{
    // @ts-ignore
    setData(post)
  })
  





  return (
    <div className='w-auto h-full bg-gray-900 '>
      <Head>
        <title>Elsevers's Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
    
      <main > 
        
      <Blog
      // @ts-ignore
      post={data}
      />

      </main>
    </div>
  )
}
export default Home


export const getServerSideProps = async ()=>{
  try {
    console.log('CONNECTING TO MONGO');
    await connectDB();
    console.log('CONNECTED TO MONGO');
    const post = await model.find()
    return{
      props:{
        post: JSON.parse(JSON.stringify(post))
      }
    }
    

  } catch (error) {
    console.log(`Error ==>  ${error}`);
    return{
      props:{
        notFound: true
      }
    }
  }
}