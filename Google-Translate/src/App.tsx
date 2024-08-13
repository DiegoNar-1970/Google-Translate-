import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
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
      <h2>Google translator Clone</h2>

      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector 
            type={SectionType.FROM}
            value={fromLanguage}
            onChange={setFromLanguage}/>

            <Form.Control
            as={'textarea'}
            placeholder='introducir texto'
            autoFocus
            style={{height: '150px'}}
            />
        </Stack>
        </Col>
        <Col xs='auto'>
            <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}><FaExchangeAlt /></Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type={SectionType.TO}
              value={toLanguage}
              onChange={setToLanguage}/>
              <Form.Control
            as={'textarea'}
            placeholder='Traduccion'
            
            style={{height: '150px'}}
            />
          </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
