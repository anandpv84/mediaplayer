import React from 'react'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { useNavigate } from 'react-router-dom'


function Home() {

  const navigateByUrl=useNavigate()


  return (
    <>

      <div className='container mt-5 mb-5 d-flex justify-content-between align-items-center'>
        <div className='add_video'>
          <Add/>
        </div>
        <div>
          <h5 style={{cursor:'pointer'}} onClick={()=> navigateByUrl('/watch')}>Watch History</h5>
        </div>
      </div>

      <div  className='container mt-5 mb-5 d-flex justify-content-between '>
        <div className='col-md-6 mt-5'>
          <h4>All videos</h4>
          <View/>
        </div>
        <div>
          <Category/>
        </div>
      </div>


    </>
  )
}

export default Home