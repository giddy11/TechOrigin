import { useState } from "react"

export function NewControlledInput(){
    const [value, setValue] = useState('Gideon')

    return (
        <>
         <input 
            value={value} 
            onChange={(e)=> setValue(e.value)}/>
        </>
    )
}