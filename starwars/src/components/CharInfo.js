import React from "react";
// import { Card } from 'semantic-ui-react';







const CharInfo = props =>{

    return(

        // <Card>
        //     <Card.Content>
        //         <Card.Header>{props.name}</Card.Header>
        //         <Card.Meta>{props.height}</Card.Meta>
        //         <Card.Meta>{props.mass}</Card.Meta>
        //     </Card.Content>
        // </Card>

        <div>
            <section>
                <h1>Name: {props.name}</h1>
                <h2>Height: {props.height}</h2>
                <h2>Mass: {props.mass}</h2>
            </section>
        </div>


    );
};

export default CharInfo;