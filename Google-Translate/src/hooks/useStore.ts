
import { useReducer } from 'react';
import { AUTO_LANGUAGE } from '../constans';

import { FromLenguage, Languages, type Action, type State } from '../types.d';
//Por que se importa solo el type? para que no traiga todo el archivo con su contenido?

const initialState: State = {
    fromLanguage: 'auto',
    toLanguage: 'en',
    fromText: '',
    result: '',
    loading:false
  };
  
  function reducer(state: State, action:Action): State{
    const {type}=action;
    console.log(action);
    if(type ==='INTERCHANGE_LANGUAGES'){

      if(state.fromLanguage === AUTO_LANGUAGE) return state; 

      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage,
      }};
  
    if(type ==='SET_FROM_LANGUAGE'){
      return{
        ...state,
        fromLanguage: action.payload,
      }};
  
    if(type ==='SET_TO_LANGUAGE'){
      return{
        ...state,
        toLanguage: action.payload,
      }};
    
      if(type ==='SET_FROM_TEXT'){
        if(!action.payload ) return{...state,fromText:'',loading:false};
        return{
          ...state,
          loading:true,
          fromText: action.payload,
          result:''
        }};
  
      if(type ==='SET_RESULT'){
        return{
          ...state,
          loading:false,
          result: action.payload,
        }};
  
    return state;
  }
  
export function useStore(){
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
      }, dispatch] = useReducer(reducer, initialState);
      const interchangeLanguages=()=>{
        dispatch({type:'INTERCHANGE_LANGUAGES'});
      };
      const setFromLanguage=(payload:FromLenguage)=>{
        dispatch({type:'SET_FROM_LANGUAGE', payload});
      };
      const setToLanguage=(payload:Languages)=>{
        dispatch({type:'SET_TO_LANGUAGE',payload});
      };
      const setFromText=(payload:string)=>{
        dispatch({type:'SET_FROM_TEXT',payload});
      };
      const setResult=(payload:string)=>{
        dispatch({type:'SET_RESULT',payload});
      };

      return{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        interchangeLanguages,
        setFromLanguage,
        setToLanguage,
        setFromText,
        setResult,
        
      }
}