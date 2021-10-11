
import  React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { isAuthenticated, login } from "../helper/auth";

import { useState, useEffect } from 'react';
import { CgAddR, CgEnter } from "react-icons/cg";

const LoginPage = () => {
    const history = useHistory();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    let resp = [{
      message:"",
      type:0,
      token:""
    }];

    const handleUserChange = (e) => {
      setUser(e.target.value)
    }
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }
  
    const handleLogin = () => {
      
        if((user !== "") & (password !== "")){
          LogUser(user, password).then(() => {
              isAuthenticated();

              if(resp.type == 1)
              {
                alert(resp.message);
                login(resp.token);
                history.push("/adminPg");
              }
              else
              {
                alert(resp.message);
              }
          })
          
        } else {
          alert("Usuário ou Senha inválidos");
        }
    }

    async function LogUser(usu, psw){
    

      const usern = [{
        user:usu,
        password:psw
      }];
    
        await axios.post("http://localhost:8081/lognow", usern).then((response) =>  resp = response.data);
        
        
        // while(resp.type !== 1){
        //   return false;
        // }
        return true;
        

      }
  
  
    function Cadbtn(){
      
  
      const handleCad = () => {
        history.push("/addPg");
      }
      
      return (
        <button className="btn-2" onClick={handleCad}>Cadastro <CgAddR/></button>
      )
    }

    return(
    <div className="App">
          <h1 className="header">Seja bem vindo ao App</h1>

          <div className="line">
            <label>Usuário</label>
          </div>
          <div className="line">
           <input 
             placeholder="Usuário" 
             type="text" 
             className="input-1" 
             value={user} 
              onChange={(e) => {handleUserChange(e)}}
           />
          </div>
          <div className="line">
            <label>Senha</label>
          </div>
          <div className="line">
            <input 
              placeholder="Senha" 
              type="password" 
              className="input-1" 
              value={password} 
              onChange={(e) => {handlePasswordChange(e)}}
            />
          </div>
          <div className="line">
            <button className="btn-1" onClick={handleLogin}>Login <CgEnter/></button>
            <Cadbtn/>
          </div>
        </div>
    )
}

export default LoginPage;