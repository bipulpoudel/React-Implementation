import React from "react";
import Tooltip from '@material-ui/core/Tooltip';
import CustomFileInput from "components/CustomFileInput/CustomFileInput.js";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import { Grid } from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import Edit from "@material-ui/icons/Edit";


import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";




const useStyles = makeStyles((theme) => ({
    fab: {
      margin: theme.spacing(2),
    },
    absolute: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(3),
    },
  }));

const Uploadshowcase = () =>{
    const classes = useStyles();
    const [files, setFiles] = React.useState(null);
    const [fileNames, setFileNames] = React.useState(null);
    const onFileInputChange = async(inputFiles,inputFileNames) => {
        await setFiles(inputFiles);
        await setFileNames(inputFileNames);
        // now you have the files inside your component as well
        console.log(files,fileNames);
    }
    return(
        <>
        <Typography  variant="subtitle2" gutterBottom>
            Gig Photos
        </Typography>
        <Typography variant="caption" component="h2">
            Upload Photos that describe or are related to your GIGS.
        </Typography>
        <br/>
        <Grid container spacing={5}>
        <Grid item  lg={3} md={3} sm={12} xs={12}>
        <ImageUpload
            addButtonProps={{ round: true }}
            changeButtonProps={{ round: true }}
            removeButtonProps={{ round: true, color: "danger" }}
        />
        </Grid>
        <Grid item  lg={3} md={3} sm={12} xs={12}>
        <ImageUpload
            addButtonProps={{ round: true }}
            changeButtonProps={{ round: true }}
            removeButtonProps={{ round: true, color: "danger" }}
        />
        </Grid>
        <Grid item  lg={3} md={3} sm={12} xs={12}>
        <ImageUpload
            addButtonProps={{ round: true }}
            changeButtonProps={{ round: true }}
            removeButtonProps={{ round: true, color: "danger" }}
        />
        </Grid>
        </Grid>
        <br/>
        <Tooltip title="Cancel" aria-label="cancel">
            <Fab color="primary" className={classes.fab}>
            <AddIcon/>
            </Fab>
        </Tooltip>
        <br/><br/><br/>
        <Typography variant="subtitle2" gutterBottom>
            Gig Video
        </Typography>
        <Typography variant="caption" component="h2">
            Add a relevant, high quality video that best showcase your Gigs
        </Typography>
        {files ? <Table
            tableHead={[ "Name", "Size", "type", "Change"]}
            tableData={[
            [ `${files[0].name}`, `${Math.round(files[0].size * 0.001)} KB`, `${files[0].type}`, <Button round justIcon size="sm" color="info" onClick={() => setFiles(null)}>
            <Edit />
            </Button>],
            ]}
            customCellClasses={[
            classes.textCenter,
            classes.textRight,
            classes.textRight
            ]}
            customClassesForCells={[0, 4, 5]}
            customHeadCellClasses={[
            classes.textCenter,
            classes.textRight,
            classes.textRight
            ]}
            customHeadClassesForCells={[0, 4, 5]}
  />:<CustomFileInput
  onChange={onFileInputChange}
  inputProps={{
    placeholder: "Upload a single video"
  }}
  endButton={{
    buttonProps: {
      round: true,
      color: "primary",
      justIcon: true,
      fileButton: true
    },
    icon: <AttachFile />
  }}
/>} 
        </>
    )
}


export default Uploadshowcase;