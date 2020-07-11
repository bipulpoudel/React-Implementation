import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import Grid from '@material-ui/core/Grid';

const AccountSecurity = () => {
    return(
        <Container fixed style={{marginBottom:'100px',height:'70vh'}}>
    <h1>Account Security</h1>
        <Typography  component="span" variant="caption" display="block" gutterBottom>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </Typography>
    <br/>
    <Divider/>
    <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
    <Grid item lg={4}>
        <Typography  component="span" variant="h6" gutterBottom>
            <EmailIcon/>   Email  <span style={{fontSize:'12px',color:'grey',marginLeft:'10px'}}>Private</span>
        </Typography>
    </Grid>
    <Grid item lg={6}></Grid>
        <Grid item lg={2} sm={6} xs={6} alignContent="flex-end">
                <Alert severity="success">Verified</Alert>
            </Grid>
        </Grid>

    <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
    <Grid item lg={4}>
        <Typography  component="span" variant="h6" gutterBottom>
            <CallIcon/>   Phone Number <span style={{fontSize:'12px',color:'grey',marginLeft:'10px'}}>Private</span>
        </Typography>
        <p style={{fontSize:'12px',color:'grey',marginLeft:'10px'}}>We'll never share your Number.</p>
    </Grid>
    <Grid item lg={6}></Grid>
        <Grid item lg={2} sm={6} xs={6} alignContent="flex-end">
                <Alert severity="success">Verified</Alert>
            </Grid>
        </Grid>
    </Container>)
}

export default AccountSecurity;