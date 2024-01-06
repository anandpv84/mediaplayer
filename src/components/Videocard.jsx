import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtohistory, deleteVideo } from '../Services/allApi';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Videocard({ displayVideo, setdeletevideostatus }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    setShow(true);
    const {caption,embededLink}=displayVideo;
    const today= new Date;
    console.log(today);
    let timestamp=new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    console.log(timestamp)

    let videoDetails={
      caption:caption,
      embededLink:embededLink,
      timestamp:timestamp  

    }
    await addtohistory(videoDetails)

  }

  console.log(displayVideo)
  const removeVideo = async (id) => {
    const response = await deleteVideo(id);
    setdeletevideostatus(true)
  }


  return (
    <>

      <Card style={{ width: '13rem', height: '300px' }} onClick={handleShow}>
        <Card.Img variant="top" width="100%" height='220px' src={displayVideo.url} />
        <Card.Body>
          <div className='d-flex align-items-center justify-content-evenly'>
            <h6>{displayVideo.caption}</h6>
            <Button variant='danger' className='ms-5' onClick={() => removeVideo(displayVideo.id)}><i className='fa-solid fa-trash'></i></Button>
          </div>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="470" height="250" src={`${displayVideo.embededLink}?autoply=1`}
         frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Videocard