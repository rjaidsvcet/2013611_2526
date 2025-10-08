import { useEffect, useState } from "react"

function FunctionalMouse() {
    const [x, setX] = useState (0)
    const [y, setY] = useState (0)

    const logMousePosition = e => {
        console.log('Mouse Specific Event')
        setX (e.clientX)
        setY (e.clientY)
    }

    // useEffect (() => {
    //     console.log('useEffect Called')
    //     window.addEventListener('mousemove', logMousePosition)
    // }, [])

    useEffect (() => {
        console.log('useEffect Called')
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log('useEffect cleanup activated')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
        <div>
            <h1>
                X - {x}
                Y - {y}
            </h1>
        </div>
    )
}

export default FunctionalMouse