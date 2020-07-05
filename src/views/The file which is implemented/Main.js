import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';


//Custom Component which is imported
import PersonalInfo from './components/PersonalInfo';
import AccountSecurity from './components/AccountSecurity';
import UploadService from './components/UploadService';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflowY:'hidden',
    backgroundColor:'white',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Personal Info', 'Account Security', 'Professional Info'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <PersonalInfo/>;
    case 1:
      return <AccountSecurity/>;
    case 2:
      return <UploadService/>;
    default:
      return 'Unknown stepIndex';
  }
}

export default function Main() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Divider/>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <Grid container style={{paddingTop:'10px',paddingBottom:'20px'}}>
                <Grid item lg={9} md={8} sm={0}  xs={0}>
                </Grid>
                <Grid item lg={3} md={4} sm={12}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.backButton}
                      >
                        Back
                      </Button>
                      <Button variant="contained" color="primary" onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                </Grid>
            </Grid>
            
          </div>
        )}
      </div>
    </div>
  );
}
