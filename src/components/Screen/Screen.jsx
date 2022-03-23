import React from 'react'
import "./Screen.css"
function Screen({children}) {
  return (
    <div className='screen-container'>{children}</div>
  )
}

export default Screen