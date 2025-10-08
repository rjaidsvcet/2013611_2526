import { useEffect, useState } from "react"

const HookCounter = () => {

    const [count, setCount] = useState(0)

    useEffect (() => {
        document.title = `Clicked ${count} times`
    })

    return (
        <>
            <button onClick={()=>{setCount(prev => prev + 1)}}>
                Clicked {count} times using function
            </button>
        </>
    )
}

export default HookCounter