import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ImageUpload from "components/CustomUpload/ImageUpload.js";


import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
// core components
import styles from "assets/jss/material-kit-pro-react/customCheckboxRadioSwitchStyle.js";




import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';




import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';



const useStyles = makeStyles(styles,{
    table: {
      minWidth: 650,
    },
  });
  
  function createData(language, level) {
    return { language, level };
  }
  
  const rows = [
  ];
  
  

const PersonalInfo = () => {
    const [refresh,setRefresh] = useState(false);
    const [value,setValue] = useState(false);
    const [language,setLanguage] = useState('')
    const [content,setContent] = useState('')
    const changeVal =() => {
        setValue(!value);
      }
    const changeHandler = () => {
    setRefresh(!refresh);
    rows.push(createData(`${language}`, `${content}`));
    setLanguage('');setContent('');
    }
    const [checked, setChecked] = React.useState([24, 22]);
    const handleToggle = value => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
      setChecked(newChecked);
    };
    const classes = useStyles();
    return(
        <Container fixed style={{marginBottom:'100px'}}>
        <Typography  component="span" variant="h1" display="block" gutterBottom>Personal Info</Typography>
                <Typography  component="span" variant="caption" display="block" gutterBottom>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/> when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
            <br/>
            <Divider/>
                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                        <Grid item lg={4}>
                            <Typography  component="span" variant="h6" gutterBottom>
                                    First Name 
                            </Typography>
                        </Grid>
                        <Grid item lg={8} sm={12} xs={12}>
                            <Grid container>
                                <Grid item lg={4} style={{paddingTop:'10px'}}>
                                    <TextField
                                        placeholder="First Name"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item lg={4} style={{paddingTop:'10px'}}>
                                    <TextField
                                        placeholder="Last Name"
                                        variant="outlined"
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                </Grid>
                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                        <Grid item lg={4}>
                            <Typography  component="span" variant="h6" gutterBottom>
                                    Display Name
                            </Typography>
                        </Grid>
                        <Grid item lg={8} sm={12} xs={12}>
                                <Grid item lg={12}>
                                    <TextField
                                        placeholder="Display Name"
                                        variant="outlined"
                                        fullWidth={true}
                                    />
                            </Grid>
                        </Grid>
                </Grid>
                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                        <Grid item lg={4}>
                            <Typography  component="span" variant="h6" gutterBottom>
                                    Location <span style={{color:"red"}}>*</span>
                            </Typography>
                        </Grid>
                        <Grid item lg={8} sm={12} xs={12}>
                                <Grid container>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1">
                                            <FormControlLabel value="female" control={<Radio />} label="Kaula Lampur" />
                                            <FormControlLabel value="male" control={<Radio />} label="Selangor" />
                                            <FormControlLabel value="other" control={<Radio />} label="Johor" /> 
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <FormControl component="fieldset">
                                            <RadioGroup aria-label="gender" name="gender1">
                                            <FormControlLabel value="female" control={<Radio />} label="Penang" />
                                            <FormControlLabel value="male" control={<Radio />} label="Negeri Sembilan" />
                                            <FormControlLabel value="other" control={<Radio />} label="Melaka" />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                        </Grid>
                </Grid>
                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid item lg={4} sm={12} xs={12}>
                                <Typography  component="span" variant="h6" gutterBottom>
                                        Profile Picture  <span style={{color:"red"}}>*</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={8} sm={12}>
                                    <ImageUpload
                                            avatar
                                            addButtonProps={{ round: true }}
                                            changeButtonProps={{ round: true }}
                                            removeButtonProps={{ round: true, color: "danger" }}
                                        />
                            </Grid>
                </Grid>
                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid item lg={4}>
                                <Typography  component="span" variant="h6" gutterBottom>
                                        Description  <span style={{color:"red"}}>*</span>
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
                                <Typography  component="span" variant="h6" gutterBottom>
                                        Languages  <span style={{color:"red"}}>*</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={8}>
                            {value ?<><Tooltip title="Cancel" aria-label="cancel">
                                    <Fab color="secondary" className={classes.fab} onClick={changeVal}>
                                    <ClearIcon/>
                                    </Fab>
                                </Tooltip>
                                <Tooltip title="Add" aria-label="add" onClick={changeHandler}>
                                    <Fab style={{backgroundColor:'lightgreen',color:'white'}} className={classes.fab}>
                                    <DoneIcon/>
                                    </Fab>
                                </Tooltip></>:<Tooltip title="Add" aria-label="add" onClick={changeVal}>
                                <Fab color="primary" className={classes.fab}>
                                    <AddIcon />
                                </Fab>
                                </Tooltip>}
                                <br/>
                                <br/>
                                    {value && <><TextField
                                    placeholder="Add a language"
                                    variant="outlined"
                                    fullWidth={true}
                                    value={language}
                                    onChange={e => setLanguage(e.target.value)}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    placeholder="How much proficient you are with that language?"
                                    variant="outlined"
                                    fullWidth={true}
                                    value={content}
                                    onChange={e => setContent(e.target.value)}
                                /><br/><br/></>}
                                <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="simple table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Language</TableCell>
                                      <TableCell align="right">Level</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {rows.map((row) => (
                                      <TableRow key={row.language}>
                                        <TableCell component="th" scope="row">
                                          {row.language}
                                        </TableCell>
                                        <TableCell align="right">{row.level}</TableCell>
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Grid>
                </Grid>
                <Grid container spacing={5} style={{paddingTop:'20px',paddingBottom:'20px'}}>
                            <Grid item lg={4} sm={12} xs={12}>
                                <Typography  component="span" variant="h6" gutterBottom>
                                        Your Skills  <span style={{color:"red"}}>*</span>
                                </Typography>
                            </Grid>
                            <Grid item lg={8} sm={12}>
                                        <Typography  component="span" variant="subtitle2" gutterBottom>
                                                Choose two of five of your best skill in programming & Tech:
                                        </Typography>
                                        <Grid container>
                                        <Grid item lg={4} md={6} sm={12} xs={12}>
                                                    <div
                                                                    className={
                                                                    classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                                                    }
                                                                >
                                                                    <FormControlLabel
                                                                    control={
                                                                        <Checkbox
                                                                        tabIndex={-1}
                                                                        onClick={() => handleToggle(21)}
                                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                                        classes={{
                                                                            checked: classes.checked,
                                                                            root: classes.checkRoot
                                                                        }}
                                                                        />
                                                                    }
                                                                    classes={{ label: classes.label }}
                                                                    label="RandommData"
                                                                    />
                                                                </div>
                                                                <div
                                                                className={
                                                                classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                                                }
                                                            >
                                                                <FormControlLabel
                                                                control={
                                                                    <Checkbox
                                                                    tabIndex={-1}
                                                                    onClick={() => handleToggle(21)}
                                                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                                                    icon={<Check className={classes.uncheckedIcon} />}
                                                                    classes={{
                                                                        checked: classes.checked,
                                                                        root: classes.checkRoot
                                                                    }}
                                                                    />
                                                                }
                                                                classes={{ label: classes.label }}
                                                                label="RandommData"
                                                                />
                                                            </div>
                                                            <div
                                                            className={
                                                            classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                                            }
                                                        >
                                                            <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                tabIndex={-1}
                                                                onClick={() => handleToggle(21)}
                                                                checkedIcon={<Check className={classes.checkedIcon} />}
                                                                icon={<Check className={classes.uncheckedIcon} />}
                                                                classes={{
                                                                    checked: classes.checked,
                                                                    root: classes.checkRoot
                                                                }}
                                                                />
                                                            }
                                                            classes={{ label: classes.label }}
                                                            label="RandommData"
                                                            />
                                                        </div>
                                                        <div
                                                        className={
                                                        classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                                        }
                                                    >
                                                        <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                            tabIndex={-1}
                                                            onClick={() => handleToggle(21)}
                                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                                            icon={<Check className={classes.uncheckedIcon} />}
                                                            classes={{
                                                                checked: classes.checked,
                                                                root: classes.checkRoot
                                                            }}
                                                            />
                                                        }
                                                        classes={{ label: classes.label }}
                                                        label="RandommData"
                                                        />
                                                    </div>
                                                    <div
                                                    className={
                                                    classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                                    }
                                                >
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        tabIndex={-1}
                                                        onClick={() => handleToggle(21)}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot
                                                        }}
                                                        />
                                                    }
                                                    classes={{ label: classes.label }}
                                                    label="RandommData"
                                                    />
                                                </div>
                                                    </Grid>
                                                    <Grid item lg={4} md={6} sm={12} xs={12}>
                                                    <div
                                                    className={
                                                    classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                                    }
                                                >
                                                    <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                        tabIndex={-1}
                                                        onClick={() => handleToggle(21)}
                                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                                        icon={<Check className={classes.uncheckedIcon} />}
                                                        classes={{
                                                            checked: classes.checked,
                                                            root: classes.checkRoot
                                                        }}
                                                        />
                                                    }
                                                    classes={{ label: classes.label }}
                                                    label="RandommData"
                                                    />
                                                </div>
                                                <div
                                                className={
                                                classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                                }
                                            >
                                                <FormControlLabel
                                                control={
                                                    <Checkbox
                                                    tabIndex={-1}
                                                    onClick={() => handleToggle(21)}
                                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                                    icon={<Check className={classes.uncheckedIcon} />}
                                                    classes={{
                                                        checked: classes.checked,
                                                        root: classes.checkRoot
                                                    }}
                                                    />
                                                }
                                                classes={{ label: classes.label }}
                                                label="RandommData"
                                                />
                                            </div>
                                            <div
                                            className={
                                            classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                            }
                                        >
                                            <FormControlLabel
                                            control={
                                                <Checkbox
                                                tabIndex={-1}
                                                onClick={() => handleToggle(21)}
                                                checkedIcon={<Check className={classes.checkedIcon} />}
                                                icon={<Check className={classes.uncheckedIcon} />}
                                                classes={{
                                                    checked: classes.checked,
                                                    root: classes.checkRoot
                                                }}
                                                />
                                            }
                                            classes={{ label: classes.label }}
                                            label="RandommData"
                                            />
                                        </div>
                                        <div
                                        className={
                                        classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                        }
                                    >
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            tabIndex={-1}
                                            onClick={() => handleToggle(21)}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                            />
                                        }
                                        classes={{ label: classes.label }}
                                        label="Unchecked"
                                        />
                                    </div>
                                    <div
                                    className={
                                    classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                    }
                                >
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        tabIndex={-1}
                                        onClick={() => handleToggle(21)}
                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                        icon={<Check className={classes.uncheckedIcon} />}
                                        classes={{
                                            checked: classes.checked,
                                            root: classes.checkRoot
                                        }}
                                        />
                                    }
                                    classes={{ label: classes.label }}
                                    label="Unchecked"
                                    />
                                </div>
                                        </Grid>
                                        <Grid item lg={4} md={6} sm={12} xs={12}>
                                        <div
                                        className={
                                        classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                        }
                                    >
                                        <FormControlLabel
                                        control={
                                            <Checkbox
                                            tabIndex={-1}
                                            onClick={() => handleToggle(21)}
                                            checkedIcon={<Check className={classes.checkedIcon} />}
                                            icon={<Check className={classes.uncheckedIcon} />}
                                            classes={{
                                                checked: classes.checked,
                                                root: classes.checkRoot
                                            }}
                                            />
                                        }
                                        classes={{ label: classes.label }}
                                        label="Unchecked"
                                        />
                                    </div>
                                    <div
                                    className={
                                    classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                    }
                                >
                                    <FormControlLabel
                                    control={
                                        <Checkbox
                                        tabIndex={-1}
                                        onClick={() => handleToggle(21)}
                                        checkedIcon={<Check className={classes.checkedIcon} />}
                                        icon={<Check className={classes.uncheckedIcon} />}
                                        classes={{
                                            checked: classes.checked,
                                            root: classes.checkRoot
                                        }}
                                        />
                                    }
                                    classes={{ label: classes.label }}
                                    label="Unchecked"
                                    />
                                </div>
                                <div
                                className={
                                classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                                }
                            >
                                <FormControlLabel
                                control={
                                    <Checkbox
                                    tabIndex={-1}
                                    onClick={() => handleToggle(21)}
                                    checkedIcon={<Check className={classes.checkedIcon} />}
                                    icon={<Check className={classes.uncheckedIcon} />}
                                    classes={{
                                        checked: classes.checked,
                                        root: classes.checkRoot
                                    }}
                                    />
                                }
                                classes={{ label: classes.label }}
                                label="Unchecked"
                                />
                            </div>
                            <div
                            className={
                            classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                            }
                        >
                            <FormControlLabel
                            control={
                                <Checkbox
                                tabIndex={-1}
                                onClick={() => handleToggle(21)}
                                checkedIcon={<Check className={classes.checkedIcon} />}
                                icon={<Check className={classes.uncheckedIcon} />}
                                classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                }}
                                />
                            }
                            classes={{ label: classes.label }}
                            label="Unchecked"
                            />
                        </div>
                        <div
                        className={
                        classes.checkboxAndRadio + " " + classes.checkboxAndRadioHorizontal
                        }
                    >
                        <FormControlLabel
                        control={
                            <Checkbox
                            tabIndex={-1}
                            onClick={() => handleToggle(21)}
                            checkedIcon={<Check className={classes.checkedIcon} />}
                            icon={<Check className={classes.uncheckedIcon} />}
                            classes={{
                                checked: classes.checked,
                                root: classes.checkRoot
                            }}
                            />
                        }
                        classes={{ label: classes.label }}
                        label="Unchecked"
                        />
                    </div>
                                        </Grid>
                                    </Grid>
                            </Grid>
                </Grid>
        </Container>
    )
}

export default PersonalInfo;