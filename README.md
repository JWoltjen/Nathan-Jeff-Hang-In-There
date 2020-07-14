# Hang In There

A Javascript project by Nathan Darrington and Jeff Woltjen.

## Introduction

## Progression

### Iteration 0 - Main Page

### Iteration 1 - Switching Views

### Iteration 2 -

### Iteration 3 -

### Iteration 4 -

### Bonus Fancy -

## Key Concepts

1. Using Classes
 The poster class stored in poster.js was the key to updating data for current poster before pushing that data into the various arrays: title array, quote array, images array, and saved poster array. To update current poster, we created functions that would randomly select one element from each of these arrays to become properties of the currentPoster object, an instantiation of the poster class. Once we had acquired values for each of currentPoster's keys, we could run a function that would return the currentPoster to the main section of the page.  This also allowed us to dynamically update the values of the currentPoster class when working with related concepts such as making custom posters.

2. Navigating Through Sections
In this project, index.html was the only html addressed used. Rather than navigating to different pages, navigation was achieved by changing the style attributes of various elements. This was performed by adding or removing the "hidden" property to each major section: Mainposter page, Savedposter page, and UserPoster page. We attached event listeners to supplied buttons. On the click of these buttons, a function would hide two of the major sections, and display the selected section instead.

3. Referencing object values
How do you make sure that a user is not pushing multiple posters to the savedPosters section dynamically? We tried many approaches to this task but ultimately decided to check each individual value of the poster class's key value pairs. If the poster was completely unique, meaning the combination of all three values was not yet stored in the savedPosters Array, we would push the new poster to the array. Otherwise, the user is given a message that indicates that the current poster has already been saved to the array. Later on in the project, we became more familiar with using/referencing the poster.id to find information inside of the arrays as the one source of Truth. We used poster.id within our remove saved poster function to determine exactly which poster should be deleted on a double click, and how to display the poster modal as well, which also used event targeting.

4. Event targeting
As discussed above, we used event targeting to dynamically select and remove posters from the saved poster array, as well as to display the selected poster's modal within the saved poster array. Event targeting is achieved by attaching an event listener to the parent node and then using a parameter within the function as the event. With this paradigm, we can dynamically chose the target which will fire the event listener on a click or double click, and if the target's parent node contains the event listener, the function will remove the selected target from the saved poster array. One problem we encountered was that initially our erase poster functionality only worked if the user clicked on one area of the saved poster. This bug was overcome by changing the parent node that the event listener was placed on, so that the event listener would fire when the user clicked any part of the savedPoster object literal.

5. Event Listeners
Event listeners were the key to implementing navigation between main sections, as described above. They were also utilized to display information from the arrays, save information into the arrays, and remove information from the arrays which represented our data model. One challenge that we encountered was how to dynamically attach event listeners onto objects that had not yet been instantiated within the DOM. Once we created the DOM element into the function, we added the event listener into the function in real-time. This was a study in control flow and how computers interpret and display data line by line.

6. GitWorkflow
Observing and understanding the fundamentals and theory behind GitWorkflow was identified early in the project as one of our main goals. GitWorkflow can initially be tedious and esoteric, however using it properly can save team members valuable time if it is employed correctly. We were careful to never work on the master branch, as well as never to push the master branch to GitHub when creating pull requests. By using Driver/Navigator at least 80% of the time, we did not encounter any merge conflicts. By committing when each new piece of functionality was implemented, our pull requests were easy for the non-pulling partner to decipher. When the new driving partner pulled the newly merged master branch to his machine, we immediately created new branches using git checkout -b. 

## Challenges

1. Poster class as data storage/display

2. DOM v. Data Model--Display v. push

3. Multiple event listeners on savedPosters array

4. Dynamically editing selected parts of Main Poster

## Links to Authors Repositories



_Hint: How will you update the data model to achieve this?_

## Acknowledgements




Project spec & rubric can be found [here](https://frontend.turing.io/projects/module-1/hang-in-there.html)
