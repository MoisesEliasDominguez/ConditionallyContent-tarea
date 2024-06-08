import './Instructions.css'

export function Instructions(){
    return(
        <>        
        <h2> Conditional Content </h2>
        <p>
        You're working on a part of a web app that's responsible for showing a warning when a user is about to perform a dangerous action.
        </p>
        
        <p>
        Therefore, your task is to conditionally show a warning box once a user has clicked a specific button.
        Inside that warning dialog, another button allows users to dismiss the warning (i.e., remove the warning box from the screen).            
        </p>

        <p>
        The finished app should display thr UI just with the button that has not been clicked yet
        </p>

        <p>
        And this UI, once the button was clicked:
        </p>

        <p>
        Once the "Proceed" button was clicked, the warning box should be removed again and shows just the button
        </p>

        <p>
        For this task, you must react to clicks on both button elements that are part of the starting code.
        The second button, outside of the div with the id="alert", should show the div id="alert (and all its content). 
        The button inside that div should then hide it again (i.e., remove it from the DOM).
        </p>

        </>
    );
}