import React from 'react'
import Animate from 'react-animate.css';

import 'animate.css/animate.css';

function Todo() {
  return (
  
<Animate
    enter="bounceIn" // on Enter animation
    leave="bounceOut" // on Leave animation
    appear="fadeInRight" // on element Appear animation (onMount)
    change="flipInX" // on element Change animation (onUpdate)
    durationAppear={1000}
    durationEnter={1000}
    durationLeave={1000}
    durationChange={1000}
    animate={true} // turn off/on animation, true by default
    animateChangeIf={true} // turn off/on Change only animation, true by default
    component="ul">
 
    {this.state.items.map(item => <li key={item.id}>{item.name}</li>)}
 
</Animate>
  )
}

export default Todo