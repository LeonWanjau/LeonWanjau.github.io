import { makeStyles, jssPreset, StylesProvider } from '@material-ui/core/styles';
import { create } from 'jss';
import { useRef, memo, useState, useEffect } from 'react'
import jssTemplate from 'jss-plugin-template';
import clsx from 'clsx'
import CoffeeImageSmall from 'Assets/images/coffee-beans-small.jpg'
import CoffeeImageMedium from 'Assets/images/coffee-beans-medium.jpg'
import CoffeeImage from 'Assets/images/coffee-beans.jpg'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'

const jss = create({
    plugins: [jssTemplate(), ...jssPreset().plugins],
})

const useStyles = makeStyles({
    loaderContainer: {
        width: '4rem',
        height: '4rem',
        //margin: '2rem auto',
        position:'absolute',
        top:'50%',
        left:'50%',
        transform:'translate(-50%,-50%)',
    },

    homeButton: {
        margin: '0.5rem',
    },

    wcrContainer: `
    box-sizing: border-box;
    font-size: calc(1vw + 0.6em);
    font-family: Roboto;
    `,

    a: {
        cursor: 'pointer',

        '&:link': `
        color: #1476b8;
        font-weight: bold;
        text-decoration: none;
        `,

        '&:visited': `
        color: #1430b8;
        `,

        '&:hover': `
        text-decoration: underline; 
        `,

        '&:active': `
        color: #b81414;
        `,
    },

    pageHeader: `
    padding: 0.4em 1em;
    background-color: #fff;
    `,

    title: {

        '& > h1': `
        font-family: Alegreya;
        color: #333;
        text-transform: uppercase;
        font-size: 1.5rem;
        margin: 0.2em 0;
        `
    },

    slogan: `
    color: #888;
    font-size: 0.875em;
    margin: 0;
    `,

    hero: `
    position: relative;
    padding: 2em 1em;
    text-align: center;
    /*background-image: url(${CoffeeImageSmall});*/
    background-size: 100%;
    color: #fff;
    text-shadow: 0.1em 0.1em 0.3em #000;
    `,

    main: `
    padding: 1em;
    `,

    subtitle: `
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    font-size: 0.875rem;
    text-transform: uppercase;
    `,

    menu: {
        position: 'relative',
        '&.isopen $menuDropdown': `
        display: block;
        `
    },

    menuToggle: {
        position: 'absolute',
        top: '-1.2em',
        right: '0.1em',

        border: '0',
        backgroundColor: 'transparent',

        fontSize: '3em',
        width: '1em',
        height: '1em',
        lineHeight: 0.4,
        textIndent: '5em',
        whiteSpace: 'nowrap',
        overflow: 'hidden',

        '&:after': `
        position: absolute;
        top: 0.2em;
        left: 0.2em;
        display: block;
        content: "\\2261";
        text-indent: 0;
    `
    },

    menuDropdown: `
    display: none;
    position: absolute;
    right: 0;
    left: 0;
    margin: 0;
    `,

    navMenu: {
        margin: 0,
        paddingLeft: 0,
        border: '1px solid #ccc',
        listStyle: 'none',
        backgroundColor: '#000',
        color: '#fff',

        '& > li + li': `
    border-top: 1px solid #ccc;
    `,

        '& > li > a': `
    display: block;
    padding: 0.8em 1em;
    color: #fff;
    font-weight: normal;
    `
    },

    '@media (min-width: 35em)': {
        pageHeader: `
        padding: 1em 4em;
        `,
        navMenu: {
            display: 'flex',
            border: 0,
            padding: '0 1em',

            '& > li': `
            flex: 1;
            `,

            '& > li + li': `
            border: 0;
            `,

            '& > li > a': `
            padding: 0.3em;
            text-align: center;
            `
        },
        row: `
            display: flex;
            margin-left: -.75em;
            margin-right: -.75em;
        `,

        column: `
            flex: 1;
            margin-right: 0.75em;
            margin-left: 0.75em;
        `,
        menuToggle: {
            display: 'none'
        },

        menuDropdown: {
            display: 'block',
            position: 'static'
        },

        title: {
            '& > h1': `
            font-size: 2.25em
            `
        },

        hero: `
        padding: 5em 3em;
        font-size: 1.2em;
        /*background-image: url(${CoffeeImageMedium});*/
        `,

        main: {
            padding: '2em 1em'
        },
    },

    '@media (min-width: 50em)': {
        wcrContainer: {
            fontSize: '1.125em'
        },

        navMenu: {
            padding: '0 4em'
        },

        pageHeader: `
        padding: 1em 4em;
        `,

        hero: `
        padding: 7em 6em;
        /*background-image: url(${CoffeeImage});*/
        `,
    },
})

const WCR = () => {
    const classes = useStyles()

    const menuRef = useRef(null)

    const history = useHistory()

    const onToggleMenuButtonClick = (e) => {
        e.preventDefault
        menuRef.current.classList.toggle('isopen')
    }

    const heroRef = useRef(null)
    const [backgroundImgLoaded, setBackgroundImageLoaded] = useState(false)
    useEffect(() => {
        if (backgroundImgLoaded == false && heroRef.current !== null) {
            let preLoaderImg = document.createElement('img')
            preLoaderImg.src = CoffeeImage
            preLoaderImg.addEventListener('load', () => {
                heroRef.current.style.backgroundImage = `url(${CoffeeImage})`
                preLoaderImg = null
                setBackgroundImageLoaded(true)
            })
        }
    }, [])

    return (
        <>
            <div className={clsx(classes.wcrContainer)}>
                <Button
                    className={classes.homeButton}
                    variant='contained'
                    color='primary'
                    startIcon={<HomeIcon />}
                    onClick={() => { history.push('/') }}
                >
                    Home
                </Button>

                <header id="header" className={classes.pageHeader}>
                    <div className={classes.title}>
                        <h1>Wombat Coffee Roasters</h1>
                        <div className={classes.slogan}>We love coffee</div>
                    </div>
                </header>

                <nav className={classes.menu} id="main-menu" ref={menuRef}>
                    <button onClick={onToggleMenuButtonClick} className={classes.menuToggle} id="toggle-menu">
                        toggle menu
        </button>
                    <div className={classes.menuDropdown}>
                        <ul className={classes.navMenu}>
                            <li><a className={classes.a}>About</a></li>
                            <li><a className={classes.a}>Shop</a></li>
                            <li><a className={classes.a}>Menu</a></li>
                            <li><a className={classes.a}>Brew</a></li>
                        </ul>
                    </div>
                </nav>

                <aside id="hero" ref={heroRef} className={classes.hero}>
                {backgroundImgLoaded == false &&
                    <div className={classes.loaderContainer}>
                        <CircularProgress size='100%' />
                    </div>
                }
                {backgroundImgLoaded &&
                    `Welcome to Wombat Coffee Roasters! We are
                    passionate about our craft, striving to bring you
                    the best hand-crafted coffee in the city.`
                }
                </aside>

                <main id="main" className={classes.main}>
                    <div className={classes.row}>
                        <section className={classes.column}>
                            <h2 className={classes.subtitle}>Single-origin</h2>
                            <p>We have built partnerships with small farms
                            around the world to hand-select beans at the
                            peak of season. We then carefully roast in
                    <a>small batches</a>
                    to maximize their potential.</p>
                        </section>
                        <section className={classes.column}>
                            <h2 className={classes.subtitle}>Blends</h2>
                            <p>Our tasters have put together a selection of
                            carefully balanced blends. Our famous
                    <a>house blend</a>
                    is available year round.</p>
                        </section>
                        <section className={classes.column}>
                            <h2 className={classes.subtitle}>Brewing Equipment</h2>
                            <p>We offer our favorite kettles, French
                            presses, and pour-over cones. Come to one of
                    our <a>brewing
                        classes</a> to learn how to brew the perfect
                    pour-over cup.</p>
                        </section>
                    </div>
                </main>

            </div>
        </>
    )
}

const WCRTemplate = () => (
    <StylesProvider jss={jss}>
        <WCR />
    </StylesProvider>
)

export default memo(WCRTemplate)

