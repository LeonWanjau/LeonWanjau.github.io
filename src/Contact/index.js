import useStyles from './styles/index.styles'
import { Typography } from '@material-ui/core'
import { MyTextField } from 'SharedComponents/FormComponents'
import { Formik, Form } from 'formik'
import { object as YupObject, string as YupString } from 'yup'
import { Button } from '@material-ui/core'
import SectionTitle from 'SharedComponents/SectionTitle'
import { CircularProgress } from '@material-ui/core'
import { useState, memo, useRef, useEffect } from 'react'
import useIsIntersectingOnce from 'Utilities/useIsIntersectingOnce'
import { copyToClipBoard } from 'Utilities/Functions'

const Contact = () => {
    const classes = useStyles()

    const textFields = [
        { label: 'Name', name: 'name', type: 'text' },
        { label: 'Your Email Address', name: 'email', type: 'email' },
        { label: 'Message', name: 'message', type: 'message', multiline: true, rowsMax: Infinity }
    ]

    const [emailSending, setEmailSending] = useState(false)
    const [emailSent, setEmailSent] = useState(false)

    const mainContainerRef = useRef(null)
    const mainContainerIsIntersecting = useIsIntersectingOnce({
        rootMargin: '0px 0px 10% 0px',
        threshold: 0.3
    },
        mainContainerRef
    )

    const emailTextRef = useRef(null)
    const [emailText, setEmailText] = useState('leonwanjau@gmail.com')
    const emailEvents = useRef([
        { name: 'mouseenter', func() { setEmailText('Click to copy') } },
        { name: 'mouseleave', func() { setEmailText('leonwanjau@gmail.com') } },
        {
            name: 'mousedown',
            func() {
                copyToClipBoard('leonwanjau@gmail.com')
                setEmailText('Copied!')
            }
        },
        { name: 'mouseup', func() { setEmailText('Click to copy') } },
        /*
        {
            name: 'touchstart', func() {
                copyToClipBoard('leonwanjau@gmail.com')
                setEmailText('Copied')
            }
        },
        */
        //{ name: 'touchend', func() { setEmailText('leonwanjau@gmail.com') } }

    ])
    useEffect(() => {
        if (emailTextRef.current !== null) {
            const textElement = emailTextRef.current

            emailEvents.current.forEach(({ name, func }) => {
                textElement.addEventListener(name, func, false)
            })
        }
    }, [])

    return (
        <>
            <SectionTitle text='Contact' id='contact' />

            <div ref={mainContainerRef} className={`${classes.mainContainer} ${mainContainerIsIntersecting ? classes.mainContainerIsIntersecting : null}`}>

                <div className={classes.introduction}>
                    <Typography
                        className={`${classes.introductionText}`}
                        variant='h3'
                    >
                        Looking to work together on a project?
                    <br />
                    Send me a message!
                </Typography>
                </div>

                <div className={classes.formContainer}>
                    {emailSent
                        ?
                        <Typography className={classes.emailSentText} variant='h4'>
                            Thank your for your message,
                            <br />
                            I will respond to you as soon as possible
                        </Typography>

                        :

                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                message: '',
                            }}

                            validationSchema={YupObject({
                                name: YupString().required('Required'),
                                email: YupString().required('Required').email('Please provide a valid email address'),
                                message: YupString().required('Required')
                            })}

                            onSubmit={(values) => {
                                setEmailSending(true)

                                fetch(EMAIL_API, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values)
                                })

                                setEmailSending(false)
                                setEmailSent(true)
                            }}
                        >
                            <Form className={classes.form}>
                                {textFields.map(({ ...attributes }, index) => (
                                    <div key={index} className={classes.formInput}>
                                        <MyTextField {...attributes} />
                                    </div>
                                ))
                                }

                                <Button className={classes.formButton} variant='contained'
                                    type='submit' color='primary' disabled={emailSending ? true : false}>
                                    {emailSending ? 'Sending' : 'Send'}
                                </Button>

                                {emailSending &&
                                    <div className={classes.loaderContainer}>
                                        <CircularProgress />
                                    </div>
                                }
                            </Form>
                        </Formik>
                    }
                </div>


                <div className={classes.emailDisplay}>
                    <Typography className={classes.emailDisplayText} variant='h3'>Or send me a message directly at</Typography>

                    <Typography ref={emailTextRef} className={`${classes.emailDisplayText} ${classes.email}`}
                        variant='h3'
                    >
                        {emailText}
                    </Typography>
                </div>

            </div>
        </>
    )
}

export default memo(Contact)