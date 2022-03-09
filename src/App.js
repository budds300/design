import './App.css';
import Cards from './components/card';
import { Container,Col,Row } from 'react-bootstrap';
import Navi from './components/nav';



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Navi image="./images/172626_user_male_icon.png"/>
      <Container>
      <h2 className='text-start pt-5'>Enrolled Courses</h2>
      <Row className='pt-3'>
        <Col md={4}>
      <Cards image="/images/chess-g14c3596fc_1920.jpg"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
        <Col md={4}>
      <Cards image="/images/chess.png"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
        <Col md={4}>
      <Cards image="/images/chess.png"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
      </Row>
      <Row className='pt-4'>
        <Col md={4}>
      <Cards image="/images/chess-g14c3596fc_1920.jpg"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
        <Col md={4}>
      <Cards image="/images/chess.png"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
        <Col md={4}>
      <Cards image="/images/chess.png"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
      </Row>
      <Row className='pt-4'>
        <Col md={4}>
      <Cards image="/images/chess-g14c3596fc_1920.jpg"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
        <Col md={4}>
      <Cards image="/images/chess.png"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
        <Col md={4}>
      <Cards image="/images/chess.png"  title="Thinking in chess: A how to guide" content="A motive involvin a high value piece being attacked,moving out the way, and allowing a lower value piece to..." />
       </Col>
      </Row>
      
      </Container>
          </div>
  );
}

export default App;
