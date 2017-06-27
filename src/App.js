import React, { Component } from 'react';
import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import logo from './logo.svg';
import './App.css';

const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider muiTheme={ muiTheme }>
            <AppBar title="My AppBar">
                <children></children>
            </AppBar>
        </MuiThemeProvider>
    );
  }
}

export default App;
