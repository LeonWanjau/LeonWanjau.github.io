import { useState, useEffect } from 'react'

const useIsIntersectingOnce = (options, elementRef) => {
    const [isIntersecting, setIsIntersecting] = useState(false)

    useEffect(() => {
        let observer 

        const callback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true)
                    //observer.disconnect()
                }
            })
        }
    
        observer = new IntersectionObserver(callback, options)

        observer.observe(elementRef.current)

        return () => {
            observer.unobserve(elementRef.current)
        }
    }, [])

    return isIntersecting
}

export default useIsIntersectingOnce