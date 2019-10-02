import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PatientsTable from './PatientsTable';
import Title from './Title';

import axios from 'axios';


import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    },
    button: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1)
    }
}));


export default function Patients() {

    const classes = useStyles();
    
    const [newpatient, setNewPatient] = React.useState({name: ''});
    const [patients, setPatients] = React.useState([]);

    React.useEffect(() => { 
      const getPatients = async () => {
        const result = await axios.get('/api/patients');
        setPatients(result.data);
      };
      getPatients();
    }, []);
  
    const handleChange = name => event => {
      setNewPatient({ ...newpatient, [name]: event.target.value });
    };

    const submit = () => {
      console.log('SUBMITTING!');
      axios.post('/api/patients/add',newpatient).then((result) => {
        setPatients(patients.concat([result.data]));
        setNewPatient({name: ''});
      });
    };

    const onDeleteClick = (id) => {
      axios.delete('/api/patients/delete/'+id).then(res => {
        setPatients(patients.filter(p => p._id !== id));
        console.log(res);
      }).catch(err => console.log(err));
    }

    return (
        <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Add New Patient
                      </Typography>

                      <div>
                        <TextField
                          required
                          id="standard-required"
                          label="Name"
                          value={newpatient.name}
                          onChange={handleChange('name')}
                          className={classes.textField}
                        />
                        <Button variant="contained" color="primary" size="small" className={classes.button} onClick={submit}>
                          Add
                        </Button>
                      </div>

                    </Paper>
                    </Grid>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Title>Patients</Title>
                        <PatientsTable patients={patients} onDeleteClick={onDeleteClick}/>
                    </Paper>
                    </Grid>
                </Grid>
            </Container>);
}