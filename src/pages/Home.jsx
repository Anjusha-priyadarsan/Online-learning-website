import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Play } from 'react-feather';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

// mobile stepper
const steps = [
  {
    label:'Detailed Learning Material',
    name: 'Ashley Graham',
    desig:'Back-end Developer',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
    imgPath:"data:image/jpeg;base64,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"
  },
  {
    label: 'Great Quality',
    name:'Rski',
    desig:'web Developer',
    description:
      'A group contains one or more ads which target a shared set of keywords.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est blanditiis molestiae eos provident beatae aliquid id sunt voluptate . ',
      imgPath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVXcAci-LQ8RuANgwOpX8egoZYahwdvR6lJA&usqp=CAU"
  },
  {
    label:'Very Complete Class',
    name: 'Ardhik Malhothra   ',
    desig:'UI/UX Designer',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell 
        .`,
              imgPath:"data:image/jpeg;base64,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"
  },
];









function Home() {

  //useNavigate()--this hook is used  to redirect from one page to another page
  const navigate = useNavigate()

  const handlenavigate = () => {

    navigate('/course')

  }



  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };




  return (
    <div id='home' style={{ paddingTop: "30px" }}>
      <Container>
        <Row>
          <Col><div className='home-head'><h1 style={{ fontSize: "60px" }}><span style={{ color: "rgb(8, 99, 113)" }}>Improve</span> your Skill <br />with Different Way</h1></div>

            <div className='para' > <p>Let's take an online course to improve your skills in a different way,<br /> you can set your own study time according to your learning speed. So <br /> you san study comfortable and absorb the material easily.</p></div>
            <div className='hme-btns'>
              <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginLeft: "10px", marginRight: "15px", height: "50px" }}>Get Started</Button>{' '}
              <Button onClick={handlenavigate} variant="outline" style={{ color: "rgb(8, 99, 113)", borderColor: "rgb(8, 99, 113)", height: "50px", width: "150px" }}><Play />All Courses</Button>{' '}
            </div>
          </Col>
          <Col><img src="https://st.depositphotos.com/1743476/2206/i/600/depositphotos_22065601-stock-photo-portrait-of-multi-ethnic-students.jpg" alt="No image" width={"550px"} height={"400px"} style={{ marginTop: "45px" }} /></Col>
        </Row>
      </Container>


      {/* features */}

      <div className='testimonial' id='about'>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <img className='img-fluid' src="https://kivuto.com/wp-content/uploads/2022/04/student-with-laptop.png" alt="" height={"500px"} width={"500px"} style={{ marginTop: "30px" }} />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1>Make your<span style={{ color: "rgb(8, 99, 113)" }}>Learning</span> <br /> Enjoyable</h1> <br />
            <p>Set the way of learning according to your wishes with some of the benefits that you get us, so you on enjoy the lessons that we provide.</p>


            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card style={{ padding: "10px" }} >
                  <p>
                    <h5 style={{ color: "rgb(241, 177, 68)" }}>  Easy Accessable</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aperiam,</p>

                  </p>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6} >
                <Card style={{ padding: "10px" }} >
                  <p>
                    <h5 style={{ color: "rgb(241, 177, 68)" }}>  More afordable Cost</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aperiam,</p>

                  </p>
                </Card>




              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card style={{ padding: "10px" }}>
                  <p>
                    <h5 style={{ color: "rgb(241, 177, 68)" }}>  Flexible Study Time</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aperiam,</p>

                  </p>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Card style={{ padding: "10px" }}>
                  <p>
                    <h5 style={{ color: "rgb(241, 177, 68)" }}>  Consultation With mentor</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aperiam,</p>

                  </p>
                </Card>




              </Grid>



            </Grid>




          </Grid>


        </Grid>





      </div>

      {/* Testimonial */}

      <div className='testimonial' id='test'>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ zIndex: "5" }}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1>Testimonial What our <br /><span style={{ color: "rgb(8, 99, 113)" }}>Students Say</span></h1>
            {/* mobile stepper */} <br /> 
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
              <Paper
                square
                elevation={0}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 50,
                  pl: 2,
                  bgcolor: 'background.default',
                }}
              >
                <Typography><h4>{steps[activeStep].label}</h4></Typography>
              </Paper>
              <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
                {steps[activeStep].description} <br /> <br />
                <div  style={{padding:"10px"}}>
                    <img src={steps[activeStep].imgPath} alt="" width={"50px"} height={"50px"} style={{borderRadius:"100%"}}/> <br />
                    <h6>{steps[activeStep].name}<br /> <span style={{color:'grey',fontWeight:"normal"}}>{steps[activeStep].desig}</span></h6>


                  </div>
              </Box>
              <MobileStepper
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button style={{backgroundColor:"rgb(8, 99, 113)",borderColor:"rgb(8, 99, 113)"}}
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{backgroundColor:"rgb(8, 99, 113)",borderColor:"rgb(8, 99, 113)"}}>
                    {theme.direction === 'rtl' ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img className='img-fluid' src="https://www.rmscloud.com/hubfs/Home_Module%201_Bubble%20Person_Student%20accom.png" alt="" height={"500px"} width={"500px"} style={{ marginTop: "30px" }} />
          </Grid>

        </Grid>

      </div>

      {/* MENTORS */}

      <div className='mentors' id='mentor'>
        <h1>Our Expert Mentors</h1>
        <Grid container spacing={2} style={{ marginTop: "50px" }}>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }} style={{ height: "450px", padding: "20px", borderRadius: "10PX" }}>
              <CardMedia
                sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                image="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg"
                title="green iguana"
              />
              <CardContent style={{ paddingLeft: "2px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Rizki Known <br />
                  <span style={{ fontSize: "16px", color: "gray" }}>Fullstack Developer</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAb4AAABxCAMAAACdmjYOAAAAmVBMVEX///93d3fzUyWBvAYFpvD/ughycnJvb29sbGxzc3OsrKzyRADCwsLu7u709PTW1tbi4uIAou/k79V4uADzSxX4noyx1Hz+9PGs2vj83df3+u//4q2Eyvb/03z/uwTNzc2jo6OAgICQkJC2traLi4ucnJzb29vExMS6urrm5uaFhYVkZGSWlpb96ebt9ePyMwDM6Pv/7MkAnO+y2UxBAAAKxUlEQVR4nO2caZuzthWGTZtoIQactmm6BjAYg4c0af//j6tZdHS0Yc2bmRj51XNd82GwJCTdWs7RwuEQFRUVFRUVFRUVFRUVFRUVFRUVtaG/e+vnKfifvPWfZ5fsq9Av33nqlx+m4H/21l+fXbKvQt/9wVN/mfH90VsR3++hiC9oRXxBK+ILWhFf0Ir4glbEF7QivqAV8QWtiC9oRXxBK+ILWhHfHpSduu6UfUHEiO/puo6UMTr9nd8dN+J7shpGebKKvTt2uPjKpik/+x2friyhiRR9d/xn4BtKrAcZzHHYDh4XlBJCaeAATyxJgsN3vI/0oLcHM3aPArNUPC3WcrPi3SXekTKVXij48IBBmu0M4uIRwEe+vMQ7Uq3SCxFfkmzmr8ANFPDJpzTg7ofq4W53MkZCxLcNYOQ2fFdIgR7fXeTdCMrFk2t2yE89bsnd1SeJ5+Pj40b2cmV2AHylxBeu8QJDCNf9vby8EHbxSeP5+BKWu4M2xIpPUt2KvHNVomxceZwdz5MryCufNHaAb8t44WpIMF1SYXmm7rh7Vy1K1eOn5dvixgeDb8N4KTXQElbFCOeEeZVxpxJlYwN+WqyPw8Hndt7Ort5393jTtk1PPkXcqWACUJfKwsPnNF50t5YEPFQaAnyquxAePqf9kRI1XMSnaxf41MlbyggX8Wl6Jj5aAB9rOGG4nHsS8dn1THwsv4nRs7OFW3+lZfMF+PIs+2KX0C+uR6h7EGeYF8An+he3LTEMwrc7mPiy0ypb5QzHS81mJW1aQohcxFn2OPLjWCf1qC665WXa8jXuOXUv55XVbV6mZPXY2EN1zZgsCdFbdVW2VZbMd2LoISek4biWlY+DeObMxZPxZdL3sWCoFq+BVGDCSHzVUjPszVgzy/sE7V8nhLLzWv7ibY00t5V0CcWx2V62jEprid/jVoOe/vSKCr1hCmU0viGld79UpkTZDWW0nzOirVcLwfu5eLK1pv9kfADGYryIzjdY8IknxpJnwzRr9R6rXX7Cw1JeQ9uHqGWim0pTHV6MhmW+QtspyC9mJu5pQy/tzV+3VLtr8tn4BvDsjFBiV+F28MfXJZaaESvCGF8CXQPwjcyMOv2u74icLZDVjDNuSede3Orl8B1aUTbDeKmXH+jVH19vJWDBN8oKXPFlNvBr1pTp8WZrIDhAZW8GU2bbl8PnNF7EMRB68MaX2ivOxIePmCz4MrNLSTG09VbZAmJ8l42UyO3V8DmNl8syAs32sx++BtPjlDK62CEGvvSMq3T6KVcqWUYVeQPjT4K/myOEsNX+QU0I0ZusGqYkRC6vhg9AaBa8MFxOvvjwsQrKq2t3OhV9ezcidHxJvVKa63bGh5bGaZKW3akrU2zIAB/Y/KfjPNpnZcUpwocyQdh4LJY8yNTZlN/XsTzxsrQSppeGiyc+NJ3V8mneE6rjm8OQphuGO6TJcbjKPpXIqCWX9s36Yulqoz3KopbOh8wES2E4yUb5ZmnoZna3fdMVNvSMz/Io+BzGiyjaPO344JPL2/omYLXMOAo+CmGmBCCq8DFWtfL888ICXG11QIOBA2VCKc1RHq0CD+lDVl1+9NcU/B/+cr9TxWdtbnCOU6mVDXzo+ISxeT+oFTNFU1bfYAmdt1rMGrguiV636xZlQlsqkTYxMQL/FnzPkIoP2j42XkaOy+CBDw7FkMr1WolPwySp6i462nBUcu6oW2gH1FiFkJOmcCNfBV9jGi+K4eKFT1oHztdKfExZgoSlA8vSD4yGy4kGeUDR+oabOxPQEADLq+CDkskJRRBdnzzG10FduA8OAj5tdx/seMsFH8gbOSpJmN3rgIFYDp9K49YIbc2lH76/eevXKfg/vfVf9zs1fFAyOWGsD+jqLz/GB2Onun5lrRj9YLB4vdXWqxP8oxxMWWUussPBKtsC/FX/8UPw/e97X/1rCv6tt/7tfqeOr9CNF1EPomCP8QnzdavQhaN2BXlqO9cMo+cyECQggjyDVY0aVhUM0XS1ST8E3/ffeGrF99Mn4INKEfV65moJHuMDw2Dj0HVht/rliS/bxprsNPO/vbRe7wAvaoyL6MaVJaGDPry/Dj7NeMlUw8UDn0Rg25/TK0Y9kw7dwnpgqtO6bILFlW08sFzsR3dEJDExvg6+XDVeUtVw8cC3jUCvmIv1sf16lp6ydqEyYbX0zwGQdQgAuI1W6ODxgVe09Dcx88Fc9BBft4lgu2IAH7FFMhpGp+/myUUeyIQVn5ieXxCfWGSZ8ywMF2nHfyq+8n34DtlNvxO7LsoZs5uqF8YnjZcDjDIo//74tr7N8Kj3WdGfLMOyfqpi3caTJuzm4Pl6c590ne8D5qAbLh74ZCVv3JR3VIxunNgjqQ2jrJUhdN1/qAVOq+miG8evhA/KchMHzLB5/xCf3HzZuKrrqJjBz3HQfLluxAAX8mc/x+Hl/L4DMl5EZ8ALT4/9Ppi/Nu4KuioGqtHmtlfOJZnsIufAJbMi7Lbb/qGrLnvB12n2gDKUPcYHi8UbJwtcFVOvUa0XnVRAqoZa8FpcSeniW4Zwcfz2Y9c894JP9Ye11v4Yn9wZsB6336wY6DSWyW/YXg+AVkOUwLbJTwT13nHw2m3fDT7t/I4yEb1jxyG5HVxy4ZOOn3mFotL3CVSdVMNGHr02Qsp24Lvft/XFBtBu8KnfkFAHQY/9PohInbOfc1iS2wh6F5P9yZGqekMWxgCzIcC5C9/d9s0DZqDd4IMF36VIylTjgU+uJTPDAunVijHwoVug2vBZQ6LLD1fNONUQoP0kLRONuVHowLftx+jaDz7FeFHz7nNUSXrS2tcmStsdB0Wy4/ME97/8Bl1mTbJ/U7f59FVw2QSZMv3JI6hyaceBL9uaQA3tB59s6sa87YNPHvZLSAJtP+8TarvjoKrB7HOIKq8RiUo/UsIq2QMz+H2tanQ2hrZgRHWtHBrQEUY7PjSUr2G3MO4IH7ozrdmPXuc8WzT4Utam/bGv6unU62N8uOUQdpuipmd0SwiyM1n/nCXV9ZRlQylvM8BggW9ZMH5pjsfmkqCGhewRF75WJnBrjv24eUx3R/iw8aJG8MKXax8RIXS9YeeBT/2EBb9HVc7IQ/tfnbfpBD5Dd/zQ6baRKAndhbLFsTniwodv/s9l2LJhdoRPWum6j+x3xyFzXB3wwGds42GhufToeAVKqXVfYOCKZeTCl+tZCQWfbXV/lucNI8clLx98h4FyW9xENULs+KhSDsc9wWljSSmWCx+eiYPCd6jX+tUXHLyvZ1qrjj+yPGflrbXaCcHTsA0fSbRi9NbrmVz//JoTn36FMBh866KhsfDlfzm6qI26o2Ip+tFqYpkYPZBqJ+6Pbzo/YvkoXjYal6M5a/UlATe+g9qSdodv/UaA+RnrN/uNqFTclarEE/enCYqRCZtlvmDXghOhfprApvKsxr0dddd5aGochPHUusE4pPxu2YhglJHK3IzKRXbezPjXZP2ygfXDB0jPwPfJyovmMi8Q3y5N8c5vu0DcekSfFLEGqdvquPHNjuFanevHwVwq0il2fXblYtUL4vuaFPEFrYgvaEV8QSviC1oRX9CK+IJWxBe0Ir6gFfEFrYgvaEV8QSviC1oRX9CK+ILWe/F9+5OfIr7fRd74vpnxecKL+KKioqKioqKioqKioqKioqKioqKiojz0f3F3YbgJDGF7AAAAAElFTkSuQmCC" alt="" height={"28px"} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }} style={{ height: "450px", padding: "20px", borderRadius: "10PX" }}>
              <CardMedia
                sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                image="https://st3.depositphotos.com/15208558/17878/i/450/depositphotos_178788348-stock-photo-portrait-man-light-background-close.jpg"
                title="green iguana"
              />
              <CardContent style={{ paddingLeft: "2px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Jhon Dwirian <br />
                  <span style={{ fontSize: "16px", color: "gray" }}>UI/UX Design</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <img src="data:image/png;base64,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" alt="" height={"43px"} />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }} style={{ height: "450px", padding: "20px", borderRadius: "10PX" }}>
              <CardMedia
                sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                image="https://st4.depositphotos.com/2760050/40476/i/450/depositphotos_404763422-stock-photo-handsome-and-successful-man-in.jpg"
                title="green iguana"
              />
              <CardContent style={{ paddingLeft: "2px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Leon S Kennedy<br />
                  <span style={{ fontSize: "16px", color: "gray" }}>Machine Learning</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAA+VBMVEX///8Agf//Ngb/vgAAsyMAdf8AsAya16IAfv8AfP8Af/8AeP8Ad///vAAAev/5/P+m267/LgD/IgD/uACj26r/HgCCs//u9f/p8f/E2v8VtS15rv7/0cv/6OT1+f//fGr/9vT/dGC54r8piv9iov+fw/9Rmv49kv+vzf/V5P+YwP7f6/4Vhf9rp///6ML/w7u50/7/ZU7/rqT/oJT/+PD/tqz/1tH/jn7/yFP/xD//8Nj/36n/5Lf/1ov/l4n/pJn/wSz/h3f/XEL/Syv/RSH/0n3/safN3///7M//9OX/2ZEAav//wjT/dWT/zGT/Uzj/yl3/36zh8+OLi/9FAAALvElEQVR4nO2c/VvayhLHFZtzEhLiTXLCy0UlHuRVEHyl6qmKL7XtrbY9//8fc5OQnd1NdkNAofg4nx/6PMBitt/MzszObFhbQxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQZD3SKlU+t1TWF0eG/2WqRiGouj1vW5l53fPZ8UoNZqKbqr59QhV05VWA+0JqDQVE9QB8qbSfPzdU5Pz14f/hnz4c/HXGvZ0NaFPZExGfWVF+vOPDyF/LFyiTl2X6DMxJaW5osttaRIVleQKi1mS0l7wHOZjSRKVe+YUgQKMvYVOYk6WI1ElYUJ5NSD+rlbfXOQ05mMpEjUUfkWZhtnaqxarey3dMDkPrmqrp9EyJOpyCplGv12Gz8rDvs6sQaWxuGnMyxIk4mxI7yV9crunr7BCS5BoyCikqUPhmPZkua2kQouXaJ9RSOlLh+0Z/sfvNOj3aNRSxCY0oa2spg0tXqIq9cXmfurITncxM3gxC5aoQ5eZWZ4+fCVZsER1WGZKug2tMIuVaKhn8kOrzWIl6kHWLI9lK89CJaqAEWkL+OvLYqESNcn+y1zNjCcbfy1QohINZ6//x5fHIiVqk5zIfKWk0DvbGgy2trMNPrk4ODj48jXT2FKnMqzIQm66RNv+lAZnXrY5JYB1prxChcM7rVmua9u267r3o630wV8vPzqOUygU/H/Pv12kDx72NUXXTT1oxYQNq51SxORzuUTe0aEbzckaT5mSGLLO1JcXE7drrm3lCJbl2leedPDBua/OBsHX6eZSOnanqNOeQ95UqjtB8cYIUP43GSKT6GyXm5Ob+zzzf6tD4tmLnbX35NK5wJSOxYMvvjtUH6JS4R/x4IahrXNoemWtETkIZTJGLJG3m5iTfZ/RBwDgiowXJtaDpEDyGX1KCBTifBSM3WkJmjJKo51Boi1bMCfLndGQiuQG6bN9L87IFQkUzmiQGHwuFCi0pITn3jeFbT2zvj5VoiPJnNyrmf5r/WgC+Zb4881UYNiTLVEomNFR7G/eyBTyNXJibrujiARi7UkqkUwhf0aS5S+mmU/31i0lhToZVeMUsny4GfF2xCvkuyDutcPZUdlg5cgn2zFyiQZubEqWdEbpEHtVqxIJZd3r0NqjQdfMbPygsTuu3bqsa3JZf/SxwBrNzfPD83c+trGXX6eSqLrR6vebZqyfHkn0n7hEHjMn270dXR/XcnROrpddIrKH1YpzSBRNb5vOxrKPIznOanRCVo7+wUuHqrFxeTJ5088A6Ls/6eA9Gsrg0EWnyvX7ZBLd0qvb15EgZ4dkptbtkiQyJnnbPb05Near2z9g+dngIE+oFg6bCH2hhuQckDcr4IjUXoeOLdeZJEAiEV1m7i5zGfBP7mlmiVrEF82z0IywRnlKZxO77hg0AsN+BiUKMccMYY4uNSjTaLFg0mSsSywR3LaYa74mU7IyS0QkkLnrdInCXCpnSe8MuHFrNHmDGpGTCO/gxp0ohYRan5oIty2YlliiLXLb7FHsm3fRbO3M2VGVXKsn/ny6FcFsrHHy63cg3+T1t0JiNQEgX+E80oH4HD1xjHAHIp1Yot3outYP/nsDcFGsf0yna/KXitM0NRXQIkCiwBeN4aKCr5/B3ZyEWVhMojz6EvQLvTg093TB3ig+75hE4HLYWOpdW0ycdbNuaaHmqHeEnzeKAiCzDXJHclE7niGGHJLbGTryr450mQWAgL/CS0PrSjRWT5OIWLZ1SL/gh1gue+PceBpQUdNm6JC1ou8EeRFEfFc4dAumFbz6FYlQ+C4cTJZh4Tl4Rda4eGbEQwglOiYOB7zj6R23h/TN6djL+t8Fx1KfPpYQyRpuWgZ28oaxgILBjB6IBuLCx0VkZIWb4BWxE/EGm5i/UCLiiqJ1tj1ybV6gw1nS6yKU1DJv9UkBJeyYkBtmXYsHE//onq3RzNr5Ih4M63CNsW/xBpt8LJSIRInQsge3vAHZ7mi2esgjRFZJZpSEOImwlEu8tS25L9znJK47J+LBN4y/3tcZWxWQZkU0+fGOrZgB3WVPGgkQn5Ssh2FJMA49fI3cMEmAuGIlKjBWIoKkj4E3B1uVZGy9FInI6r6vxQ2odpbxP8kCFaOsnUYIxuEutsYuJAFXrOd0ZpDocYpE9QwS5XgDyh152f6LMWiXSBHH/TgklkwknbbQRtxC25iy0JiFSKwo3xSPTYtoguqV5e7OVdsP6UMCLcmweagbrQQvwUqEaRFNjHh3Lel3sFZGS0XCoZtZ3DVdYWmdhumUwYy0LF0Q2JKo4ctTEvRr4uFcnjsl6ENmGW5kybTEPrKTJegTA7qdJcaLAG+0rktKIgwNaJlMMjq6xRAO5z8mWwzh/oP5OCwZkTM94t5MV0uR6JhK5Lvo8aw9DwF0q6pMy7HpuVEjqlzHdmExiDe3wnT/AlaS0BndcEZG7pw46pNCSeoGJOjAzN44E/FIa+hGuh21YaRJxIRN9Z1gPGxPoq0A7MIeBIMPQMDQVUHGJgojj6l7NLhv1mzNjhSKzGHHVsoDjEWmH0HeIzsQYQWGOGtSU3uAzEiwj6XVtslrYtx5wd4ITtaJJXqCzbWX/G5u9uRxjS1Rraum7KxauUWVVOiTabS0mFjzx5DmPk3eoA55I/Hnf4KJRc4cCh5mIvGn93RKSU2wdTz0t2hemhhiNplWw7reqgiGlNiyOuvXr2mJOqYR7WSBetD/mGxVGWjJliSWmxD29ZiLZJ41kDSJIOzb8ULfrh3EuDkMqcR2qPJ6Pf4kbGVPYeqPGpfOMWUq7spjmuQ+kffAjDYKXPH6hHZoaUYAZrSuc+lIlemuSSRiHPYT+1Uv6jnMY0gllSvBmkq9OOyUdzY3S/uVbtPgulexWjLT1HNvIYU9ZXp7TNvqgbbMnGci0gnT5GfNq8c8wdwgvd8h99icrNUIXjBnWXDjvCvYs1myHVMKOz3+/EVeM3VDURRD1zW+gB3vR7DNWMu1atenn48P2RIf1/xkmrEFp/Bw+evy0zl7CoJ15OyDF6bS7Lbbjb7Jn4KQSeQx2aPtHl59Pj0a/WA2tbL6VjrN1OdiAT25abrj99O2zXWs+WMGTCdtY9Kv5jrWfN2/zbb0Vc00E4cgpA3rM75hHZtU9uo+T2Pqo7HBnESZ031sU8TixrYmF5xGMZxf/ODu/MceBtJjD4FC3nwS+WF9miFpqvg59B/SoyFuvJO19pU/6MAplDiF1RBrpMbyItGh4i3xkadAoft5FfIZ5tMeIVaFJhQyFs9HGF5PzsWGVIh3aAMqot8N0PsNfo8mPHe9nRPfuMzNDwntddlvGZhKNaUwuZVLngmTJmmXgmNqBUe0K/HjSDOx/v07FTvIJzmaPhLcONt66b4/zIESKqmm0utO+W2Vzzm+DGoxKUCCTw633AoF51l6tvixxSZleT04A5GQKCJ2HJQ/ohrGEkkfYlYq1bqim2EnVguCv97sZmmQbI0tN4gcQQBx76/SixD//AyPFBfCY8Xnl5JC5IROVTVMTfNjmq60wg1STKJ//474N/5V7+jWdcmc3N2XWxBlszNsdIvVarHbrszwlNr24PpqPL462vIyDL7459unh4dvvyQ9I479oT+bYuMxyiChyJVlUmenx6PR1dHgFQpHb4ionCxrISHQAHnLD4i9HpuiKEGq++aqPqy7RPaLwmLxMPLW+sr+otKyGAbhXtQCIR3h13i45w2z01X1QInkOT4446dK+pDvBdjmJwqzpVd7uOetw2zJuPfLUEZ+4ZMrbx967lqrM42iBtRlMZ4xp/fzSqu977vm0mNRpbWIt/xM+GvBNGby/vYsKBOzJ/dFnZr3RjmtxJdsr71L9nVprdh85wEfKK9rYoX0lfzxxN/Dnqh6ra7qb039Hiq9+GpTleZb/aGlReFv1eC3pVVN16tv9neWFki5XW2p0e+Tv/vNfRqb73tfjyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCZ+D/qNQoVbpjXxQAAAABJRU5ErkJggg==" alt="" height={"55px"} />
            </Card>
          </Grid>

        </Grid>
      </div>

      {/* mailbox */}

      <div className='mail-div'>
        <div className='mailbox'>
          <center>
            <h1>Subscribe to Our News Letter</h1>
            <h5 style={{ marginTop: "25px" }}>Subscribe to our newsletter to get information about our courses.</h5>
            <TextField style={{ marginTop: "35px" }} className='input rounded' placeholder='Email adress' />

            <Button style={{ marginTop: "38px", marginLeft: "10px", backgroundColor: "rgb(8, 99, 113)", height: "50px", color: "white" }} variant="contained">Subscribe</Button>
          </center>

        </div>
      </div>




    </div>

    // mail box
  )
}

export default Home