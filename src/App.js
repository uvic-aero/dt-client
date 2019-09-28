import React from 'react'
import Dashboard from 'aero-ui/Dashboard'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'

const UvicAero = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'UVic Aero'}
            <Link color="inherit" href="https://uvicaero.com/" target="_blank">
                UVic Aero
            </Link>
            {' team.'}
        </Typography>
    )
}

const App = () => <Dashboard>{UvicAero()}</Dashboard>

export default App
