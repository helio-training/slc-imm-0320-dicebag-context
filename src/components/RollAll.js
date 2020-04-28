import React from "react";
import { DiceBagContext } from "../context/roll-context";

function RollAllButton() {
    // The Roll All Button receives not only the dice
    // but also a RollAll function from the context
    return (
        <DiceBagContext.Consumer>
            {({ rollAll }) => ( // Context provided
                <button
                    onClick={rollAll}
                >
                    Roll All
                </button>
            )}
        </DiceBagContext.Consumer>
    );
}

export default RollAllButton;