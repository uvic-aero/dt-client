import React from 'react'
import Typography from '@material-ui/core/Typography'
import UILink from '@material-ui/core/Link'

const TestComponent = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'UVic Aero'}
            <UILink
                color="inherit"
                href="https://uvicaero.com/"
                target="_blank"
            >
                UVic Aero
            </UILink>
            {' teams.'}
        </Typography>
    )
}

export default TestComponent
