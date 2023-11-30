import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';


const Topscreen = () => {
   const cliq = (cliqaa) => {
        const body = document.querySelector('body')
        if (body.style.backgroundColor != "black"){
           body.style.backgroundColor = "black"
        }
        else {body.style.backgroundColor = "White" }
    }
  return (
    <div>
            <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
{/* *************************nightmode************************* */}
          <>
<label style={{marginRight:"20px"}}  class="ui-switch">
<input id='cli' type="checkbox" onClick={cliq}/>
<div class="slider">
<div class="circle"></div>
  </div>
</label>
</>
{/* ************************navbar****************************** */}
          <Navbar.Brand href="#home">AYMEN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
       
      
    </div>
  )
}

export default Topscreen