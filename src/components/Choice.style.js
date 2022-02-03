import styled from "styled-components"


export const Choice = styled.div`
position:absolute;
left:${(props) => props.left};
top:${(props) => props.top};
width:10em;
height:10em;
border-radius: 50%;
background-color:${(props) => props.color};
&:before {
    content:"";
    position:absolute;
    left: calc(50% - 4em);
    top: calc(50% - 4em);
    z-index:2;
    width:8em;
    height:8em;
    border-radius: 50%;
    background-color:#ffffff;
    background-image:url(${(props) => props.image});
    background-repeat: no-repeat;
    background-position: center center;
}
&:after {
    content:"";
    position:absolute;
    opacity:1;
    bottom:-0.3em;
    z-index:-1;
    width:10em;
    height:10em;
    border-radius: 50%;
    background-color:${(props) => props.gradiantColor}
}
`