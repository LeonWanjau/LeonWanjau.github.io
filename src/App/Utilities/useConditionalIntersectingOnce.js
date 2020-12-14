import { useState, useEffect } from 'react'

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

export default useConditionalIntersectingOnce