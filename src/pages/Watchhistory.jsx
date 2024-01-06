import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletewatchhistory, getAllwatchhistory } from '../Services/allApi';

function Watchhistory() {

  const [history, sethistory] = useState([])
  async function watchhistory() {
    const response = await getAllwatchhistory();
    const { data } = response;
    console.log("-------his--------")
    console.log(data)
    sethistory(data)
  }


  useEffect(() => {
    watchhistory();
  }, [])

  const handledelete=async(id)=>{
    await deletewatchhistory(id);
    watchhistory();
  }


  return (
    <>

      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h5>Watch History</h5>
        <Link to='/home' style={{ textDecoration: 'none', color: "white", fontSize: "14px", fontWeight: "600" }}>
          <i class="fa-solid fa-arrow-left me-2"></i>Back to Home
        </Link>
      </div>

      <table className='table container mb-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>Timestamp</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>

          {
            history.length > 0 ?
              history.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.caption}</td>
                  <td>{item.embededLink}</td>
                  <td>{item.timestamp}</td>
                  <td><button onClick={()=>handledelete(item.id)} className='btn btn-danger'><i class="fa-solid fa-trash"></i></button></td>
                </tr>
              ))
              :
              <p>No watch history</p>
          }

        </tbody>
      </table>

    </>
  )
}


export default Watchhistory