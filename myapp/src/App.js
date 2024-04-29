import {useEffect, useState} from "react";
import './App.css'
import { NewGreeting } from "./Greeting";
import { NewLikes } from "./Likes";
import { NewControlledInput } from "./ControlledInput";

const App=()=> {
    return (
      <>
        <NewGreeting text={'Gideon'}/>
        <NewLikes />
        <NewControlledInput />
      </>
    )
}

export default App;