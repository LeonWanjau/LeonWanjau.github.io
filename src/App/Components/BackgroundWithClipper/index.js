import useStyles from './styles/index.styles.js'
import React from 'react'

const BackgroundWithClipper = ({ children, backgroundColor = 'none', backgroundImg = 'none',
    topSpacer = true, bottomSpacer = true, contentPadding = 0 }) => {

    const classes = useStyles({
        backgroundColor, backgroundImg,
        topSpacer, bottomSpacer, contentPadding
    })

    return (
        <div className={classes.background}>
            {topSpacer &&
                <div className={classes.spacer} />
            }

            <div className={classes.contentContainer}>
                {children}
            </div>

            {bottomSpacer &&
                <div className={classes.spacer} />
            }
        </div>
    )
}

export default React.memo(BackgroundWithClipper)