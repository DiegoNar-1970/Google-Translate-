import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'

interface Props{
    type:SectionType
    loading?:boolean
    onChange:(value : string) => void
    value:string
}

const commonStyles={border:0,height:'200px',resize:'none'}

const getPlaceholder=({type, loading }: {type: SectionType, loading?: boolean})=>{
    if(type==SectionType.FROM) return 'Introducir texto'
    if(loading== true) return 'Cargando...'
    return 'Traduccíon'
}

export const TextArea=(({type,loading,value,onChange}:Props)=>{

    const handleChange=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        onChange(event.target.value)
    }

    const styles=type==SectionType.FROM
    ? commonStyles
    : {...commonStyles,backgroundColor:'#f5f5f5'}

    return(
        <Form.Control
        autoFocus={type==SectionType.FROM}
        as="textarea" //que elemento quiero renderizar 
        placeholder={getPlaceholder({type,loading})}
        style={styles}
        value={value}
        onChange={handleChange}

        />

        
    )
})