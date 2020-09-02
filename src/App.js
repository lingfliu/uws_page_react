import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Router, withRouter, NavLink, Redirect, Switch} from 'react-router-dom'

import {MuiThemeProvider, withStyles, makeStyles} from "@material-ui/core";
import MainPage from "./components/MainPage";
import {createBrowserHistory} from "history";

import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const urlMapping = [
    {
        url:'/',
        cmp: MainPage
    },
];

const theme = {
    pallete: {
        primary: {
            main: '#e57373',
            light: '#ffa4a2',
            dark: '#af4448'
        },
        secondary: {
            main:  '#79c9dd',
            light: '#acfcff',
            dark: '#4598ab'
        }
    }
}

const styles = (theme) => ({
    root: {
        width: '80%',
        marginTop: '3',
        overflowX: 'auto'
    }
})

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const history = createBrowserHistory();


export default function SpacingGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                    {[0, 1, 2].map((value) => (
                        <Grid key={value} item>
                            <Paper className={classes.paper} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.control}>
                    <Grid container>
                        <Grid item>
                            <FormLabel>spacing</FormLabel>
                            <RadioGroup
                                name="spacing"
                                aria-label="spacing"
                                value={spacing.toString()}
                                onChange={handleChange}
                                row
                            >
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                    <FormControlLabel
                                        key={value}
                                        value={value.toString()}
                                        control={<Radio />}
                                        label={value.toString()}
                                    />
                                ))}
                            </RadioGroup>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
}

