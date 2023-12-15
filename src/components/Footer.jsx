import React from 'react'
import './Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { Link } from '@mui/material';
import { Twitter, Youtube, Instagram, GitHub } from 'react-feather';



function Footer() {
  return (
    <div className='footer'>

    <div className='footer-content'>
      <Container>
        
        <Row>
          <Col ><span style={{fontSize:"30px",fontWeight:"bold"}}>Coursespace</span> <br />
           <div className='footer-para'>
              Coursespace is an online learning platform that has <br />
              been operating since 2015 until now.
           </div>
           <div className='social'>
         <Button className='btnnn' style={{color:"white",backgroundColor:"rgb(8, 99, 113)",borderColor:"rgb(8, 99, 113)"}}> <Youtube /></Button>
          <Button className='btnnn' style={{color:"white",backgroundColor:"rgb(8, 99, 113)",borderColor:"rgb(8, 99, 113)"}}> <Instagram/></Button>
           <Button className='btnnn' style={{color:"white",backgroundColor:"rgb(8, 99, 113)",borderColor:"rgb(8, 99, 113)"}}> <  Twitter /></Button>
           <Button  style={{color:"white",backgroundColor:"rgb(8, 99, 113)",borderColor:"rgb(8, 99, 113)"}}> <GitHub /></Button>

            


           </div>
          </Col>
          <Col md="auto"><span style={{fontWeight:"bold"}}>Course</span>
          <div className='box'>
            <a href=''  className='link' style={{color:"white",textDecoration:"none"}}>UI/UX Design</a> <br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Mobile Development</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Machine Learning</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Web Development</a>
          </div> 
          </Col>
          <Col xs lg="2">
           <span style={{fontWeight:"bold"}}> Menu</span>
           <div className='box'>
            <a href='' style={{color:"white",textDecoration:"none"}}>Home</a> <br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Courses</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Testimonial</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Mentor</a>
          </div> 
          </Col>
          <Col xs lg="2">
         <span style={{fontWeight:"bold"}}> About</span>
         <div className='box'>
            <a href='' style={{color:"white",textDecoration:"none"}}>Contact Us</a> <br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Privacy & Policy</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>Terms & Conditions</a><br />
            <a href='' style={{color:"white",textDecoration:"none",lineHeight:"30px"}}>FAQ</a>
          </div> 
          </Col>
        </Row>
      </Container>
    </div>


        
    </div>
  )
}

export default Footer