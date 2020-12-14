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

export function makeCancellable(promise) {
    let hasCancelled_ = false

    const wrappedPromise = new Promise((resolve, reject) => {
        promise.then(
            val => hasCancelled_ ? reject({ isCancelled: true }) : resolve(val),
            error => hasCanceled_ ? reject({ isCanceled: true }) : reject(error)
        )
    })

    return {
        promise: wrappedPromise,
        cancel() {
            hasCancelled_ = true;
        },
    }
}

export function copyToClipBoard(text) {
    let textArea = document.createElement('textarea')
    textArea.value = text

    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'

    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    document.execCommand('copy')

    document.body.removeChild(textArea)
}