import { useState } from "react"

export function NewLikes(){
    const [likes, setLikes] = useState(0)

    const handleClick = () => {
        setLikes(likes + 1)
    }

    return (
        <>
         <button onClick={handleClick}>Likes: {likes}</button>
        </>
    )
}