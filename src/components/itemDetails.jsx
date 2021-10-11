import  React from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";

import {CgPushChevronLeftR} from "react-icons/cg"
import { useState, useEffect } from 'react';
import NavUp from './NavUp';


const ItemDetails = () => {
	const params = useParams();
	const history = useHistory();

    function BackButton(){
        const history = useHistory();
    
        const handleBackButtonClick = () => {
            history.goBack();
        };
        return (
          <button className="btn-back" onClick={handleBackButtonClick}>< CgPushChevronLeftR/></button>
        )
      }
      const [item, setItem]  = useState ([{
        _id:"",
        name:params.itemTitle,
        desc:""
    }]);

      useEffect(() => {
        axios.post("http://localhost:8081/item", item).then((response) => setItem(response.data));
      });
	

	return (
		<>
      <NavUp/>
			<div className="back-button-container">
				<BackButton/>
			</div>
			<div className="item-details-container">
        <div className="item-box1"><h2>{item.name}</h2></div>
        <div className="item-box2"><h3>ID: {item._id}</h3></div>
        <div className="item-box2"><p>Descrição: {item.desc}</p></div>
			</div>
		</>
	);
};

export default ItemDetails;