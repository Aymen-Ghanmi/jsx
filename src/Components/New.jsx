import React from 'react'
import { Button } from 'react-bootstrap'

const New = () => {
  return (
    <div style={{display:"flex",justifyContent:"center", marginTop:"100px",marginBottom:"160px" }}>
        <Button  style={{marginRight:"10px", width:"120px"}} variant="dark">Start</Button>
        <Button style={{ width:"120px"}} variant="outline-dark">Login</Button>
    </div>
  )
}

export default New