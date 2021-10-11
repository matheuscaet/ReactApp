import React from 'react';
import {CgChevronRight} from "react-icons/cg"
import { useParams, useHistory } from "react-router";


import { useState, useEffect } from 'react';

import NavUp from './NavUp';

const AdminPage = () => {

    const history = useHistory();

    const [itens, setItens]  = useState ([{
        _id:"",
        name:"",
        desc:""
    }]);



    useEffect(() => {
        fetch("/itens").then((res) => {
            if(res.ok){
                return res.json()
            }
        }).then(JsonRes => setItens(JsonRes))
    });

    const handleDetails1 = (iname) => {

        history.push(`/item/${iname}`);
    }


      

      return ( 
            <>
                <div className="App">
                    <NavUp/>
                    <h1 className="header">Admin Page</h1>
                    <div className="item-container">
                        {itens.map(item => 
                            <div className="item-line">
                                <div className="item-name">{item.name}</div>
                                <button className="item-info" onClick={(e) => handleDetails1(item.name, e)}>< CgChevronRight/></button>
                            </div>
                        )}
                    </div>
                </div>
             </>
    );
}
   
  export default AdminPage;