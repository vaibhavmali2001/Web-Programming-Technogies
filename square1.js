import { useState } from "react"

export default function Square1()
{
    let[A,setA]=useState(0)
    function calculate(e)
    {
        let num = e.target.value
        let sq = num * num
        setA(sq)

    }
    return(
        <div>
            <input type="number" onBlur={calculate}></input>
            <p>Square={A}</p>
        </div>
    )
}