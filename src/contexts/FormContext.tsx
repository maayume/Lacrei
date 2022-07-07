import { createContext, ReactNode, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    profissao: string;
    CRP: string;
    registro: string;
}

type Action = {
    type: FormActions;
    payLoad: any;
}

type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}

type FormProviderProps = {
    children: ReactNode;
}

const initialData = {
    currentStep: 0,
    profissao: '',
    CRP: '',
    registro: '',
}

const FormContext = createContext <ContextType | undefined > (undefined);

export enum FormActions{
    setCurrentStep,
    setProfissao,
    setCRP,
    setRegistro,
}
const FormReducer = (state: State, action: Action) => {
    switch(action.type){
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payLoad};
        case FormActions.setProfissao:
            return {...state, Profissao: action.payLoad};
        case FormActions.setCRP:
            return {...state, CRP: action.payLoad};
        case FormActions.setRegistro:
            return {...state, Registro: action.payLoad};
        default:
            return state;
    }
}

export const FormProvider = ({ children } : FormProviderProps) => {
const [state, dispatch] = useReducer(FormReducer, initialData);
const value = { state, dispatch };
    return(
        <FormContext.Provider value={ value }>
            {children}
        </FormContext.Provider>
    );
}

export const useForm = () => {
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error('Erro');
    }
    return context;
}