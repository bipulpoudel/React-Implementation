import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import { withStyles,makeStyles,useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import clsx from 'clsx';

import FAQ from './FAQ';
import Uploadshowcase from './Uploadshowcase'


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
  }));

  const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 0;
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }))(InputBase);


const UploadService = () => {
    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
      setPersonName(event.target.value);
    };
    const theme = useTheme();
    return(
        <Container fixed style={{marginBottom:'100px'}}>
    <h1>Upload Your Service</h1>
        <Typography variant="caption" display="block" gutterBottom>
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </Typography>
    <br/>
    <Divider/>

    <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                <Grid item lg={4}>
                    <Typography variant="h6" gutterBottom>
                        Upload Thumbnail  
                    </Typography>
                </Grid>
                <Grid item lg={3}>
                    <ImageUpload
                        addButtonProps={{ round: true }}
                        changeButtonProps={{ round: true }}
                        removeButtonProps={{ round: true, color: "danger" }}
                    />
                </Grid>
        </Grid>
        <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                        <Grid item lg={4}>
                            <Typography variant="h6" gutterBottom>
                                    Name of Service<span style={{color:"red"}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item lg={8} sm={12} xs={12}>
                                <Grid item lg={12}>
                                    <TextField
                                        placeholder="Service Name"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                            </Grid>
                        </Grid>
            </Grid>
            <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                        <Grid item lg={4}>
                            <Typography variant="h6" gutterBottom>
                                    Category of Service<span style={{color:"red"}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item lg={8} sm={12} xs={12}>
                            <Grid container lg={12}>
                             <Grid item lg={6}>
                                <FormControl>
                                        <Select
                                                style={{minWidth:'300px'}}
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                input={<BootstrapInput />}
                                                >
                                                <MenuItem value="Please Select the Category">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                            </FormControl>
                            </Grid>
                            <Grid item lg={6}>
                                  <FormControl variant="outlined" style={{marginTop:'-2px'}} className={clsx(classes.formControl, classes.noLabel)}>
                                  <Select
                                    multiple
                                    displayEmpty
                                    value={personName}
                                    onChange={handleChange}
                                    input={<Input />}
                                    renderValue={(selected) => {
                                      if (selected.length === 0) {
                                        return <em>Placeholder</em>;
                                      }
                          
                                      return selected.join(', ');
                                    }}
                                    MenuProps={MenuProps}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                  >
                                    <MenuItem disabled value="">
                                      <em>Placeholder</em>
                                    </MenuItem>
                                    {names.map((name) => (
                                      <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                        {name}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                </FormControl>
                            
                            </Grid>
                            </Grid>
                        </Grid>

            </Grid>

            <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid item lg={4}>
                                <Typography variant="h6" gutterBottom>
                                        Job Description  <span style={{color:"red"}}>*</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={8} sm={12} xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                fullWidth={true}
                                rows={5}
                                placeholder="Enter your description"
                                variant="outlined"
                                />
                            </Grid>
                </Grid>


                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid item lg={4}>
                                <Typography variant="h6" gutterBottom>
                                        Pricing  <span style={{color:"red"}}>*</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={8} sm={12} xs={12}>
                                    <TextField
                                        type="number"
                                        placeholder="Mention Price"
                                        variant="outlined"
                                    />
                                    <FormControl>
                                                <Select
                                                        labelId="demo-customized-select-label"
                                                        id="demo-customized-select"
                                                        input={<BootstrapInput />}
                                                        >
                                                        <MenuItem value="Please Select the Category">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                </Select>
                                    </FormControl>
                            </Grid>
                </Grid>

                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid item lg={4}>
                                <Typography variant="h6" gutterBottom>
                                        FAQs  <span style={{color:"red"}}>*</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={8} sm={12} xs={12}>
                                    <FAQ/>
                            </Grid>
                </Grid>
                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid item lg={4}>
                                <Typography variant="h6" gutterBottom>
                                        Upload ShowCase  <span style={{color:"red"}}>*</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={8} sm={12} xs={12}>
                                    <Uploadshowcase/>
                            </Grid>
                </Grid>
    </Container>
    )
}

export default UploadService