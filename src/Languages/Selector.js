import useStyles from './styles/Selector.styles'
import { Slider, Typography } from '@material-ui/core'
import { memo } from 'react'

const Selector = ({ title, images }) => {
    const classes = useStyles()

    const sliderArray = images.map((image, index) => ({ value: index }))


    return (
        <div className={classes.container}>
            <div className={classes.title}>{title}</div>

            <div className={classes.imageContainer}>
                <div className={classes.innerImageContainer}>
                    {
                        images.map((image, index) => (
                            <div key={index} className={classes.imageItem}>
                                <Typography className={classes.imageTitle} variant='h4'>
                                    {image.title}
                                </Typography>

                                {/*<img className={classes.image} src={image.url} />*/}
                                <object type="image/svg+xml" data={image.url} className={classes.image}></object>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className={classes.selectorArea}>
                <div className={classes.arrow}>
                    <svg version="1.1" viewBox="0 0 571.82 571.82" xmlns="http://www.w3.org/2000/svg">
                        <path d="m76.208 296.04 415.78 272.13c8.286 6.646 12.062 3.941 8.431-6.04l-171.06-260.05c-3.629-9.981-3.596-26.156 0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11l-415.63 268.48c-8.326 6.591-8.363 17.325-0.076 23.972z" />
                    </svg>
                </div>

                <Slider
                    className={classes.slider}
                    step={null}
                    marks={sliderArray}
                    max={sliderArray.length - 1}
                    min={0}
                />

                <div className={`${classes.arrow} ${classes.arrowRight}`}>
                    <svg version="1.1" viewBox="0 0 571.82 571.82" xmlns="http://www.w3.org/2000/svg">
                        <path d="m76.208 296.04 415.78 272.13c8.286 6.646 12.062 3.941 8.431-6.04l-171.06-260.05c-3.629-9.981-3.596-26.156 0.076-36.123l170.91-256.26c3.672-9.966-0.101-12.702-8.43-6.11l-415.63 268.48c-8.326 6.591-8.363 17.325-0.076 23.972z" />
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default memo(Selector)