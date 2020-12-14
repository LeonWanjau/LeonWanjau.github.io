import useStyles from './styles/index.styles'
import {memo} from 'react'
import ProjectItem from './ProjectItem'
import WCRImage from 'Assets/images/CoffeeSnip.jpg'
import InkImage from 'Assets/images/InkSnip.jpg'
import SectionTitle from 'SharedComponents/SectionTitle'

const Projects = () => {
    const classes = useStyles()

    const projectItems = [
        {
            title: 'Wombat Coffee Roasters',
            image: WCRImage,
            description: 'A coffee shop website',
            link:'/WombatCoffeeRoasters'
        },
        {
            title: 'Ink',
            image: InkImage,
            description: 'A team sharing website',
            link:'/Ink'
        },
    ]
    return (
        <>
        <SectionTitle text='Projects' id='projects' />
        
        <div className={classes.container}>
            {
                projectItems.map((item, index) => (
                    <ProjectItem key={index} {...item} />
                ))
            }
        </div>
        </>
    )
}

export default memo(Projects)