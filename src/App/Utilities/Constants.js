//webgl background
export const webGLSceneBackground='#f0f0f0'
//large clipper height
export const largeClipperHeight='30vh'
//small clipper height
export const smallClipperHeight='15vh'
//fonts
export const fonts={
    body:'Roboto',
    title:'Alegreya',
}
//app bar height
export const appBarHeight='10vh'
//observedFonts
/*
const observedFonts={
    [fonts.body]:{weight:400},
    [fonts.body]:{weight:800},
    //[fonts.title]:{weight:400},
    [fonts.title]:{weight:800}
}
import FontFaceObserver from 'fontfaceobserver'
let fontObservers=[]
Object.keys(observedFonts).forEach((family)=>{
    let data=observedFonts[family]
    let observer=new FontFaceObserver(family,data)
    fontObservers.push(observer.load())
})
export const fontsPromise=Promise.all(fontObservers)
*/

//svg id names
export const svgIds={
    deviceBorder:'deviceBorder',
    deviceScreen:'deviceScreen',
    deviceScreenBackground:'deviceScreenBackground',
    bottomComputerPanel:'bottomComputerPanel',
    computerStand:'computerStand',
    computerPowerButton:'computerPowerButton',
    mobilePowerButton:'mobilePowerButton',
    contentBox:'contentBox',
    screenClip:'screenClip',
    navBar:'navBar',
    navBarItem:'navBarItem',
}

//svg device dimensions
export const deviceDimensions={
    borderWidth:'100%',
    borderHeight:'70%',
    borderSpacingX:'5%',
    borderSpacingY:'5%',
    get screenWidth(){return `calc(${this.borderWidth} - (${this.borderSpacingX} * 2))`},
    get screenHeight(){return `calc(${this.borderHeight} - (${this.borderSpacingY} * 2))`},
}