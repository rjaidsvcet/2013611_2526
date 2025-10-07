import { useState } from "react"

const ObjectsUseState = () => {
    
    const [name, setName] = useState ({
        firstname : '',
        lastname : ''
    })
    
    // Always use the spread operator to retain the state.

    return (
        <>
            <input 
                type="text"
                value={name.firstname}
                onChange={e => setName({...name, firstname : e.target.value})}
            />

            <input 
                type="text"
                value={name.lastname}
                onChange={e => setName({...name, lastname : e.target.value})}
            />
            <h3>Firstname is {name.firstname}</h3>
            <h3>Lastname is {name.lastname}</h3>
            <h3>{JSON.stringify(name)}</h3>
        </>
    )
}

export default ObjectsUseState