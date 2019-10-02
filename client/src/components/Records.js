import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import DeleteIcon from '@material-ui/icons/Delete';
import LaunchIcon from '@material-ui/icons/Launch';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Title from './Title';

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
      height: 240,
    },
    modalpaper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`
    },
}));


export default function Records() {

    const classes = useStyles();

    const [records, setRecords] = React.useState([]);
    const [currentRecord, setCurrentRecord] = React.useState({});
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const formatDate = (dstring) => {
      let d = new Date(dstring);
      return d.toLocaleString('en-US');
    }

    const getAverage = (arr) => {
      return (arr.reduce((total,trial) => total+trial.duration,0)) / arr.length;
    }

    const distanceM = 6;

    const getVelocity = (arr) => {
      let ave = getAverage(arr);
      return (distanceM/ave);
    }

    React.useEffect(() => { 
      const getRecords = async () => {
        const result = await axios.get('/api/records');
        console.log(result.data);
        setRecords(result.data);
      };
      getRecords();
    }, []);

    const deleteRecord = (id) => {
      axios.delete('/api/records/delete/'+id).then(res => {
        setRecords(records.filter(r => r._id !== id));
        console.log(res);
      }).catch(err => console.log(err));
    }

    const openRecord = (record) => {
      if(record.patient !== null)
      {
        setCurrentRecord(record);
        handleOpen();
      }
    }

    
    return (
        <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                    <Title>Records</Title>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Date</TableCell>
                          <TableCell>Patient</TableCell>
                          <TableCell># Trials</TableCell>
                          <TableCell>Average Time</TableCell>
                          <TableCell></TableCell>
                          <TableCell></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {records.map(row => (
                          <TableRow key={row._id}>
                            <TableCell>{formatDate(row.date)}</TableCell>
                            <TableCell>{row.patient !== null ? row.patient.name : '[Patient Deleted]'}</TableCell>
                            <TableCell>{row.trials.length}</TableCell>
                            <TableCell>{getAverage(row.trials).toFixed(2) + 's'}</TableCell>
                            <TableCell><IconButton aria-label="view" onClick={() => openRecord(row)}><LaunchIcon/></IconButton></TableCell>                            
                            <TableCell><IconButton aria-label="delete" onClick={() => deleteRecord(row._id)}><DeleteIcon/></IconButton></TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    </Paper>
                    </Grid>
                </Grid>

                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={open}
                  onClose={handleClose}
                >
                  {currentRecord._id!==undefined &&
                    <div className={classes.modalpaper}>
                      <h2>{currentRecord.patient.name}</h2>
                      <h3>{formatDate(currentRecord.date)}</h3>
                      <p><strong>Trials</strong></p>
                      <ol>
                        {currentRecord.trials.map((t,i) => <li key={i}>{`${t.duration}s`}</li>)}
                      </ol>
                      <p>
                      <p><strong>Average: </strong>{getAverage(currentRecord.trials).toFixed(2) + 's'}<br/>
                      <strong>Velocity: </strong>{getVelocity(currentRecord.trials).toFixed(1) + ' m/s'}</p>
                      <p><strong>Note: </strong><br/>{currentRecord.note}</p>
                        
                      </p>
                    </div>
                  }
                </Modal>

            </Container>);
}