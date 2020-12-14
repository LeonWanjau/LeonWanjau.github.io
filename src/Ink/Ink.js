import { makeStyles, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import jssTemplate from 'jss-plugin-template';
import clsx from 'clsx'
import CollaborationImage from 'Assets/images/collaboration.jpg'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useRef, useState, useEffect, memo } from 'react'

const jss = create({
    plugins: [jssTemplate(), ...jssPreset().plugins],
});

const useStyles = makeStyles({
    homeButtonContainer: {
        backgroundColor: 'gainsboro'
    },

    homeButton: {
        margin: '0.5rem',
    },

    loaderContainer: {
        width: '4rem',
        height: '4rem',
        margin: '2rem auto',
        //position: 'absolute',
        //top: '50%',
        //left: '50%',
        //transform: 'translate(-50%,-50%)',
    },

    '@global': {
        html: `
    --brand-green: hsl(162, 87%, 21%);
    --dark-green: hsl(162, 88%, 30%);
    --medium-green: hsl(162, 73%, 46%);
    --text-color: hsl(210, 11%, 15%);
    --gray: hsl(210, 7%, 56%);
    --light-gray: hsl(210, 17%, 95%);
    --extra-light-gray: hsl(210, 17%, 98%);
    --white: hsl(0, 0%, 100%);
    --red: hsl(342, 63%, 46%);
    `,
    },

    inkContainer: `
        margin: 0;
        /*font-family: Helvetica, Arial, sans-serif;*/
        font-family: Roboto;
        line-height: 1.4;
        background-color: var(--extra-light-gray);
        padding-bottom: 2rem;
    `,


    headings: `
    font-family: Georgia, serif;
    /*font-family: Alegreya*/
    `,

    a: {
        color: 'var(--medium-green)',
        cursor: 'pointer',

        '&:visited': {
            color: 'var(--brand-green)'
        },
        '&:hover': {
            color: 'var(--brandgreen)'
        },
        '&:active': {
            color: 'var(--red)'
        }
    },

    navContainer: `
    background-color: var(--medium-green);
    `,

    navContainer__inner: `
    display: flex;
    justify-content: space-between;
    max-width: 1080px;
    margin: 0 auto;
    padding: 0.625em 0;
    `,

    homeLink: `
    marginLeft: 0.5rem;
    color: var(--text-color);
    font-size: 1.6rem;
    font-family: Georgia, serif;
    /*font-family: Alegreya;*/
    font-weight: bold;
    text-decoration: none;
    `,

    topNav: {
        display: 'flex',
        listStyleType: 'none',
        margin: '0 0.5rem 0 0',

        '& > li + li': {
            marginLeft: '0.625em'
        },

        '& a': `
        display: block;
        padding: 0.3em 1.25em;
        color: var(--white);
        background: var(--brand-green);
        text-decoration: none;
        border-radius: 3px;
        `,

        '& a:hover': {
            backgroundColor: 'var(--dark-green)'
        }
    },

    topNav__featured: {
        '& > a': `
        color: var(--brand-green);
        background-color: var(--white);
        `,

        '& > a:hover': `
        color: var(--medium-green);
        background-color: var(--white);
        `
    },

    hero: {
        /*background: `url(${CollaborationImage}) no-repeat`,*/
        backgroundSize: 'cover',
        marginBottom: '2.5rem',
        position: 'relative',

        '& h2': `
        font-size: 1.95rem;
        margin-top:0;
        margin-bottom:0.625rem;
        `
    },

    hero__inner: `
    max-width: 1080px;
    margin: 0 auto;
    padding: 5.5625em 12.5em 12.5em 0;
    text-align: right;
    `,

    button: {
        display: 'inline-block',
        padding: '0.4em 1em',
        color: 'var(--brand-green)',
        border: '2px solid var(--brand-green)',
        borderRadius: '0.2em',
        textDecoration: 'none',
        fontSize: '1rem',

        '&:hover': `
        background-color: var(--dark-green);
        color: var(--white);
        `
    },

    buttonCta: `
    padding: 0.6em 1em;
    background-color: var(--brand-green);
    color: var(--white);
    border: none;
    `,

    container: `
    margin: 0 0.5rem;
    max-width: 1080px;
    `,

    p: `
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    `,

    tileRow: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',

        '& > *': `
        flex: 1;
        `,

        '& > * + *': {
            marginTop: '1.5625em',
        }
        /*
        '& > * + *': `
        margin-left: 1.5625em;
        `
        */
    },

    tile: {
        backgroundColor: 'var(--white)',
        borderRadius: '0.3em',
        padding: '1.5625em',
        boxShadow: '0px 0px 12px -1px #939596',

        '& > h4': `
        margin-bottom: 1.5em;
        `
    },

    pageFooter: `
    margin-top: 3em;
    padding: 1em 0;
    background-color: var(--light-gray);
    color: var(--gray);
    `,

    pageFooter__inner: `
    margin: 0 auto;
    max-width: 1080px;
    text-align: center;
    font-size:0.8rem;
    `,

    tagList: {
        listStyle: 'none',
        paddingLeft: 0,

        '& > li': `
        display:inline;
        padding:0.3rem 0.5rem;
        font-size:0.8rem;
        border-radius:0.2rem;
        background-color:var(--light-gray);
        line-height:2.6;
        `,
        '& > li + li': `
        margin-left:10px;
        `,
    },

    '@media (min-width:960px)': {
        tileRow: {
            flexDirection: 'row',
            alignItems:'stretch',

            '& > * + *': {
                marginTop: 0,
                marginLeft: '1.5625em',
            }
        }
    },

    '@media (min-width:1080px)':{
        container:{
            margin:'0 auto',
        }
    }
})

const Ink = () => {
    const classes = useStyles()

    const history = useHistory()

    const heroRef = useRef(null)
    const [backgroundImgLoaded, setBackgroundImgLoaded] = useState(false)
    useEffect(() => {
        if (backgroundImgLoaded == false && heroRef.current !== null) {
            let preLoaderImg = document.createElement('img')
            preLoaderImg.addEventListener('load', () => {
                heroRef.current.style.backgroundImage = `url(${CollaborationImage})`
                preLoaderImg = null
                setBackgroundImgLoaded(true)
            })
            preLoaderImg.src = CollaborationImage
        }
    }, [])


    return (
        < div className={classes.inkContainer}>
            <div className={classes.homeButtonContainer}>
                <Button
                    className={classes.homeButton}
                    variant='contained'
                    color='primary'
                    startIcon={<HomeIcon />}
                    onClick={() => { history.push('/') }}
                >
                    Home
                </Button>
            </div>

            <nav className={classes.navContainer}>
                <div className={classes.navContainer__inner}>
                    <a className={clsx(classes.homeLink, classes.a)}>Ink</a>
                    <ul className={classes.topNav}>
                        <li><a className={classes.a}>Features</a></li>
                        <li><a className={classes.a}>Pricing</a></li>
                        <li><a className={classes.a}>Support</a></li>
                        <li className={classes.topNav__featured}><a className={classes.a}>Login</a></li>
                    </ul>
                </div>
            </nav>

            <div ref={heroRef} className={classes.hero}>
                {backgroundImgLoaded == false &&
                    <div className={classes.loaderContainer}>
                        <CircularProgress size='100%' />
                    </div>
                }

                {backgroundImgLoaded &&
                    <div className={classes.hero__inner}>
                        <h2 className={classes.headings}>Team collaboration done right</h2>
                        <a className={clsx(classes.button, classes.buttonCta, classes.a)}>Get started</a>
                    </div>
                }
            </div>

            <div className={classes.container}>

                <div className={classes.tileRow}>
                    <div className={classes.tile}>
                        <h4 className={classes.headings}>Work together, even if you're apart</h4>
                        <p>Organize your team conversations into threads. Collaborate
                    together on documents in real-time. Use face-to-face <a className={classes.a}>video
                        calls</a> when typing just won't
                    do.</p>
                        <a className={clsx(classes.button, classes.a)}>Read more</a>
                    </div>

                    <div className={classes.tile}>
                        <h4 className={classes.headings}>Take it with you</h4>
                        <p>Ink is available on a wide array of devices, so you can work from
                    anywhere:</p>
                        <ul className={classes.tagList}>
                            <li>Web</li>
                            <li>iOS</li>
                            <li>Android</li>
                            <li>Windows Phone</li>
                        </ul>
                        <a className={clsx(classes.a, classes.button)}>Read more</a>
                    </div>

                    <div className={classes.tile}>
                        <h4 className={classes.headings}>Priced right</h4>
                        <p>Whether you work on a team of three or a three hundred, you'll
                    find our tiered pricing reasonable at every level.</p>
                        <a className={clsx(classes.button, classes.a)}>Read more</a>
                    </div>

                </div>
            </div>
        </div >
    )
}

const InkTemplate = () => (
    <StylesProvider jss={jss}>
        <Ink />
    </StylesProvider>
)


export default memo(InkTemplate)