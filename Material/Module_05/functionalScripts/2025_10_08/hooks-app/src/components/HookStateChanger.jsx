import { useEffect, useState } from "react"

const HookStateChanger = () => {
    
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect (() => {
        console.log('Input value is triggered')
        document.title = `Clicked ${count} times`
    }, [count])
    
    return (
        <>
            <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={()=>setCount(prev => prev + 1)}>
                Clicked {count} times
            </button>
        </>
    )
}

export default HookStateChanger