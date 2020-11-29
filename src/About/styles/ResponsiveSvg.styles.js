import { makeStyles } from '@material-ui/core/styles'
import { getPercentString } from 'Utilities/Functions'

const boxCornerRadius = '1.3%'

const pageMarginRight = 0.05
const pageMarginLeft = 0.05

const navBarHeight = 0.15
const navItemHeight = 0.1
const navItemWidth = 0.1
const navItemRightMargin = 0.05
const navItemSpacing = 0.05

const longRectWidth = 1 - pageMarginLeft - pageMarginRight
const longRectTopMargin = 0.05
const longRectHeight = 0.1

const userIconWidth = 0.18
const userIconHeight = 0.18

const row2TopMargin = 0.08
const row2BoxHeight = 0.1
const row2BoxSpacing = 0.05
const row2BoxCount = 4
const row2BoxWidth = (1 - pageMarginLeft - pageMarginRight - (row2BoxSpacing * (row2BoxCount - 1))) / row2BoxCount

const row3TopMargin = 0.05
const row3Col1RightMargin = 0.05
const row3BottomMargin = 0.05
const row3YPosition = navBarHeight + longRectTopMargin + longRectHeight + row2TopMargin + row2BoxHeight + row3TopMargin
const row3Height = 1 - (row3YPosition + row3BottomMargin)

const row3Col2BoxSpacing = 0.05
const row3Col2BoxCount = 3
const row3Col2BoxHeight = (row3Height - (row3Col2BoxSpacing * (row3Col2BoxCount - 1))) / 3
const row3Col2LeftMargin = 0
const row3Col2Width = 0.5 - pageMarginRight - row3Col2LeftMargin
const row3Col2XPosition = 0.5 + row3Col2LeftMargin

const tablet = {
    row2: {
        topMargin: 0.1,
        bottomMargin:0.05,
        get yPosition() { return navBarHeight + longRectTopMargin + longRectHeight + this.topMargin },
        width:1-pageMarginLeft-pageMarginRight,
        get col1Width(){return 0.4 * this.width},
        get col2Width(){return 0.6 * this.width},

        get col1() {
            if (this._col1) {
                return this._col1
            }

            const bottomMargin=0.05
            const width=this.col1Width
            const rightMargin=0.05
            const boxWidth=width - rightMargin
            const height=1-this.yPosition-bottomMargin
            const boxCount=2
            const boxSpacingY=0.1
            const boxHeight=(height-(boxSpacingY * (boxCount - 1)))/boxCount

            return this._col1 = {
                boxHeight,
                boxSpacingY,
                boxWidth,
            }
        },

        get col2(){
            if(this._col2){
                return this._col2
            }

            const bottomMargin=0.05
            const width=this.col2Width
            const leftMargin=0.05
            const boxXPosition=1 - (width+pageMarginRight-leftMargin)
            const boxWidth=width - leftMargin
            const boxSpacingY=0.04
            const boxCount=4
            const height =1-this.yPosition-bottomMargin
            const boxHeight=(height-this.col1.boxSpacingY-(boxSpacingY * (boxCount - 2)))/boxCount

            return this._col2= {
                boxXPosition,
                boxWidth,
                boxHeight,
                boxSpacingY,   
            }
        },

        get colSeparator(){
            if(this._colSeparator){
                return this._colSeparator
            }
            const width=0.01
            const x=this.col1Width+pageMarginLeft-(width/2)
            const y=this.yPosition
            const height=1-y-this.bottomMargin

            return this._colSeparator={
                width,
                height,
                x,
                y
            }
        }
    }
}

const useStyles = makeStyles(theme => ({
    mainContainer: {
        width: '100%',
        height: '100%',
    },

    navBar: {
        width: '100%',
        height: getPercentString(navBarHeight),
        fill: theme.palette.primary.light
    },

    navBarItem: {
        width: getPercentString(navItemWidth),
        height: getPercentString(navItemHeight),
        y: getPercentString((navBarHeight - navItemHeight) / 2),
        rx: boxCornerRadius,
    },

    navItem1: {
        fill: 'orange',
        x: getPercentString(1 - (navItemRightMargin + navItemWidth))
    },

    navItem2: {
        fill: 'yellow',
        x: getPercentString(1 - (navItemRightMargin + navItemSpacing + navItemWidth * 2))
    },

    navItem3: {
        fill: 'red',
        x: getPercentString(1 - (navItemRightMargin + navItemSpacing * 2 + navItemWidth * 3))
    },

    longRect: {
        height: getPercentString(longRectHeight),
        width: `${longRectWidth * 100}%`,
        x: `${((1 - longRectWidth) / 2) * 100}%`,
        y: getPercentString(navBarHeight + longRectTopMargin),
        fill: theme.palette.secondary.light,
        rx: boxCornerRadius
    },

    userIcon: {
        width: getPercentString(userIconWidth),
        height: getPercentString(userIconHeight),
        x: getPercentString(0.5 - (userIconWidth / 2)),
        y: getPercentString((navBarHeight + longRectTopMargin + (longRectHeight / 2)) - (userIconHeight / 2))
    },

    row2Box: {
        rx: boxCornerRadius,
        y: getPercentString(navBarHeight + longRectTopMargin + longRectHeight + row2TopMargin),
        width: `${row2BoxWidth * 100}%`,
        height: getPercentString(row2BoxHeight),
    },

    row2Box1: {
        fill: 'red',
        x: getPercentString(pageMarginLeft)
    },

    row2Box2: {
        fill: 'blue',
        x: getPercentString(pageMarginLeft + row2BoxWidth + row2BoxSpacing)
    },

    row2Box3: {
        fill: 'green',
        x: getPercentString(pageMarginLeft + (row2BoxWidth * 2) + (row2BoxSpacing * 2))
    },

    row2Box4: {
        fill: 'purple',
        x: getPercentString(pageMarginLeft + (row2BoxWidth * 3) + (row2BoxSpacing * 3))
    },

    row3Col1Box: {
        rx: boxCornerRadius,
        fill: theme.palette.primary.dark,
        width: getPercentString(0.5 - pageMarginRight - row3Col1RightMargin),
        height: getPercentString(1 - (navBarHeight + longRectTopMargin +
            longRectHeight + row2TopMargin + row2BoxHeight + row3TopMargin + row3BottomMargin)),
        x: getPercentString(pageMarginLeft),
        y: getPercentString(navBarHeight + longRectTopMargin + longRectHeight + row2TopMargin + row2BoxHeight + row3TopMargin),
    },

    row3Col2Box: {
        rx: boxCornerRadius,
        height: getPercentString(row3Col2BoxHeight),
        x: getPercentString(row3Col2XPosition)
    },

    row3Col2Box1: {
        width: getPercentString(row3Col2Width),
        fill: theme.palette.secondary.main,
        y: getPercentString(row3YPosition)
    },

    row3Col2Box2: {
        width: getPercentString(row3Col2Width - 0.2),
        fill: theme.palette.primary.dark,
        y: getPercentString(row3YPosition + row3Col2BoxHeight + row3Col2BoxSpacing)
    },

    row3Col2Box3: {
        width: getPercentString(row3Col2Width - 0.1),
        fill: theme.misc.colors.analogous.second,
        y: getPercentString(row3YPosition + row3Col2BoxHeight * 2 + row3Col2BoxSpacing * 2)
    },

    computerElements: {
        opacity: 1
    },

    tablet: {
        opacity:0,
        '&.row2Col1Box': {
            x: getPercentString(pageMarginLeft),
            width: getPercentString(tablet.row2.col1.boxWidth),
            height: getPercentString(tablet.row2.col1.boxHeight),
            rx: boxCornerRadius,
        },

        '& .row2Col1Box1': {
            fill: 'blue',
            y: getPercentString(tablet.row2.yPosition)
        },

        '& .row2Col1Box2': {
            fill: 'red',
            y: getPercentString(tablet.row2.yPosition + tablet.row2.col1.boxHeight + tablet.row2.col1.boxSpacingY),
        },

        '& .row2ColSeparator':{
            x:getPercentString(tablet.row2.colSeparator.x),
            y:getPercentString(tablet.row2.colSeparator.y),
            width:getPercentString(tablet.row2.colSeparator.width),
            height:getPercentString(tablet.row2.colSeparator.height),
        },

        '&.row2Col2Box':{
            rx:boxCornerRadius,
            height:getPercentString(tablet.row2.col2.boxHeight),
        },

        '& .row2Col2Box1':{
            x:getPercentString(tablet.row2.col2.boxXPosition),
            y:getPercentString(tablet.row2.yPosition),
            fill:'purple',
            width:getPercentString(tablet.row2.col2.boxWidth * 0.4),
            rx:boxCornerRadius,
            height:getPercentString(tablet.row2.col2.boxHeight),
        },

        '& .row2Col2Box2':{
            x:getPercentString(tablet.row2.col2.boxXPosition + tablet.row2.col2.boxWidth*0.4 + 0.02),
            y:getPercentString(tablet.row2.yPosition),
            fill:'green',
            width:getPercentString(tablet.row2.col2.boxWidth * 0.58),
            rx:boxCornerRadius,
            height:getPercentString(tablet.row2.col2.boxHeight),
        },

        '& .row2Col2Box3':{
            x:getPercentString(tablet.row2.col2.boxXPosition),
            y:getPercentString(tablet.row2.yPosition +tablet.row2.col2.boxHeight+ tablet.row2.col2.boxSpacingY),
            fill:'cyan',
            width:getPercentString(tablet.row2.col2.boxWidth),
            rx:boxCornerRadius,
            height:getPercentString(tablet.row2.col2.boxHeight),
        },

        '& .row2Col2Box4':{
            x:getPercentString(tablet.row2.col2.boxXPosition),
            y:getPercentString(tablet.row2.yPosition+tablet.row2.col1.boxSpacingY +
                tablet.row2.col2.boxHeight*2+ tablet.row2.col2.boxSpacingY),
            fill:'maroon',
            width:getPercentString(tablet.row2.col2.boxWidth * 0.8),
            rx:boxCornerRadius,
            height:getPercentString(tablet.row2.col2.boxHeight),
        },

        '& .row2Col2Box5':{
            x:getPercentString(tablet.row2.col2.boxXPosition),
            y:getPercentString(tablet.row2.yPosition+tablet.row2.col1.boxSpacingY +
                tablet.row2.col2.boxHeight*3+ tablet.row2.col2.boxSpacingY*2),
            fill:'olive',
            width:getPercentString(tablet.row2.col2.boxWidth * 0.3),
            rx:boxCornerRadius,
            height:getPercentString(tablet.row2.col2.boxHeight),
        },

        '& .row2Col2Box6':{
            x:getPercentString(tablet.row2.col2.boxXPosition+tablet.row2.col2.boxWidth*0.3+0.02),
            y:getPercentString(tablet.row2.yPosition+tablet.row2.col1.boxSpacingY +
                tablet.row2.col2.boxHeight*3+ tablet.row2.col2.boxSpacingY*2),
            fill:'seagreen',
            width:getPercentString(tablet.row2.col2.boxWidth * 0.68),
            rx:boxCornerRadius,
            height:getPercentString(tablet.row2.col2.boxHeight),
        },
    }
}))

export default useStyles