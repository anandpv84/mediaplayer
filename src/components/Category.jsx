import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addcategory, deletecategory, getAllcategory } from '../Services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Category() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [category, setcategory] = useState()
    const [allcategory,setallcategory]=useState([])
    const handleaddcategory = async () => {
        if (category) {
            let body = {
                category: category,
                allvideos: []
            }
            const response = await addcategory(body)
            if (response.status === 201) {
                toast.success(`Succesfully added category ${category}`)
                setcategory("")
                handleClose();
                getAllcategory();
            }
        } else {
            toast.warn("please fill the form completely")
        }
    }

    const getallcat = async () => {
        const response = await getAllcategory();
        const { data } = response;
        console.log("------all category--")
        console.log(response)
        setallcategory(data)
    }

    useEffect(() => {
        getallcat();
    }, [])

    const handledelete = async (id) => {
        await deletecategory(id);
        getallcat();
    }
    

    return (
        <>

            <div>
                <button className='btn btn-warning' onClick={handleShow}>Add new Category</button>
            </div>

            <div className='ms-3'>
                {
                    allcategory?.length > 0 ?
                        allcategory.map((item) => (

                            <div className='m-5 border border-secondary rounded p-3'>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <h6>{item.category}</h6>
                                    <button className='btn btn-danger ms-3' onClick={()=>handledelete(item.id)}>
                                        <i class="fa-trash fa-solid"></i>
                                    </button>
                                </div>
                            </div>

                        ))
                        :
                        <p>No data</p>
                }
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title><i class="fa-solid fa-list text-warning me-3"></i>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please fill the form</p>
                    <Form className='border border-secondary p-3 rounded'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter Category Name" onChange={(e) => setcategory(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" className='btn-warning' onClick={handleaddcategory}>Add</Button>
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

export default Category