export function NewGreeting({ text }){
    function handleClick(){
        alert('boooommmmm')
    }
    return (
        <>
         <h1>hello {text}</h1>
         <button onClick={handleClick}>Click Me</button>
        </>
    )
}