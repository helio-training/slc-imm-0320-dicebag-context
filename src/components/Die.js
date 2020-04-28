import React from "react";
import { DiceBagContext } from "../context/roll-context";

function Die({ die, index }) {
    // The Roll All Button receives not only the dice
    // but also a RollAll function from the context
    return (
        <DiceBagContext.Consumer>
            {({ rollOne }) => ( // Context provided
                <div>
                    { die.numSides } : {die.currentRoll}
                    <button
                        onClick={() => rollOne(index)}
                    >
                        Roll
                    </button>
                </div>
            )}
        </DiceBagContext.Consumer>
    );
}

export default Die;