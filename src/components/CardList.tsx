import React from 'react';
import { IRobort } from '../roborts';
import Card from './Card';

const CardList = (props: { roborts: Array<IRobort> }) => {

    throw new Error('nothing');

    return (
        <div>
            {props.roborts.map((i, idx) => <Card key={idx}  {...i} />)}
        </div>
    );
}

export default CardList;