export const getPercentString = (num) => `${num * 100}%`

export function cutBottomLeftAndTopRight(paddingTops, paddingSides, clipWidth, useSidePadding = false) {
    if (useSidePadding) {
        return `polygon(
            0 0, 
        0 calc(100% - ${paddingTops}), 
        ${paddingSides} 100%,
        100% 100%,
        100% ${paddingTops},
        calc(100% - ${paddingSides}) 0
        )`
    }

    return `polygon(
        0 0, 
    0 calc(100% - ${paddingTops}), 
    ${clipWidth} 100%,
    100% 100%,
    100% ${paddingTops},
    calc(100% - ${clipWidth}) 0
    )`
}

export function cutBottomRightAndTopLeft(paddingTops, paddingSides, clipWidth, useSidePadding = false) {
    if (useSidePadding) {
        return `polygon(
        0 ${paddingTops}, 
        0 100%, 
        calc(100% - ${paddingSides}) 100%,
        100% calc(100% - ${paddingTops}),
        100% 0,
        ${paddingSides} 0
        )`
    }

    return `polygon(
        0 ${paddingTops}, 
        0 100%, 
        calc(100% - ${clipWidth}) 100%,
        100% calc(100% - ${paddingTops}),
        100% 0,
        ${clipWidth} 0
        )`
}