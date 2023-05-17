import {useState} from 'react'
export default function Change()
    {
        let[text,setText]=useState("")
        let[ans1,setAns1]=useState("")
        let[ans2,setAns2]=useState("")
        let[ans3,setAns3]=useState("")
    
    function handler1(e)
    {
        setText(e.target.value)
        console.log(text)

    }

    function handler2(e)
    {
        let option = e.target.value
        
        if(option=="Uppercase")
        {
            let ans1 = text.toUpperCase()
            setAns1(ans1)
            console.log(ans1)
        }
        if(option=="Lowercase")
        {
            let ans2=text.toLowerCase()
            setAns2(ans2)
            console.log(ans2)
        }
        if(option=="Titlecase")
        {
            let ans3 =text.slice(0,1).toUpperCase().concat(text.slice(1).toLowerCase())
            setAns3(ans3)
            console.log(ans3)
        }
    }
    return(
        <div style={{textAlign:"center",backgroundColor:"greenyellow"}}>
            <input type="text" onBlur={handler1}/>
            <br></br>
            Uppercase: <input type="radio" name="click" value="Uppercase" onChange={handler2}/>
            Lowercase: <input type="radio" name="click" value="Lowercase" onChange={handler2}/>
            Titlecase: <input type="radio" name="click" value="Titlecase" onChange={handler2}/>

            <p>Uppercase={ans1}</p>
            <br></br>
            <p>Lowercase={ans2}</p>
            <br></br>
            <p>Titlecase={ans3}</p>
        </div>
    )
}