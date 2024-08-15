import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { FaExchangeAlt } from "react-icons/fa";
import './App.css';
import LanguageSelector from './Componets/LanguageSelector';
import { TextArea } from './Componets/TextArea';
import { AUTO_LANGUAGE } from './constans';
import { useStore } from './hooks/useStore';
import { translate } from './services/translate.ts';
import { SectionType } from './types.d';

function App() {
const {
   loading,
   fromLanguage,
   setFromLanguage,
   setToLanguage,
   interchangeLanguages,
   toLanguage,
   result,
   setResult,
   fromText,
   setFromText
  } = useStore()

   useEffect (() => {
    if(fromText==='') return;
    translate({fromLanguage,toLanguage,text: fromText}).
    then(result=>{
      console.log('entro en result',result)
      //en ts == null compara también si es undefined, si solo ponemos === compararia solo el null y ni el undefined
      if(result == null) return;
      setResult(result);
    })
    .catch((err)=>{
      setResult(err);
    })
   }, [])

  return (
    <Container fluid>
      <h2>Google translator Clone</h2>

      <Row>
        <Col>
        <Stack gap={2}>
          <LanguageSelector 
            type={SectionType.FROM}
            value={fromLanguage}
            onChange={setFromLanguage}
            />

            <TextArea
              type={SectionType.FROM}
              value={fromText}
              onChange={setFromText}
              loading={loading}
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
            <TextArea
              loading={loading}
              type={SectionType.TO}
              value={result}
              
              onChange={setResult}/>
              
              
          </Stack>
        </Col>
      </Row>

    </Container>
  )
}

export default App
