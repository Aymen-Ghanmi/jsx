import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Xcard = () => {
  return (
    
        
        <div style={{display:'flex', justifyContent:'center' }}>
 <Card style={{ width: '18rem'}}>
      <Card.Img  variant="top" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
    </div>
    
     
  )
}

export default Xcard