import { useState } from "react"

const HookCounter = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <button onClick={()=>setCount(count + 1)}>
                Count {count}
            </button>
        </>
    )
}

export default HookCounter