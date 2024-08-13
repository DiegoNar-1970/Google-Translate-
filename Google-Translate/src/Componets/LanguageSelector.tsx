import { Form } from 'react-bootstrap';
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constans';
import { FromLenguage, Languages, SectionType } from '../types.d';

// interface Props {
//   onChange: (language: string) => void;
// }

type Props = 
//el onchange es una funcion que recibe un valor de tipo fromlenguage y no devuelve nada
//por lo que por eso en la funcion onchange el value le decimos que sea as Languages
  |{type:SectionType.FROM, value:FromLenguage, onChange: (language: FromLenguage) => void}
  |{type:SectionType.TO , value:Languages, onChange: (language: Languages) => void}


export const LanguageSelector=({onChange,type,value} :Props )=> {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    onChange(event.target.value as Languages);
  };
  //hay que ponerle un tipo al event ya que si no ts llora

  return (
    <Form.Select aria-label="selecciona el idioma" onChange={handleChange} value={value}>

      {type===SectionType.FROM && <option value={AUTO_LANGUAGE}> Detectar idioma</option>}

      {Object.entries(SUPPORTED_LANGUAGES).map(([key,value])=>(
        <option key={key} value={key} >
          {value}
        </option>
      ))}
    </Form.Select>
  );
}

export default LanguageSelector;