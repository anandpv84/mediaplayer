import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Videocard from '../components/Videocard'
import { getAllvideos} from '../Services/allApi';

function View(uploadVideoStatus) {
  const [allVideo, setAllvideo] = useState([])
  const [deleteVideostatus,setdeletevideostatus] = useState(false)

  const getAllUploadvideos = async () => {
    const response = await getAllvideos();
    const { data } = response;
    setAllvideo(data)
  }

  useEffect(() => {
    getAllUploadvideos();
    setdeletevideostatus(false)
  }, [uploadVideoStatus,deleteVideostatus])
  console.log(allVideo)

  return (
    <>

      <Row>
        {
          allVideo?.length > 0 ?
          
            allVideo.map((video) => (
              <Col sm={12} md={6} lg={4} xl={4} className='m-3'>
                <Videocard displayVideo={video} setdeletevideostatus={setdeletevideostatus}/>
              </Col>
            ))
            :
            <p>No item to display</p>
        }

      </Row>

    </>
  )
}

export default View 