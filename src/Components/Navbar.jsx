// import React from 'react'
// import PersonIcon from '@mui/icons-material/Person';
// import SettingsIcon from '@mui/icons-material/Settings';
// import HomeIcon from '@mui/icons-material/Home';
// import HelpIcon from '@mui/icons-material/Help';
// import LogoutIcon from '@mui/icons-material/Logout';
// import "./Navbar.css"

// const Navbar = () => {
//   return (
//     <>
//     <nav className='main-nav'>
//         <div className='menu-link'>
          
                // <li>
                //     <a href='#'>Create AWB</a>
                // </li>
                // <li>
                //     <a href='#'>Print</a>
                // </li>
                // <li>
                //     <a href='#'>Track Shipment</a>
                // </li>
                // <li>
                //     <a href='#'>Search</a>
                // </li>
            
//             </div>
//             <div className='logo'>
//                 <h4>MPHASIS</h4>
                // <ul>
                //     <li> <a href='#' >
                //     <PersonIcon className='profile'/>
                //     </a>
                //     </li>
                //     <li> <a href='#' >
                //         <SettingsIcon className='setting'/>
                //         </a>
                //     </li>
                //     <li> <a href='#' >
                //         <HomeIcon className='home'/>
                //         </a>
                //     </li>
                //     <li> <a href='#' >
                //         <HelpIcon className='help'/>
                //         </a>
                //     </li>
                //     <li> <a href='#' >
                //         <LogoutIcon className='logout'/>
                //         </a>
                //     </li>
                // </ul>
//             </div>
//         </nav>
//     </>
//   )
// }

// export default Navbar;

import axios from 'axios'
import React,{ useState, useEffect} from "react";
import { Slides } from "@mui/material";
//import { Component, Fragment } from "react-boostrap";
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, MenuItem, Paper, Select, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Modal, Grid, Container, AppBar, Toolbar, Tab, Tabs } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Navbar.css';
import Slider from "react-slick";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import {Profile} from "./Profile.jsx";
import CreateAWB from "./CreateAWB.jsx"
import Print from "./Print";
import TrackShipment from "./TrackShipment";
import Search from "./Search";

const Navbar = () => {
    const slides = [
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66},
        {freight:"Jan", forwarders:2022, renewed: 4, forcasted: 4, active: 66}
];


  

    const [value, setvalue] = useState(0);
    const [apiData, setApiData] = useState([])
    const [post, setPost] = useState(null)
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    //const [slides, setSlides] = useState([]);
    // const routes = ["./datepicker"]

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    
    function getData() {
        axios.get('https://64115ddde96e5254e2d349d6.mockapi.io/customerData')
            .then((response) => {
                setApiData(response.data);
            }).catch((err) => {
                console.log(err)
            });
    }

    function month_year() {
        axios.post('',data)
            .then((response) => {
                setPost(response.data);
            }).catch((err) => {
                console.log(err)
            });
    }

    function setDataToStorage(Date_Of_Registration, Company_Name, Email_ID, Date_of_Approval, Prev_Renew_Date, Next_Renew_Date, Expired, Renew_status, Payment_Date, Payment_Mode, AWSB_Submitted_Date, AWB_count, Email_Remainder, Action){
        localStorage.setItem('Date_Of_Registration',Date_Of_Registration);
        localStorage.setItem('Company_Name',Company_Name);
        localStorage.setItem('Email_ID',Email_ID);
        localStorage.setItem('Date_of_Approval',Date_of_Approval);
        localStorage.setItem('Prev_Renew_Date',Prev_Renew_Date)
        localStorage.setItem('Next_Renew_Date',Next_Renew_Date)
        localStorage.setItem('Expired',Expired)
        localStorage.setItem('Renew_status',Renew_status)
        localStorage.setItem('Payment_Date',Payment_Date)
        localStorage.setItem('Payment_Mode',Payment_Mode)
        localStorage.setItem('AWSB_Submitted_Date',AWSB_Submitted_Date)
        localStorage.setItem('AWB_count',AWB_count)
        localStorage.setItem('Email_Remainder',Email_Remainder)
        localStorage.setItem('Action',Action)   


    }

    useEffect(() => {
        getData();
    }, [])



     return(
        <>
        
        {/* <div className="header" style={{position:"absolute"}}> */}
        {/* </div>    */}
       {/* <AppBar style={{height: "50px", marginTop: "50px", whiteSpace: "nowrap"}}>
        <Toolbar style={{height: "50px"}} > */}
            <img style={{height: "40px", textAlign: "center", paddingTop:"-80px"}} className='logo' src="https://www.aircargoweek.com/wp-content/uploads/2015/06/IATA_Logo.svg_.png"/>

            <Grid container  style={{height: "50px", backgroundColor:"royalblue", display:"flex"}}>
                <Grid item xs={6} id="navbar">
                    {/* <Tabs style={{marginLeft: "50px"}} textAlign="right" indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=> setvalue(val)}> */}
                    {/* <Link to='/create'>  */}
                    {/* <a style={{color:"white"}}> */}
{/*                     
                        <LinkTab label= "CreateAWB" href="/createAWB" />
                        <LinkTab label= "Print" href="/print"/>
                        <LinkTab label= "Track Shipment" href="/trackshipment"/>
                        <LinkTab label= "search" href="/search"/> */}
                    {/* </Tabs> */}

                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex" }}> 
                        <a href ="createAWB" component={CreateAWB} style={{color: "#fff", textDecoration:"none", fontSize:"1.1rem"}}>CreateAWB
                            {/* <label="CreateAWB" className='setting' style={{color: "white"}}/> */}
                        </a>
                    </Box>

                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}}> 
                        <a href ="print" component={Print} style={{color: "#fff", textDecoration:"none", fontSize:"1.1rem"}}>Print
                            {/* <label="CreateAWB" className='setting' style={{color: "white"}}/> */}
                        </a>
                    </Box>

                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}}> 
                        <a href ="trackshipment" component={TrackShipment} style={{color: "#fff", textDecoration:"none", fontSize:"1.1rem"}}>Track Shipment
                            {/* <label="CreateAWB" className='setting' style={{color: "white"}}/> */}
                        </a>
                    </Box>

                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}}> 
                        <a href ="search" component={Search} style={{color: "#fff", textDecoration:"none", fontSize:"1.1rem"}}>Search
                            {/* <label="CreateAWB" className='setting' style={{color: "white"}}/> */}
                        </a>
                    </Box>


                </Grid>
                <Grid item xs={2}/>

            <Grid style={{display: 'flex'}}>    
                <Grid item xs={4}>    
                    <Box sx={{ display: 'flex' ,spacing:"50px"}}>
                        <Box style={{display: 'flex',textAlign: 'center'}} indicatorColor="secondary" textColor="inherit" value={value} onChange={(e,val)=> setvalue(val)}>
                                <Box className="company_name" p={3} sx={{alignItems: 'center', paddingTop: "16px", display:"flex"}} >
                                MPHASIS
                                </Box>
                            <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}} >
                                <Link to ='/profile'>
                                    <PersonIcon style={{color: "#fff"}}/>
                                </Link>
                            </Box>
                    
                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}}> 
                        <a href='/setting' >
                            <SettingsIcon className='setting' style={{color: "fff"}}/>
                        </a>
                    </Box>

                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}}> 
                        <a href='/home' >
                            <HomeIcon className='home' style={{color: "fff"}}/>
                        </a>
                    </Box>

                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}}> <a href='/help' >
                        <HelpIcon className='help' style={{color: "fff"}}/>
                        </a>
                    </Box>

                    <Box p={2} sx={{alignItems: 'center', paddingTop: "10px", display:"flex"}}> <a href='/logout' >
                        <LogoutIcon className='logout' style={{color: "fff"}}/>
                        </a>
                    </Box>

                    </Box>
                    </Box>
                
                    </Grid>
                </Grid>


            </Grid> 
        {/* </Toolbar>
       </AppBar> */}
                    <div>
                        <Box>
                        
                            <Paper elevation={3} style={{height: "79vh", width: "100%", marginTop:"-40px"}}>
                                <Container maxWidth="lg" style={{marginLeft:"20px"}}>
                                    <h4 style={{ paddingLeft:"10px", textAlign: 'left', fontSize: "20px", marginTop: "47px"}}>Manage Subscription</h4>
                                </Container>

                                
                                <div className="date" style={{height:"10px", marginTop:"-20px", marginLeft:"40px"}}>
                                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <div className="calender">
                                        <DatePicker label={'Select Starting Month'} views={['month', 'year']} />
                                    </div>
                                    </LocalizationProvider>
                                </div>
                                


                                <div id="main-slider-container">
                                        <div style={{marginLeft:"40px"}}>
                                            <h5 style={{marginTop: "30px"}}>Freight</h5>
                                            <h5 style={{marginTop: "-17px"}}>Forwarders</h5>
                                            <h5 style={{marginTop: "-5px"}}>Renewed/New</h5>
                                            <h5 style={{marginTop: "-10px"}}>Forcasted</h5>
                                            <h5 style={{marginTop: "-10px"}}>Active</h5>
                                        </div>
            
                                    <div id="slider" style={{marginLeft:"20px"}}>
                                    {
                                        slides.map((slide,index) => {
                                        return(
                                            <div className="slider-card" key={index}>
                                                <p className="slider-card-freight" style={{marginTop: "3px", textAlign:"center"}}>{slide.freight}</p>
                                                <p className="slider-card-forwarders" style={{marginTop: "-10px", textAlign:"center"}}>{slide.forwarders}</p>
                                                <p className="slider-card-renewed" style={{marginTop: "-5px", textAlign:"center"}}>{slide.renewed}</p>
                                                <p className="slider-card-forcasted" style={{marginTop: "-1px", textAlign:"center"}}>{slide.forcasted}</p>
                                                <p className="slider-card-active" style={{marginTop: "-5px", textAlign:"center"}}>{slide.active}</p>
                                            </div>
                                        )
                                    })
                                    }
                                    </div>
                                </div>

                                <h4 style={{margin:0, paddingTop:"5px"}}>Search Results for</h4>

                                <Box sx={{ display: 'flex', flexDirection: 'row', border: 0.5, borderColor: "text.secondary" }} />
                                <Box p={1} sx={{ display: 'flex', flexDirection: 'column' }}>
                                    {/* <Paper sx={{ height: "40vh",width: '100%', overflow: 'hidden' }}> */}
                                        <TableContainer>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell align="left" >Date Of Registration</TableCell>
                                                        <TableCell align="left" >Company Name</TableCell>
                                                        <TableCell align="left" >Email ID</TableCell>
                                                        <TableCell align="left" >Date of Approval</TableCell>
                                                        <TableCell align="left" >Prev Renew Date</TableCell>
                                                        <TableCell align="left" >Next Renew Date</TableCell>
                                                        <TableCell align="left" >Expired</TableCell>
                                                        <TableCell align="left" >Payment/Renew status</TableCell>
                                                        <TableCell align="left" >Payment Date</TableCell>
                                                        <TableCell align="left" >Payment Mode</TableCell>
                                                        <TableCell align="left" >AWSB Submitted Date</TableCell>
                                                        <TableCell align="left" >AWB count</TableCell>
                                                        <TableCell align="left" >Email Remainder</TableCell>
                                                        <TableCell align="left" >Action</TableCell>
                                    
                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    {apiData
                                    
                                                        .map(item => (
                                                            <TableRow key={item.experiment_id}>
                                                            <TableCell align="left" >{item.Date_Of_Registration}</TableCell>
                                                            <TableCell align="left" >{item.Company_Name}</TableCell>
                                                            <TableCell align="left" >{item.Email_ID}</TableCell>
                                                            <TableCell align="left" >{item.Date_of_Approval}</TableCell>
                                                            <TableCell align="left" >{item.Prev_Renew_Date}</TableCell>
                                                            <TableCell align="left" >{item.Next_Renew_Date}</TableCell>
                                                            <TableCell align="left" >{item.Expired}</TableCell>
                                                            <TableCell align="left" >{item.Renew_status}</TableCell>
                                                            <TableCell align="left" >{item.Payment_Date}</TableCell>
                                                            <TableCell align="left" >{item.Payment_Mode}</TableCell>
                                                            <TableCell align="left" >{item.AWSB_Submitted_Date}</TableCell>
                                                            <TableCell align="left" >{item.AWB_count}</TableCell>
                                                            <TableCell align="left" >{item.Email_Remainder}</TableCell>
                                                            <TableCell align="left" >{item.Action}</TableCell>
                                                            </TableRow>
                                                        ))
                                                    }

                                                </TableBody>

                                            </Table>

                                        </TableContainer>
                    
                                        <div className="pagination" style={{marginTop:"-15px"}}>
                                        <TablePagination
                                            rowsPerPageOptions={[5, 10, 50]}
                                            component="div"
                                            count={data.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                        </div>

                                    {/* </Paper> */}
                   
                                </Box>


                            </Paper>
                        
                        </Box>
                        {/* Footer */}
                            <Box>
                                <footer className="footer" >
                                    <h5 style={{margin: "5px"}}>© 2021 Mphasis</h5>
                                </footer>
                            </Box>
                    </div>                

                    
                    
                    

</>
     )}



export default Navbar;
