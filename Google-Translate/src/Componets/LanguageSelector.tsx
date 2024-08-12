import { Form } from 'react-bootstrap';
import { SUPPORTED_LANGUAGES } from '../constans';
import { FromLenguage, Languages } from '../types.d';

// interface Props {
//   onChange: (language: string) => void;
// }

type Props = 
  |{type:'from', value:FromLenguage, onChange: (language: FromLenguage) => void}
  |{type:'to', value:Languages, onChange: (language: Languages) => void}


export const LanguageSelector=({onChange} :Props )=> {

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as Languages);
  };
  //hay que ponerle un tipo al event ya que si no ts llora

  return (
    <Form.Select aria-label="selecciona el idioma" onChange={handleChange}>
      {Object.entries(SUPPORTED_LANGUAGES).map(([key,value])=>(
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </Form.Select>
  );
}

export default LanguageSelector;