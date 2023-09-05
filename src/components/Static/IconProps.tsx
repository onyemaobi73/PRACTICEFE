import React from "react"
import styled from "styled-components";

interface Iprops{
    icons:any;
    word:string;
}

const Hero: React.FC<Iprops>= ({icons, word})=>{
    return (
        <div>
        <Icons>
             <Icon>
               {icons}
               </Icon>
               <Word>
                   {word}
               </Word>
             </Icons>
             </div>
    )
}

export default Hero;

const Icons = styled.div`
cursor: pointer;
display: flex;

:hover{
    color: orange;
}
`

const Word = styled.div`
margin: 5px;
`
const Icon = styled.div`
margin: 5px;
`