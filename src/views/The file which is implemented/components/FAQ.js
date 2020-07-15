
import React,{useState,useEffect} from "react";
import Accordion from "components/Accordion/Accordion.js";
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import DoneIcon from '@material-ui/icons/Done';

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


const faq = [{title: "Demo Question 1?",content:"Demo answer for question 1."}];

export default function FAQs() {
  const [refresh,setRefresh] = useState(true);
  useEffect(()=>{
    console.log('I am working');
  },[refresh])
  const classes = useStyles();
  
  const [value,setValue] = useState(false);
  const [title,setTitle] = useState('')
  const [content,setContent] = useState('')
  const changeVal =() => {
    setValue(!value);
  }
  const changeHandler = () => {
    faq.push({title:`${title}`,content:`${content}`});
    setRefresh(!refresh);
    setTitle('');setContent('');
  }
  return (
    <>
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
    {value && <><TextField
      placeholder="Add a Question"
      variant="outlined"
      fullWidth={true}
      value={title}
      onChange={e => setTitle(e.target.value)}
  />
  <br/>
  <br/>
  <TextField
      placeholder="Add a Answer"
      variant="outlined"
      fullWidth={true}
      value={content}
      onChange={e => setContent(e.target.value)}
  /></>}
    <h6>Add question and answers for the buyers:</h6>
    <Accordion
      active={0}
      collapses={faq}
/>
</>
  );
}