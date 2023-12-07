import {createContext,useContext} from 'react'; 
import { User } from './ContextMain';

export const Context = createContext<User |undefined>(undefined);

export function useUserContext(){
    const user =  useContext(Context);
    if(user === undefined){
        throw new Error("User is empty.");
    }
    return user;
}