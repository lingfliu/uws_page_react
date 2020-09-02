import React, {Component} from 'react'

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {Paper} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";


const styles = theme=>({
    root: {
        flexGrow: 1,
        overflowX: 'auto'
    }
});

function mapStateToProps(state){
    return {
    }
};

function mapDispatchToProps(dispatch) {
    return {

    }
}

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //initial state when rendered
        };
    }

    render() {
        const classes = styles();
        return (
            <Grid container className={classes.root} justify="center">
                <Grid item xs={1}>
                    <Paper></Paper>
                </Grid>
            </Grid>
        );
    }
}

// export default MainPage;
export default withStyles(styles)(MainPage);
// export default connect(mapDispatchToProps, mapStateToProps)(withStyles(styles)(MainPage))
