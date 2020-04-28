// DiceBag Provider
import React from 'react';
import RollAll from './RollAll';
import Die from './Die';
import { DiceBagContext } from '../context/roll-context';

class DiceBag extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            dice: [ 
                { numSides: 6, currentRoll: 0 },
                { numSides: 8, currentRoll: 0 },
                { numSides: 10, currentRoll: 0 },
            ],
            rollAll: this.rollAll,
            rollOne: this.rollOne
        }
    }

    randomize = (die) => {
        die.currentRoll = Math.ceil(Math.random() * die.numSides);
    }
        
    // Go through the Dice array and for each Die randomize currentRoll
    rollAll = () => {
        // Create a Copy of DiceBag State
        const dice = Array.from(this.state.dice);
        // Modify Copy of State
        dice.forEach((die) => {
            this.randomize(die);
        });
        // Set State to Copy, Key and Value Variable Names match
        this.setState({ dice });
    }
    rollOne = (index) => {
        // Create a Copy of DiceBag State
        const dice = Array.from(this.state.dice);
        // Modify Copy of State
        this.randomize(dice[index]);
        // Set State to Copy, Key and Value Variable Names match
        this.setState({ dice });
    }
    render() {
        const displayDice = this.state.dice.map( (die, index) => {
            return (<Die die={die} index={index}/>)
        })
        return (
            <DiceBagContext.Provider value={this.state}>
                <div>
                    <h3>Roll 'em Dice!</h3>
                    <RollAll />
                    {displayDice}
                </div>
            </DiceBagContext.Provider>
        );
    }
}

export default DiceBag;