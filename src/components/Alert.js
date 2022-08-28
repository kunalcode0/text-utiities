import React from 'react'

function Alert(props) {
  return (
    <div style={{height: '3.5rem'}}>
  {props.alert &&  <div className="alert">
  <strong><h2>Sucess</h2> {props.alert.msg}</strong> 

    </div>}
    </div>

    
  )
}

export default Alert
