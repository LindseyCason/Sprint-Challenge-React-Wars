import React, { useEffect, useState } from "react";
import axios from "axios";
import CharInfo from "./CharInfo.js";
import styled from 'styled-components';


const Container = styled.div`
    width: 95%;
    align-items:center;
    background-color: #ffffff60;
    box-shadow: 5px 5px 5px #8B831260;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    border-radius:3px;
`
;



export default function CharCard(){
    const [info, setInfo] = useState([]);
    // const [name, setName] = useState([]);
    // const [height, setHeight] = useState([]);
    // const [mass, setMass] = useState([]);
     //DONT NEED ALL OF THESE, JUST THE ONE AND THEN GO INTO THAT OBJ TO SET PROPERTIES BELOW

useEffect(()=>{

axios
.get(`https://swapi.co/api/people/?format=json`)
.then(response =>{
    const info = response.data.results;
    // console.log("Starwars", info); // WORKING
    setInfo(info);

});
},[])

return (
    <Container>
{info.map(chars=>{
    return(
        <CharInfo
        name={chars.name}
        height={chars.height}
        mass={chars.mass}
        />
    );
})}
    </Container>


);


};


