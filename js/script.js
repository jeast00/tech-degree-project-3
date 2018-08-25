/*
  Create a JavaScript file that enhances an interactive registration form for
  a fictional conference called "FullStack Conf".  Use JavaScript to make the
  form more user-friendly by:
    - adding customized and conditional behavior and interactivity
    - validating user input and providing helpful error messages when
      the user enters invalid information into the form fields
*/

//Step 1 - Set focus on the first text field by default when the page loads
document.getElementById('name').focus(); // complete

//Step 2 - 2 part 'Job Role' Section
//Include a text field that will be revealed when the "Other" option is selected
//from the "Job Role" drop down menu
//Give the field an id of "other-title", and add the placeholder text of "Your Job Role"

//Hide the text field initially from the form
document.getElementById('other-title').style.display = "none";

//If 'Other' is selected, show the 'Other' textfield.
