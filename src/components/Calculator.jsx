import { useState } from 'react'

const Calculator = () =>{
    
    // SOOOO, to my understanding, we use state hooks to manipulate a variable 
    // that will be frequently changing, so below I created a state for the calculation that the 
    // calculator will be solving and a state for the display screen because it will be displaying
    // different numbers and variables throughout using the calculator
    
    const [display, setDisplay] = useState(0)
    const [currentCalc, setCurrentCalc] = useState('')
    
    // below are the onClick events essentially.
    // handleClick to grab whatever value/data that you want to calculate, targets numbers and operators
    // handleSubmit to evaluate the math trying to be solved, its tied to the = button
    // deleteVal to delete a # or operator that may have been mistakenly pressed, tied to DEL button
    // clearCalculator to clear screen and clear out the calculation to start a new prob, tied to CLEAR btn

    const handleClick = (event) => {
        event.preventDefault();   // <---- standard so data doesnt get reset whenever a button is pressed
        const newValue =  currentCalc + event.target.value // new var that will hold values pressed and add them to the currentcalc state, 
                                                            //if currentCAlc isn't in play, the new value will reset data each time a button is pressed 
        console.log(newValue)
        setCurrentCalc(newValue) // applies the newValue data to currentCalc
        setDisplay(newValue) // applies newVAlue data to display, shows buttons on the screen because this is called in the HTML below as {display}
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(eval(currentCalc)); // using the eval method/func actually does the math for currentCalc, since its placed within setDisplay()
                                      // it will display it on screen
        console.log(currentCalc)
        // setCurrentCalc('')
    }

     const deleteVal = (event) =>{
        event.preventDefault();
        const newValue = currentCalc.slice(0, -1) // new var when you can apply the slice method to delete the last number placed/ backspace
                                                  // starts at item [0] and removes -1 backspace, idk how to explain but kinda makes sense..
        setCurrentCalc(newValue) // new value is placed in calculation state
        setDisplay(newValue) // newval is placed within the display
     }

    const clearCalculator = (event) =>{
        event.preventDefault();
        setDisplay(0) // places display back to 0 
        setCurrentCalc('') // places calculation back to blank
    }


    
    return(
        <div id="calc-container">
        <p id="corner-txt">super calculator</p>
        <div id="screen">
            <p id="screen-txt">{display}</p>
        </div>
        <div id="button-div">

        {/* below is pretty straight forward created a button for everything, placed values properties in them so that can be targeted and 
        pulled whenever they are pressed, onClick set to whatever function is relevant to them umm yeah.  */}
        <button className="numbers" value="7" onClick={handleClick}>7</button>
        <button className="numbers" value="8" onClick={handleClick}>8</button>
        <button className="numbers" value="9" onClick={handleClick}>9</button>
        <button className="math-func" id="divide" value=" /" onClick={handleClick}>&divide;</button>
        <button className="numbers" value="4" onClick={handleClick}>4</button>
        <button className="numbers" value="5" onClick={handleClick}>5</button>
        <button className="numbers" value="6" onClick={handleClick}>6</button>
        <button className="math-func" value=" *" id="multiply" onClick={handleClick}>X</button>
        <button className="numbers" value="1" onClick={handleClick}>1</button>
        <button className="numbers" value="2" onClick={handleClick}>2</button>
        <button className="numbers" value="3" onClick={handleClick}>3</button>
        <button className="math-func" id="minus" value=" -" onClick={handleClick}>-</button>
        <button className="numbers" value="0" onClick={handleClick}>0</button>
        <button id="decimal" value="." onClick={handleClick}>.</button>
        <button id="negative" value="-" onClick={handleClick}>( - )</button>
        <button className="math-func" id="add" value=" +" onClick={handleClick} >+</button>
        <button className="reset clear" id="clear-btn" onClick={clearCalculator}>clear</button>
        <button id="delete-btn" onClick={deleteVal}>DEL</button>
        <button id="equals-btn" value="=" onClick={handleSubmit}>=</button>
        </div> 
    </div>
    )
}

export default Calculator