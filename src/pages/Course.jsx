import React from 'react'
import { Grid } from '@mui/material'
import './Course.css'
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from 'react-bootstrap/Button';



function Course() {
    return (
        <div className='mentors' style={{marginTop:'80px'}}>


            {/* MENTORS */}


            <h1>Our Popular Courses</h1>
            <Grid container spacing={2} style={{ marginTop: "50px" }}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} style={{ height: "480px", padding: "20px", borderRadius: "10PX" }}>
                        <CardMedia
                            sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIV17Qg-bJJVJ4VGEKempl8rA-Grxuzes_ww&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent style={{ paddingLeft: "2px" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Mobile Development<br /> 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <p style={{ fontSize: "16px"}}><span style={{ fontSize: "16px", color: "rgb(8, 99, 113)" }}>$35</span>/Course</p>
                        <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginRight: "15px", height: "40px" }}>Learn More</Button>{' '}

                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} style={{ height: "480px", padding: "20px", borderRadius: "10PX" }}>
                        <CardMedia
                            sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuJEnrgyIJTcAza5-Tst3r_J_h9N5OZYxO_Q&usqp=CAU"
                            title="green iguana"
                        />
                        <CardContent style={{ paddingLeft: "2px" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                React with MUI & Redux<br /> 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        
                        <p style={{ fontSize: "16px"}}><span style={{ fontSize: "16px", color: "rgb(8, 99, 113)" }}>$45</span>/Course</p>
                        <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginRight: "15px", height: "40px" }}>Learn More</Button>{' '}

                    </Card>

                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} style={{ height: "480px", padding: "20px", borderRadius: "10PX" }}>
                        <CardMedia
                            sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                            image="https://img.securityinfowatch.com/files/base/cygnus/siw/image/2021/10/bigstock_Internet_Of_Things__Iot_Conce_413663834.6165ebd7685e3.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630"
                            title="green iguana"
                        />
                        <CardContent style={{ paddingLeft: "2px" }}>
                            <Typography gutterBottom variant="h5" component="div">
                               Internet of Things(IoT) <br /> 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <p style={{ fontSize: "16px"}}><span style={{ fontSize: "16px", color: "rgb(8, 99, 113)" }}>$35</span>/Course</p>
                        <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginRight: "15px", height: "40px" }}>Learn More</Button>{' '}

                    </Card>
                </Grid>

            </Grid>


            <Grid container spacing={2} style={{ marginTop: "50px" }}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} style={{ height: "480px", padding: "20px", borderRadius: "10PX" }}>
                        <CardMedia
                            sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                            image="https://images.idgesg.net/images/idge/imported/imageapi/2022/06/21/16/cso_nw_cloud_computing_cloud_network_circuits_by_denis_isakov_gettyimages-966932508_2400x1600-100814451-large-100929305-large.jpg?auto=webp&quality=85,70"
                            title="green iguana"
                        />
                        <CardContent style={{ paddingLeft: "2px" }}>
                            <Typography gutterBottom variant="h5" component="div">
                               Cloud Computing <br /> 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <p style={{ fontSize: "16px"}}><span style={{ fontSize: "16px", color: "rgb(8, 99, 113)" }}>$35</span>/Course</p>
                        <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginRight: "15px", height: "40px" }}>Learn More</Button>{' '}

                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} style={{ height: "480px", padding: "20px", borderRadius: "10PX" }}>
                        <CardMedia
                            sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                            image="data:image/jpeg;base64,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"
                            title="green iguana"
                        />
                   <CardContent style={{ paddingLeft: "2px" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Ethical Hacking  <br /> 
                                
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <p style={{ fontSize: "16px"}}><span style={{ fontSize: "16px", color: "rgb(8, 99, 113)" }}>$35</span>/Course</p>
                        <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginRight: "15px", height: "40px" }}>Learn More</Button>{' '}

                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card sx={{ maxWidth: 345 }} style={{ height: "480px", padding: "20px", borderRadius: "10PX" }}>
                        <CardMedia
                            sx={{ height: 140 }} style={{ height: "200px", borderRadius: "10PX" }}
                            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU61gHjrBj82OI2mq97amNjrhOcN4ouggl7w&usqp=CAU"
                            title="green iguana"
                        />
                       <CardContent style={{ paddingLeft: "2px" }}>
                            <Typography gutterBottom variant="h5" component="div">
                                Machine Learning<br /> 
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <p style={{ fontSize: "16px"}}><span style={{ fontSize: "16px", color: "rgb(8, 99, 113)" }}>$35</span>/Course</p>
                        <Button style={{ backgroundColor: "rgb(8, 99, 113)", border: "none", marginRight: "15px", height: "40px" }}>Learn More</Button>{' '}

                    </Card>
                </Grid>

            </Grid>
        </div>





    
  )
}

export default Course