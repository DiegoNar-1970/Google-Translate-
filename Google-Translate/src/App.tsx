import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaExchangeAlt } from "react-icons/fa";
import './App.css';
import LanguageSelector from './Componets/LanguageSelector';
import { AUTO_LANGUAGE } from './constans';
import { useStore } from './hooks/useStore';
import { SectionType } from './types.d';

function App() {
const {fromLanguage, setFromLanguage,setToLanguage,interchangeLanguages,toLanguage} = useStore()

  return (
    <Container fluid>
      <h1>Google translator Clone</h1>

      <Row>
        <Col>
          <LanguageSelector 
           type={SectionType.FROM}
           value={fromLanguage}
           onChange={setFromLanguage}/>
           {fromLanguage}
        </Col>
        <Col>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><FaExchangeAlt /></Button>
        </Col>
        <Col>
          <LanguageSelector 
            type={SectionType.TO}
            value={toLanguage}
            onChange={setToLanguage}/>
            {toLanguage}
          </Col>
      </Row>

    </Container>
  )
}

export default App
