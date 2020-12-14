import useStyles from './styles/ProjectItem.styles'
//import useConditionalIntersectingOnce from 'Utilities/useConditionalIntersectingOnce'
import { memo, useRef, useEffect, useState } from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import MuiLoader from 'SharedComponents/MuiLoader'
import { Link, useHistory } from 'react-router-dom'

const ProjectItem = ({ title, image, description, link }) => {

    const classes = useStyles()


    const imageRef = useRef(null)
    const [imageLoaded, setImageLoaded] = useState(false)
    useEffect(() => {
        if (imageRef.current !== null && imageRef.current.complete == false) {
            imageRef.current.onload = () => {
                setImageLoaded(true)
            }
        } else if (imageRef.current.complete == true) {
            setImageLoaded(true)
        }
    }, [imageLoaded])

    const cardRef = useRef(null)
    const cardIsIntersecting = useConditionalIntersectingOnce({
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.5
    },
        cardRef,
        imageLoaded
    )

    const history = useHistory()

    return (
        <>
            {imageLoaded == false &&
                <div className={classes.loader}>
                    <MuiLoader size='100%' />
                </div>
            }

            <div className={`${classes.container} ${cardIsIntersecting ? classes.containerLoaded : null}`}>
                <Card ref={cardRef} className={`${classes.root}`}>
                    <Link to={link} className={classes.link}>
                        <CardActionArea className={classes.actionArea}>
                            <CardMedia
                                className={classes.media}
                                image={image}
                                component='img'
                                title={title}
                                ref={imageRef}
                            />

                            <CardContent>
                                <Typography gutterBottom variant='h4'>{title}</Typography>
                                <Typography>{description}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Link>
                    <CardActions>
                        <Button size='small' color='primary'
                            onClick={() => { history.push(link) }}
                        >
                            View
                            </Button>
                    </CardActions>
                </Card>
            </div>

        </>
    )
}

const useConditionalIntersectingOnce = (options, elementRef, condition) => {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        if (condition == true) {
            let observer

            const callback = (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && elementRef.current != null) {
                        setIsIntersecting(true)
                        observer.disconnect()
                    }
                })
            }

            observer = new IntersectionObserver(callback, options)

            observer.observe(elementRef.current)

            return () => {
                observer.unobserve(elementRef.current)
            }
        }
    }, [condition])

    return isIntersecting
}

export default memo(ProjectItem)