import React, { useEffect, useState } from "react";
import axios from "axios";
import CharInfo from "./CharInfo.js";
import styled from 'styled-components';


const Container = styled.div`
    color: #ffffff60;
    // position: absolute;
    width: 95%;
    align-items:center;
    // top: 0;
    background-color: #ffffff60;
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


useEffect(()=>{

axios
.get(`https://swapi.co/api/people/?format=json`)
.then(response =>{
    const info = response.data.results;
    console.log("Starwars", info);
    setInfo(info);
    // const name = response.data.results.name;
    // setName(name);
    // const height = response.data.results.height;
    // setHeight(height);
    // const mass = response.data.results.mass;
    // setMass(mass);
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


