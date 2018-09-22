/*
  Create a JavaScript file that enhances an interactive registration form for
  a fictional conference called "FullStack Conf".  Use JavaScript to make the
  form more user-friendly by:
    - adding customized and conditional behavior and interactivity
    - validating user input and providing helpful error messages when
      the user enters invalid information into the form fields
*/

//Wrap the entire jQuery code in the document.ready function
$(document).ready(function () {


//Step 1 - Set focus on the first text field by default when the page loads
$('#name').focus();

//Step 2 - 2 part 'Job Role' Section //
//Include a text field that will be revealed when the "Other" option is selected
//from the "Job Role" drop down menu
//Give the field an id of "other-title", and add the placeholder text of "Your Job Role"

//hide the hide the 'other' input field initially at start
$('#other-title').hide();


/*
  Create a function that holds the Job Role Option List.
  Create an event listener that if 'other' is clicked,
  show the input text field, else when the other job roles
  are clicked, hide the 'other' input field
*/

$('#title').click(function() {
  if($(this).val() == 'other') {
    $('#other-title').slideDown();
  }else {
    $('#other-title').slideUp();
  }
});


/* --Step 3-- T-Shirt Info Section -- //
  Create a function that holds the T-Shirt Info Section.
  For the T-Shirt "Color" menu, only display the color
  options that match the design selected in the "Design"
  menu.

  If the user selects "Theme - JS Puns" then the color menu
  should only display "Cornflower Blue", "Dark Slate Grey",
  and "Gold".

  If the user selects "Theme - JS Puns" then the color menu
  should only display "Tomato", "Steel Blue", and "Dim Grey".

  When a new theme is selected from the "Design" menu, the "Color"
  field and drop down menu is updated.
*/

function removeColorList() {
  $('#color option').remove();
}

removeColorList();

function hideColorLabelAndList() {
  $('#colors-js-puns').hide();
}

hideColorLabelAndList();

function showColorLabelAndList() {
  $('#colors-js-puns').show();
}

function appendJSPunsColorList() {
  $('#color').append('<option value="cornflowerblue">Cornflower Blue</option>');
  $('#color').append('<option value="darkslategrey">Dark Slate Grey</option>');
  $('#color').append('<option value="gold">Gold</option>');
}

function appendHeartJSColorList() {
  $('#color').append('<option value="tomato">Tomato</option>');
  $('#color').append('<option value="steelblue">Steel Blue</option>');
  $('#color').append('<option value="dimgrey">Dim Grey</option>');
}


$('#design').click(function() {
  if($(this).val() == 'js puns') {
    showColorLabelAndList();
    removeColorList();
    appendJSPunsColorList();
  } else if ($(this).val() == 'heart js') {
    showColorLabelAndList();
    removeColorList();
    appendHeartJSColorList();
  } else {
    hideColorLabelAndList();
  }
});



//--- Exceeds Expectations ---//
/*
  Create a function that hides the color dropdown list and the list cannot
  be selected until the user selects a t-shirt theme.
*/
//----------------------------//


//---------------------------------------------------------------------//


/*
  Create a function when a t-shirt theme is selected, the color list
  updates to the correct color list for that theme.  Else, the select theme
  option hides the color label and menu *EXTRA CREDIT* and will not appear until
  the user has selected a t-shirt theme.
*/

//---------------------------------------------------------------------//


/*  --Step 4-- "Register for Activities" Section - DONE!!!!!!!!!!!!!!!!
  Some events are at the same day and time as others. If the user selects
  a workshop, don't allow selection of a workshop at the same date and time --
  you should disable the checkbox and visually indicate that the workshop in
  the competing time slot is unavailable.

  When a user unchecks an activity, make sure that competing activities(if any)
  are no longer disabled.

  As a user selects activities, a running total should display below the list
  of checkboxes. For example, if the user selects "Main Conference", then
  Total: $200 should appear. If they add 1 workshop, the total should change
  to Total: $300.
*/
//Set the values dynamically to each activity
$('[name=all]').val(200);
$('[name=js-frameworks]').val(100);
$('[name=js-libs]').val(100);
$('[name=express]').val(100);
$('[name=node]').val(100);
$('[name=build-tools]').val(100);
$('[name=npm]').val(100);


//Cosmetic change only - when checkbox is checked, make text bold and inherit color
// - CSS Styles
$('input[type=checkbox]').click(function() {
  if(this.checked) {
    $(this).parent().addClass('checked');
  }else {
    $(this).parent().removeClass('checked');
  }
});

//Disable same time and date activities when checked - remove the disabled
//property when unchecked
$('[name=js-frameworks]').click(function() {
  if(this.checked) {
    $('[name=express]').attr('disabled', 'disabled');
    $('[name=express]').parent().addClass('disabledLabel');
  }else {
    $('[name=express]').removeAttr('disabled');
    $('[name=express]').parent().removeClass('disabledLabel');
  }
});

$('[name=js-libs]').click(function() {
  if(this.checked) {
    $('[name=node]').attr('disabled', 'disabled');
    $('[name=node]').parent().addClass('disabledLabel');
  }else {
    $('[name=node]').removeAttr('disabled');
    $('[name=node]').parent().removeClass('disabledLabel');
  }
});

$('[name=express]').click(function() {
  if(this.checked) {
    $('[name=js-frameworks]').attr('disabled', 'disabled');
    $('[name=js-frameworks]').parent().addClass('disabledLabel');
  }else {
    $('[name=js-frameworks]').removeAttr('disabled');
    $('[name=js-frameworks]').parent().removeClass('disabledLabel');
  }
});

$('[name=node]').click(function() {
  if(this.checked) {
    $('[name=js-libs]').attr('disabled', 'disabled');
    $('[name=js-libs]').parent().addClass('disabledLabel');
  }else {
    $('[name=js-libs]').removeAttr('disabled');
    $('[name=js-libs]').parent().removeClass('disabledLabel');
  }
});



//Create and append a total amount ID to the html file
$('.activities').append('<span id="totalAmount"></span>');

//hide the total until a checkbox is checked
// $('#totalAmount').hide();

//Calculate the total and show the total amount when checkboxes are clicked -
//hide the total amount when no checkboxes are clicked
$('.activities').click(function(event) {
  let calculateTotal = 0;
  $('input[type=checkbox]:checked').each(function() {
    calculateTotal += parseInt($(this).val());
  });

  console.log(calculateTotal);
  if(calculateTotal == 0) {
    $('#totalAmount').val(0);
    $('#totalAmount').hide();
  }else {
    $('#totalAmount').show();
    $('#totalAmount').val(calculateTotal);
    $('#totalAmount').html('<h3><strong>Total:<sup>$</sup>'+calculateTotal+'</strong></h3>');
  }
});





//------------------------------------------------------------------------------------//


/* --Step 5-- "Payment Info" Section
  Display payment sections based on the payment option chosen in the select menu.

  The "Credit Card" payment option should be selected by default. Display the #credit-card
  div, and hide the "PayPal" and "Bitcoin" information. Payment option in the
  select menu should match the payment option displayed on the page.

  When a user selects the "PayPal" payment option, the PayPal information should
  display, and the credit card and "Bitcoin" information should be hidden.

  When a user selects the "Bitcoin" payment option, the Bitcoin information should
  display, and the credit card and "PayPal" information should be hidden.

  note: The user should not be able to select the "Select Payment Method" option
  from the payment select menu, because the user should not be able to submit the
  form without a chosen payment option.
*/

//Remove the "select payment method" option from the list.
$('#payment option[value="select_method"]').remove();

//Initially hide the first and last paragraphs from the payment options
$('p:first').hide();
$('p:last').hide();

$('#payment').click(function(event) {
  event.preventDefault();
  if($(this).val() == 'credit card') {
    $('p:first').hide();
    $('p:last').hide();
    $('#credit-card').show();
  } else if ($(this).val() == 'paypal') {
    $('#credit-card').hide();
    $('p:last').hide();
    $('p:first').show();
  } else if ($(this).val() == 'bitcoin') {
    $('#credit-card').hide();
    $('p:first').hide();
    $('p:last').show();
  }
});


//-------------------------------------------------------------------------------//


/* --Step 6-- Form Validation
  If any of the following validation errors exist, prevent the user from submitting
  the form:

    Name field can not be blank

    Email field must be a validly formatted e-mail address(you don't have to check
    that it's a real e-mail address, just that it's formatted like one:
    dave@teamtreehouse.com for example).

    User must select at least one checkbox under the "Register for Activities"
    section of the form.

    If the selected payment option is "Credit Card", make sure the user has
    supplied a Credit Card number, a Zip Code, and a 3 number CVV value before
    the form can be submitted.

    Credit Card field should only accept a number between 13 and 16 digits.

    The Zip Code field should accept a 5-digit number.

    The CVV should only accept a number that is exactly 3 digits long.

    note: Make sure your validation is only validating the Credit Card info
    if Credit Card is the selected payment method.
*/

});
