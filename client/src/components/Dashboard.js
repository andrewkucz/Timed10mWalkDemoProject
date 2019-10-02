import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';

import Snackbar from '@material-ui/core/Snackbar';

import TrialsTable from './TrialsTable';
import axios from 'axios';


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
      height: 350,
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    button: {
      marginTop: theme.spacing(2)
    },
    divider: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    currentPatient: {
      fontWeight: 700
    }
}));


export default function Dashboard() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const [time, setTime] = React.useState({
      start: 0,
      stop: 0
    });
    const [elapsedTime, setElapsedTime] = React.useState(0);
    const [running, setRunning] = React.useState(false)
    const [trials, setTrials] = React.useState([]);
    const [patients, setPatients] = React.useState([]);
    const [currentPatient, setCurrentPatient] = React.useState({
      name: '',
      records: []
    });
    const [note, setNote] = React.useState('');
    const [snackbar, setSnackbar] = React.useState({
      open: false,
      message: '',
      variant: ''
    });

    React.useEffect(() => { 
      const getPatients = async () => {
        const result = await axios.get('/api/patients');
        setPatients(result.data);
      };
      getPatients();
    }, []);
    
    const start = () => {
      console.log('start');
      setRunning(true);
      setElapsedTime(0);
      setTime({...time, start: Date.now()});
    };

    const stop = () => {
      console.log('stop');
      setElapsedTime(0);
      if(running)
      {
        setRunning(false);
        setTime({...time, stop: Date.now()});
      }
    };

    const recordTrial = () => {
      let dur = (time.stop-time.start)/1000;
      setTrials(trials.concat([dur]));
      setTime({start: 0, stop: 0});
    };

    const createRecord = () => {
      let record = {};
      if(currentPatient._id)
      {
        record.patient = currentPatient._id;
        record.trials = trials.map(t => { return {duration: t}});
        record.note = note;
        axios.post('/api/records/add',record).then(res=>{
          console.log(res.data);
          //setCurrentPatient({});
          setNote('');
          setTrials([]);
          setSnackbar({
            open: true,
            variant: 'success',
            message: 'Successfully added record.'
          });
          setCurrentPatient({...currentPatient, records: [res.data].concat(currentPatient.records)})


        }).catch(err => {
          console.log(err);
          setSnackbar({
            open: true,
            variant: 'error',
            message: 'Error creating record.'
          });
        });
      }
      else
      {
        setSnackbar({
          open: true,
          variant: 'error',
          message: 'Please select a patient from below for this record.'
        });
      }
    }

    const handlePatientClick = (patient) => {
      axios.get('/api/records/bypatient/'+patient._id).then(res => {
          setCurrentPatient({...patient, records: res.data})
      }).catch(err => {
        console.log(err);
        setCurrentPatient({...patient, records: []});
      });

    };
    const handleChange = () => event => {
      setNote(event.target.value);
    };

    const handleSnackbarClose = () => {
      setSnackbar({...snackbar,open:false});
    }

    const onDeleteClick = (i) => {
      console.log('deleting ' + i);
      setTrials(trials.filter((t,index) => (index!==i)));
    }


    const savedCallback = React.useRef();
    function callback() {
      setElapsedTime(Date.now()-time.start);
    }
    React.useEffect(() => {
      savedCallback.current = callback;
    });
    React.useEffect(() => {
      function tick() {
        console.log('ticking');
        savedCallback.current();
      }

      if(running)
      {
        let id = setInterval(tick, 10);
        return () => {
          console.log('Clearing interval');
          clearInterval(id);
        };
      }
    }, [running]);


    return (
        <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={3} lg={3}>
                    <Paper className={fixedHeightPaper}>
                    <Typography component="h2" variant="h6" color="primary" gutterBottom>
                      Timer
                    </Typography>
                    <Typography variant="h2" component="h3" gutterBottom>
                      {  (running ? (elapsedTime/1000).toFixed(2) : (time.stop-time.start)/1000) + 's'}
                      </Typography>
                    <Button variant="contained" color={running ? 'secondary' : 'primary'} className={classes.button} onClick={running ? ()=>stop() : ()=>start()}>
                      { running ? 'Stop' : 'Start'}
                    </Button>
                    { !running && time.stop !== 0 && time.start !== 0 &&
                      <Button variant="contained" className={classes.button} onClick={()=>recordTrial()}>
                        Log Trial
                        <ArrowForwardIosIcon className={classes.rightIcon} />
                      </Button>
                    }
                    </Paper>
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Trials
                      </Typography>
                      <TrialsTable trials={trials} onDeleteClick={onDeleteClick} />
                    </Paper>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Notes
                      </Typography>
                      <TextField
                        id="standard-multiline-flexible"
                        placeholder="Optional"
                        multiline
                        rows="11"
                        value={note}
                        onChange={handleChange()}
                        className={classes.textField}
                      />

                      { trials.length>0 &&
                      <Button variant="contained" className={classes.button} onClick={()=>createRecord()}>
                        Save Test
                        <PostAddIcon className={classes.rightIcon} />
                      </Button>
                      }
                    </Paper>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3}>
                    <Paper className={fixedHeightPaper}>
                      <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        Current Patient
                      </Typography>
                      <Typography className={classes.currentPatient}>
                        {currentPatient.name || 'Please select a patient from below'}
                      </Typography>

                      { currentPatient.name &&
                      <>
                      <Divider variant="middle" className={classes.divider}/>
                      <Typography>
                        Previous Tests
                      </Typography>
                      <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Date</TableCell>
                              <TableCell>Av. Time</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                          {currentPatient.records.map(r => {
                            let d = new Date(r.date);
                            let date = `${d.getMonth()+1}/${d.getDate()}/${d.getFullYear()}`;
                            let average = r.trials.reduce((total,trial) => total+trial.duration,0) / r.trials.length;
                            return (
                              <TableRow key={r._id}>
                                <TableCell>{date}</TableCell>
                                <TableCell>{average.toFixed(1)}s</TableCell>
                              </TableRow>
                            )})}
                          </TableBody>
                        </Table>
                        </>
                      }
                      
                    </Paper>
                    </Grid>

                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography component="h2" variant="h6" color="primary" gutterBottom>
                          Patient Selection
                        </Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {patients.map(p => (
                              <TableRow key={p._id} selected={p._id === currentPatient._id}>
                                <TableCell onClick={()=>handlePatientClick(p)}>{p.name}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                    </Paper>
                    </Grid>
                </Grid>
                <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                open={snackbar.open}
                onClose={handleSnackbarClose}
                ContentProps={{'aria-describedby': 'message-id'}}
                message={<span id="message-id">{snackbar.message}</span>}
                autoHideDuration="4000"
                />
            </Container>
          
            
            );
}