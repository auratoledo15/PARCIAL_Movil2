import {UseAuthStore} from '../store/auth.store'
import { useEffect } from 'react';

const LogingPage=() =>{
    const authStatus =UseAuthStore(state=>state.status);
    const user =UseAuthStore(state=>state.user);

    const login =UseAuthStore(state=>state.login);
    const logout =UseAuthStore(state=>state.logout);
    useEffect(()=>{
      setTimeout(()=>{
        logout();
      },1500)
    },[])
    if (authStatus==='checking'){
      return <h3>Loading...</h3>
    }
  return (
    <>
            <h2>Login Page</h2>
            {
              (authStatus=='authenticated')
              ? <div>Autenticado Como: {JSON.stringify(user,null,2)}</div>
              : <div> No Autenticado</div>
            }
    </>
  )
}

export default LogingPage