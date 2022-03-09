import React from 'react'
import {Container,Row,Col,Nav} from 'react-bootstrap'
// import SearchPage from './searc';    
function Navi (props){
    return (
    //   
    <div>

    <Container>
    
    <ul class="nav justify-content-end pt-5">
  <li class="nav-item ">
    <a class="nav-link active text-black px-5" aria-current="page" href="#">Courses</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-black px-5" href="#">Studies</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-black px-5" href="#">Puzzles</a>
  </li>
  <form class="d-flex px-5">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-dark" type="submit">Search</button>
    </form>
  <li class="nav-item">
    <a class="nav-link text-black px-5" href="#">Mwangi <img alt='' src= {props.image} className="" height={30} width={30} /></a>
  </li>
  
</ul>
    
    </Container>
    
    </div>
    )
}

export default Navi;