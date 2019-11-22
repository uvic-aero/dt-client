import React from 'react';
import {
    TextField,
    MenuItem,
    Typography,
    Box,
    Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const fs = window.require('fs');

const settingStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    settingButton: {
        width: 200,
        marginLeft: 10,
        marginTop: 10,
    },
}));

const resolution = [
    {
        value: '1080',
        label: '1080p',
    },
    {
        value: '720',
        label: '720p',
    },
    {
        value: '480',
        label: '480p',
    },
    {
        value: '360',
        label: '360p',
    },
];

const AppSettings = () => {
    // File where the setting values are/will be held
    const FileName = 'userSettings.json';

    // Defualt values for our settings
    const defaultSettings = {
        OBC: '0.0.0.0',
        VSP: '5001',
        pixhawkPort: '5002',
        streamResolution: '360',
    };
    // Check if the settings file exists
    if (!fs.existsSync(FileName)) {
        // Create it with default values if it doesnt
        fs.writeFileSync(FileName, JSON.stringify(defaultSettings), err => {
            if (err) throw err;
        });
    }
    // Read user Settings
    const userSettings = JSON.parse(fs.readFileSync(FileName, 'utf8'));

    const classes = settingStyles();
    const [values, setValues] = React.useState({
        OBC: userSettings.OBC,
        VSP: userSettings.VSP,
        pixhawkPort: userSettings.pixhawkPort,
        streamResolution: userSettings.streamResolution,
    });
    const handleChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };
    // Save any changes to the setting values
    const saveChanges = () => {
        fs.writeFile(FileName, JSON.stringify(values), err => {
            if (err) throw err;
        });
    };

    return (
        <Box p={2} mt={-6} className={classes.root}>
            <Typography
                component="h2"
                variant="h6"
                color="primary"
                gutterBottom
            >
                Settings{' '}
            </Typography>{' '}
            <TextField
                id="OBC"
                label="OBC Address"
                className={classes.textField}
                value={values.OBC}
                onChange={handleChange('OBC')}
                margin="normal"
            />
            <TextField
                id="VSP"
                label="Video Stream Port"
                className={classes.textField}
                value={values.VSP}
                onChange={handleChange('VSP')}
                margin="normal"
            />
            <TextField
                id="pixhawkPort"
                label="Pixhawk Port"
                className={classes.textField}
                value={values.pixhawkPort}
                onChange={handleChange('pixhawkPort')}
                margin="normal"
            />
            <TextField
                id="streamResolution"
                select
                label="Stream Resolution"
                className={classes.textField}
                value={values.streamResolution}
                onChange={handleChange('streamResolution')}
                SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                }}
                margin="normal"
            >
                {resolution.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                        {' '}
                        {option.label}{' '}
                    </MenuItem>
                ))}{' '}
            </TextField>{' '}
            <Button
                variant="contained"
                className={classes.settingButton}
                onClick={saveChanges}
            >
                Save Settings{' '}
            </Button>{' '}
        </Box>
    );
};

export default AppSettings;
