import useStyles from './styles/index.styles'
import { useState, useRef, useEffect ,memo} from 'react'
import Selector from './Selector'

import HtmlSvg from 'Assets/images/languages/html-svg.svg'
import CssSvg from 'Assets/images/languages/css-svg.svg'
import LaravelSvg from 'Assets/images/languages/laravel-svg.svg'
import PhpSvg from 'Assets/images/languages/php.svg'
import MySqlSvg from 'Assets/images/languages/mysql.svg'
import PostGresSvg from 'Assets/images/languages/postgres.svg'

const Languages = () => {
    const classes = useStyles()

    const items = [
        {
            title: 'Languages',
            images: [
                { title: 'HTML', url: HtmlSvg },
                { title: 'CSS', url: CssSvg },
            ]
        },
        {
            title: 'Frameworks and Tools',
            images: [
                { title: 'Laravel', url: LaravelSvg },
                { title: 'PHP', url: PhpSvg }
            ]
        },
        {
            title: 'Databases',
            images: [
                { title: 'MySql', url: MySqlSvg },
                { title: 'PostGres', url: PostGresSvg }
            ]
        }
    ]

    return (
        <div className={classes.mainContainer}>
            {
                items.map((item, index) => (
                    <Selector key={index} title={item.title} images={item.images} />
                ))
            }
        </div>
    )
}

export default memo(Languages)