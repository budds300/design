import React from 'react'
import {Container,Row,Col,Nav} from 'react-bootstrap'
// import SearchPage from './searc';    
function Navi (props){
    return (
    //   
    <div>

    <Container>
    <div className='d-flex' >

   
    <ul class="nav justify-content-end pt-5 ">
  <li class="nav-item">
    <a class="nav-link text-black pe-5" href="#">logo <img alt='' src= {props.image} className="" height={30} width={30} /></a>
  </li>
  </ul>
    <ul class="nav justify-content-center pt-5 ">
 
  <li class="nav-item ">
    <a class="nav-link active text-black px-5" aria-current="page" href="#">Courses</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-black px-3" href="#">Studies</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-black px-3" href="#">Puzzles</a>
  </li>
  <form class="d-flex px-3">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-light" type="submit">Search</button>
    </form>
  <li class="nav-item">
    <a class="nav-link text-black px-3" href="#">Mwangi <img alt='' src= {props.image} className="" height={30} width={30} /></a>
  </li>
</ul>
    </div>
    
    </Container>
    
    </div>
    )
}

export default Navi;