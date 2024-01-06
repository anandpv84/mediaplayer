import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Landing() {
  return (
    <>

      <Container>
        <Row>

          <Col>
            <h4>Welcome to Media player</h4>
            <p>simply dummy text of the printing and typesetting industry. typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <Link to='/home'><Button to='/home' className='btn btn-warning mt-3'>Get Start<i class="fa-solid fa-arrow-right ms-2"></i></Button></Link>
          </Col>

          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" className='ms-5' height={'400px'} />
          </Col>

        </Row>
      </Container>
      <div className='container mb-5'>
        <h3>Features</h3>

        <div className='cards d-flex align-items-center justify-content-evenly mt-5'>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' alt='' src='https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                text of the printing and typesetting industry. typesetting, remaining essentially unchanged.
              </Card.Text>
              <button variant='primary'  className='btn btn-warning mt-3'>Go Somewhere</button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' alt='' src='https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                text of the printing and typesetting industry. typesetting, remaining essentially unchanged.
              </Card.Text>
              <button variant='primary'  className='btn btn-warning mt-3'>Go Somewhere</button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant='top' alt='' src='https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif' />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                text of the printing and typesetting industry. typesetting, remaining essentially unchanged.
              </Card.Text>
              <button variant='primary'  className='btn btn-warning mt-3'>Go Somewhere</button>
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded'>
        <Row>
          <Col>
            <h3 className='text-warning mt-5 mb-5'>Simple and Powerfull</h3>
           <p><span className='fs-5 fw-bolder'>Play everywhere </span>the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing so</p>
            <p><span className='fs-5 fw-bolder'>Play everywhere </span>the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing so</p>
            <p><span className='fs-5 fw-bolder'>Play everywhere </span>the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing so</p>
          </Col>
          <Col>
          <div className='mt-4'>
          <iframe width="100%" height="300" src="https://www.youtube.com/embed/3wDiqlTNlfQ" title="LEO - Naa Ready Song Video | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </Col>
        </Row>
      </div>

    </>
  )
}

export default Landing