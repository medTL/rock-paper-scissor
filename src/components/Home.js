import React from 'react';
import traingle from "../images/bg-triangle.svg"
import { Choice } from './Choice.style';
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
export default function Home() {
  return (<div className='game-wrapper'>
      <Choice image={rock} left={"-5em"} top={"-5em"} color={"hsl(230, 89%, 65%)"} gradiantColor={"hsl(230, 89%, 62%)"} />
      <Choice image={paper} left={"calc(100% - 5em)"} top={"-5em"} color={"hsl(40, 84%, 53%)"} gradiantColor={"#ce6c23"}  />
      <Choice image={scissors} left={"calc(50% - 5em)"} top={"calc(100% - 5em)"} color={"hsl(349, 70%, 56%)"} gradiantColor={"hsl(349, 71%, 52%)"}  />
     <div className='traingle'>
         <img src={traingle} alt='traingle'/>
         </div> 
  </div>);
}

