import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadVideo } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [video, setvideo] = useState({
        id: "",
        caption: "",
        url: "",
        embededLink: ""
    });



    const embededvideoLink = (e) => {
        const { value } = e.target;
        console.log(value.slice(-11))
        const videoLink = `https://www.youtube.com/embed/${value.slice(-11)}`;
        setvideo({ ...video, embededLink: videoLink })
    }

    console.log(video)

    const handleUplod = async () => {
        const { id, caption, url, embededLink } = video
        if (!id || !caption || !url || !embededLink) {
            toast.warn("please fill the form completely")
        } else {
            const response = await uploadVideo(video)
            console.log("response of upload video")
            console.log(response)
            if (response.status === 201) {
                toast.success(`succesfully inserted the video ${response.data.caption}`)
                handleClose()
            } else {
                toast.error("somthing went wrong")
                
            }
        }

    }

    return (
        <>

            <div className='d-flex align-items-center'>
                <h5>Uplod New videos</h5>
                <Button onClick={handleShow} className='btn' style={{ backgroundColor: 'transparent', border: 'none', color: 'white' }}><i class="fa-solid fa-cloud-arrow-up "></i></Button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa-solid fa-film text-warning me-3"></i>Uplod video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the form</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter video Id" onChange={(e) => setvideo({ ...video, id: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter video caption" onChange={(e) => setvideo({ ...video, caption: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter video Image Url" onChange={(e) => setvideo({ ...video, url: e.target.value })} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter video Youtube Link" onChange={(e) => embededvideoLink(e)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='btn-warning' onClick={handleUplod}>Uplod</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                theme="colored"
            />
        

        </>
    )

}





export default Add