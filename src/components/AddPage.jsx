import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { CgAddR, CgPushChevronLeftR } from 'react-icons/cg';

const AddPage = () => {
  
  const history = useHistory();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');



  const handleUserChange = (e) => {
    setUser(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value)
  }

  const handleAdd = () => {
    
    if(cpassword === password & password != "" & user != ""){
      
      AddUser(user, password);
      history.push("/");
      
    }else{
      alert("Usuario ou Senha invalida!!");
    }
  }

  function AddUser(usu, psw){
    const usern = [{
      user:usu,
      password:psw
    }];

    
    console.log(usern);

    axios.post("http://localhost:8081/adduser", usern).then((response) => alert("Bem vindo, " + response.data.user));

    return true;
  
  }

  function BackButton(){
    const history = useHistory();

    const handleBack = () => {
      history.push("/");
    }
    
    return (
      <button className="btn-2" onClick={handleBack}>Voltar <CgPushChevronLeftR/></button>
    )
  }
    return ( 
        <>
            <div className="App">
        <h1 className="header">Cadastro</h1>

        <div className="line">
          <label>Usuário:</label>
        </div>
        <div className="line">
         <input 
           placeholder="Usuário" 
           type="text" 
           className="input-1" 
           value={user} 
           onChange={e => setUser(e.target.value)}
         />
        </div>
        <div className="line">
          <label>Senha:</label>
        </div>
        <div className="line">
          <input 
            placeholder="Senha" 
            type="password" 
            className="input-1" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className="line">
          <label>Confirme a Senha:</label>
        </div>
        <div className="line">
          <input 
            placeholder="Confirme a Senha" 
            type="password" 
            className="input-1" 
            value={cpassword} 
            onChange={e => setCPassword(e.target.value)}
          />
        </div>
        <div className="line">
          <button className="btn-1" onClick={handleAdd}>Cadastro <CgAddR/></button>
          <BackButton/>
        </div>
      </div>
        </>
     );
}
 
export default AddPage;