import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constans";

export type Languages = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLenguage = typeof AUTO_LANGUAGE;
export type FromLenguage = Languages | AutoLenguage;

export interface State  {
    fromLanguage: FromLenguage,
    toLanguage: Languages,
    fromText: string,
    result: string,
    loading:boolean
};
//no necesariamente se tiene que llamar state pero como casi no habra de estos usaremos state para nombrarlo asi sin embarcar hay que buscar otros nombres

//normalmente cuando se quiere inscribir el contrato de un objeto se usa la palabra reservada interface porque es mas facil de extender 
export type Action=

|{type:'SET_FROM_LANGUAGE',payload:FromLenguage}
|{type:'INTERCHANGE_LANGUAGES'}
|{type:'SET_TO_LANGUAGE',payload:Languages}
|{type:'SET_FROM_TEXT',payload:string}
|{type:'SET_RESULT',payload:string}

//como en interchangue no usamos el payload porque no se envia informacion adicional no hay necesidad de usar el payload, y estto hace que donde se vaya a consumir este contrato obligue a no poder usar el paiload 

