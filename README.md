# WEEK03-ASSIGNMENT
Cookie clicker

Reflection

Please also provide an assignment reflection in your project README.md file.
Required

    🎯 What requirements did you achieve?
    🎯 Were there any requirements or goals that you were unable to achieve?
    🎯 If so, what was it that you found difficult about these tasks?

Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

    Requesting feedback about a specific part of your submission.
    What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
    What errors or bugs did you encounter while completing your assignment? How did you solve them?
    What went really well and what could have gone better?



REFLECTION
----------------------------------------------------------------------------------------
I believe I achieved most if not all requirements.
I struggled a little with the original concept and how the logic should function, a fellow classmate helped by explaining the sequence of events, I was able to complete the logic thereafter.
I had few issues writing the logic once I understood the sequence of events.
I added a switch statement to 'enable' each upgrade button when sufficient clicks were earned to make the respective purchases. This took some time to figure out the logic and I needed to add a 'flag' to allow this switch statement to work correctly. Adding the flag prevented the previous case in the statement from returning true and breaking for a second time, this allowed the correct upgrade to 'enable' at the right time.
I decided to create my own object for upgrade button names which were more apt for the games' panic theme than the names supplied in the API.
I added some css animation on the main panic button. The code for this, I found on the Stack Overflow website and adapted for my application.
Another extra feature I added was the custom pop-up box with brief game play instructions.

My original idea was to create a minimal, clean looking design which I feel I have achieved and it has been coded with a 'mobile first' approach. Also being responsive. This was achieved using a grid and flexbox layout and one @media(){}

This was a fun assignment, but now my mouse finger aches.


REFERENCES and RESOURCES
---------------------------------------------------------------------------------------- 
W3 Schools
- colour picker for the button colours
- toLocaleString(); function for the commas in the total count

Stack Overflow
- retrieving local storage 'object'. (reference)
- JSON.parse (example)
- css animation (example)

Google AI
- created text for upgrade names object (anxiety levels)