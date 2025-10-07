import { useState } from "react"

function PrevState() {

    const initialValue = 0
    const [count, setCount] = useState (initialValue)

    // const fiveTimes = () => {
    //     for (let i=0; i<5; i++) {
    //         setCount (count + 1)
    //     }
    // }

    // const fiveTimes = () => {
    //     setCount (count + 1)
    //     setCount (count + 1)
    //     setCount (count + 1)
    //     setCount (count + 1)
    //     setCount (count + 1)
    // }

    // const fiveTimes = () => {
    //     for (let i=0; i<5; i++) {
    //         setCount(prev => prev + 1)
    //     }
    // }

    const fiveTimes = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <div>
            Count : {count}
            <button onClick={()=>setCount(count+1)}>
                Increment
            </button>
            <button onClick={()=>setCount(count-1)}>
                Decrement
            </button>
            <button onClick={fiveTimes}>
                Five Increments
            </button>
        </div>
    )
}

export default PrevState