import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link } from 'react-router-dom';






function Header() {

  // for login

  const [show, setShow] = useState(false);
  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // for register

  const [sshow, setSshow] = useState(false);
  const handleCclose = () => setSshow(false);
  const handleSshow = () => setSshow(true);

  return (
    <div>

<Navbar expand="lg" className="bg-body-tertiary" style={{position:"fixed",width:"100%",margin:"0",top:"0"}}>
      <Container fluid style={{padding:"10px",zIndex:"10"}}>
        <Navbar href="#" style={{marginLeft:"40px",fontSize:"23px"}}><Link to={'/'} style={{textDecoration:"none",color:"black"}}>Course<span style={{color:"rgb(8, 99, 113)"}}>space</span></Link></Navbar>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home" style={{marginLeft:"250px"}} className='active'>Home</Nav.Link>
            <Nav.Link href="#about" style={{marginLeft:"40px"}}>About</Nav.Link>
            <Nav.Link href="#test" style={{marginLeft:"40px"}}>Testimonial</Nav.Link>
            <Nav.Link href="#mentor" style={{marginLeft:"40px"}}>Mentor</Nav.Link>


           
            
          </Nav>
          <Form className="d-flex ">
           
          <Button  onClick={handleShow} variant="outline" style={{color:"rgb(8, 99, 113)",borderColor:"rgb(8, 99, 113)"}}>Sign In</Button>{' '}
          <Button onClick={handleSshow} style={{backgroundColor:"rgb(8, 99, 113)",border:"none",marginLeft:"10px",marginRight:"20px"}}>Sign Up</Button>{' '}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     {/* modal login */}


     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:"200px",color:"rgb(8, 99, 113)",fontWeight:"bold"}}><center>Login</center></Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{backgroundImage:"url(https://www.bankrate.com/2020/06/30181842/How-to-calculate-student-loan-interest.jpg?auto=webp&optimize=high&crop=16:9)",height:"250px"}}>
          <Form style={{marginTop:"30px",padding:"10px"}}>

           

          

            {/* user name*/}
          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="email or phone number">
          <Form.Control  type="text" placeholder=" email or phone number"  name='id' />
          </FloatingLabel>

          {/* password */}

          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="Password">
          <Form.Control  type="text" placeholder=" Password" name='caption'  />
          </FloatingLabel>

       


          


          </Form>



        </Modal.Body>
        <Modal.Footer>
          
          <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginLeft: "20px", marginRight: "20px", height: "50px",width:"460px" }}>Login</Button>{' '}
        </Modal.Footer>
      </Modal>


       {/* modal Register */}


     <Modal
        show={sshow}
        onHide={handleCclose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{marginLeft:"180px",color:"rgb(8, 99, 113)",fontWeight:"bold"}}><center>Registration</center></Modal.Title>
        </Modal.Header>
        <Modal.Body  style={{backgroundImage:"url(https://www.bankrate.com/2020/06/30181842/How-to-calculate-student-loan-interest.jpg?auto=webp&optimize=high&crop=16:9)",height:"500px"}}>
          <Form style={{marginTop:"10px",padding:"20px"}}>

            {/* user name*/}
          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="First Name">
          <Form.Control  type="text" placeholder=" First Name"  name='First Name' />
          </FloatingLabel>


          {/* user name*/}
          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="Last Name ">
          <Form.Control  type="text" placeholder=" Last name"  name='Last Name' />
          </FloatingLabel>

          {/* user name*/}
          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="email id">
          <Form.Control  type="text" placeholder=" email id"  name='email-id' />
          </FloatingLabel>

            {/* user name*/}
          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="phone number">
          <Form.Control  type="text" placeholder=" phone number"  name='phone' />
          </FloatingLabel>

          {/* password */}

          <FloatingLabel  className='mb-3' controlId="floatingPassword" label="Password">
          <Form.Control  type="text" placeholder=" Password" name='pwd'  />
          </FloatingLabel>

          {/* password */}

          <FloatingLabel  className='mb-3' controlId="floatingPassword" label=" Confirm Password">
          <Form.Control  type="text" placeholder="Confirm Password" name='cpwd'  />
          </FloatingLabel>

       


          


          </Form>



        </Modal.Body>
        <Modal.Footer>
          
          <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginLeft: "10px", marginRight: "10px", height: "50px",width:"500px" }}>Register</Button>{' '}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Header