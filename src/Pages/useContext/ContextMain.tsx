import React,{useState} from 'react'
import { Context } from './context';
import Dashboard from './Dashboard';
import { Profile, SideBar } from './ChildComponents';
export interface User{
    isSubs: boolean;
    name:string;
}
 
export default function ContextMain() {
    const [user] = useState<User>({
        isSubs: true,
        name:'You'
    });
  return (
    <>
    <Context.Provider value={user}>
        <Dashboard />
        <SideBar />
        <Profile />
    </Context.Provider>
    </>
  )
}
