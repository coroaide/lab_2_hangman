import React from 'react';
import { KeyBoardComponent } from './components/KeyBoardComponent';

import "./styles.css";

const HangManComponent = () => {
    return(
        <div>
            <h1>HangMan</h1>
            <hr/>
            <KeyBoardComponent/>
        </div>
    );
};

export default HangManComponent;
