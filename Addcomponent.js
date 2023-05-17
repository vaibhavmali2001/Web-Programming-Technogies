import react from 'react'

export function Addcomponent(props){
    
           let a = props.num1
            let b = props.num2

            let sum = a + b;
            return(
                <>
                    <p>sum of {a}+{b}={sum}</p> 
                </>
            )
    
}