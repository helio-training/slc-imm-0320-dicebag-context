import React, { useState, useContext } from 'react';
import { DiceBagContext } from '../context/roll-context';

const AddForm = () => {
    const [sideCount, setSideCount] = useState(0);
    const { addToDice } = useContext(DiceBagContext);

    return (
        <div>
            <input type="number" 
                value={sideCount} 
                onChange={({target}) => setSideCount(target.value)}/>
            <button onClick={() => addToDice(sideCount)}>
                Add To Dice
            </button>
        </div>
    );
}

export default AddForm;