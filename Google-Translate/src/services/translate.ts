// import { ChatCompletionRequestMessageRoleEnum, Configuration, OpenAIApi } from 'openai'

import OpenAI from 'openai';

import { SUPPORTED_LANGUAGES } from '../constans';
import { FromLenguage, Languages } from '../types.d';

const apiKey=import.meta.env.VITE_OPENAI_APIKEY;

//se crea la configuración de la API con la clave de API proporcionada
// const configuration = new Configuration({apiKey})

//se inicializa la API de OpenAI utilizando la configuración creada anteriormente.
const openai = new OpenAI({apiKey,dangerouslyAllowBrowser: true});

//se define una funcion dependiendo de lo que queramos que vaya a hacer en este caso es una traduccion de texto asi que le pasamos los parametros que necesita la API para traducir el texto fromLanguage es el idioma de origen toLanguage es el idioma al que se quiere traducir y text es lo que queremos traducir.

export async function translate({
    fromLanguage,
    toLanguage,
    text
}: {
    fromLanguage:FromLenguage;
    toLanguage:Languages;
    text:string;
}) {
    if(fromLanguage === toLanguage) return text;
    //ahora debemos de darle el prompt de lo que queremos que haga y el role debe ser 'system'
    const message=[
        {
            role: 'system',
            content:"You are an AI that translates text. you recive a text from the user. do not answer, just translate the text. The original languae is surrounded by `{{`and `}}` you can also recive {{auto}} witch means that you have to detect the language. The language you translate to is surrounded by `[[` and `]]`" 
        },
        //Y le damos ejemplos
        {
            role: 'user',
            content:'Hola mundo {{Español}} [[English]]'
        },
        {
            role: 'assistant',
            content:'Hello world'
        },
        {
            role: 'user',
            content:'How are yout {{auto}} [[Deutsch]]'
        },
        {
            role: 'assistant',
            content:'Wie geht es dir?'
        },
        {
            role: 'user',
            content:'Bon dia, com estas? {{auto}} [[Español]]'
        },
        {
            role: 'assistant',
            content:'Buenos días ¿Cómo estás?'
        }
    ] 

    const fromCode = fromLanguage === 'auto' ? 'auto' : SUPPORTED_LANGUAGES[fromLanguage];
    const toCode = SUPPORTED_LANGUAGES[toLanguage];
    console.log(fromCode);
    console.log(toCode);
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages:[
            ...message,
            {
                role:'user',
                content:`${text} {{${fromCode}}} [[${toCode}]]`
            }
        ]
        
    });
    return completion.choices[0]?.message?.content;
}


