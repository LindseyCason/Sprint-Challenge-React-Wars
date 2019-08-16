import React from "react";
// import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

const Div = styled.div`
color: #fcba03;
    width: 25%;
    background-color: #E6D8CA;
    box-shadow: 5px 5px 5px #8B831260;
    opacity: .95;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    border-radius:3px;
`
;

const H1 = styled.h1`
color: #E39C54;
font-family: "Shadows Into Light";
opacity: 1.;
border-bottom: 2px solid white;
font-size: 2rem;

`;

const H2 = styled.h2`
color: #8B8312;
font-family: "Walter Turncoat";
opacity 1.;

`;






const CharInfo = props =>{

    return(

        // <Card>
        //     <Card.Content>
        //         <Card.Header>{props.name}</Card.Header>
        //         <Card.Meta>{props.height}</Card.Meta>
        //         <Card.Meta>{props.mass}</Card.Meta>
        //     </Card.Content>
        // </Card>

        <Div>
            <section>
                <H1>{props.name}</H1>
                <H2>Height: {props.height}</H2>
                <H2>Mass: {props.mass}</H2>
            </section>
        </Div>


    );
};

export default CharInfo;