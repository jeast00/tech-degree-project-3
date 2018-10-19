/*
  Create a JavaScript file that enhances an interactive registration form for
  a fictional conference called "FullStack Conf".  Use JavaScript to make the
  form more user-friendly by:
    - adding customized and conditional behavior and interactivity
    - validating user input and providing helpful error messages when
      the user enters invalid information into the form fields
*/

//Wrap the entire jQuery code in the document.ready function
$(document).ready(function ()
  {


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

    $('#title').click(function()
      {
        if($(this).val() == 'other')
          {
            $('#other-title').slideDown();
          }else
            {
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

    function removeColorList()
      {
        $('#color option').remove();
      }

    removeColorList();


    // ~~Extra Credit~~ --Exceeds expectations--
    //Hide the color label and dropdown box from the form
    function hideColorLabelAndList()
      {
        $('#colors-js-puns').hide();
      }

    hideColorLabelAndList();

    function showColorLabelAndList()
      {
        $('#colors-js-puns').show();
      }

    function appendJSPunsColorList()
      {
        $('#color').append('<option value="cornflowerblue">Cornflower Blue</option>');
        $('#color').append('<option value="darkslategrey">Dark Slate Grey</option>');
        $('#color').append('<option value="gold">Gold</option>');
      }

    function appendHeartJSColorList()
      {
        $('#color').append('<option value="tomato">Tomato</option>');
        $('#color').append('<option value="steelblue">Steel Blue</option>');
        $('#color').append('<option value="dimgrey">Dim Grey</option>');
      }


    $('#design').click(function()
      {
        if($(this).val() == 'js puns')
          {
            showColorLabelAndList();
            removeColorList();
            appendJSPunsColorList();
          }else if ($(this).val() == 'heart js')
            {
              showColorLabelAndList();
              removeColorList();
              appendHeartJSColorList();
            }else
              {
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
    $('input[type=checkbox]').click(function()
      {
        if(this.checked)
          {
            $(this).parent().addClass('checked');
          }else
            {
              $(this).parent().removeClass('checked');
            }
      });

    //Disable same time and date activities when checked - remove the disabled
    //property when unchecked
    $('[name=js-frameworks]').click(function()
      {
        if(this.checked)
          {
            $('[name=express]').attr('disabled', 'disabled');
            $('[name=express]').parent().addClass('disabledLabel');
          }else
            {
              $('[name=express]').removeAttr('disabled');
              $('[name=express]').parent().removeClass('disabledLabel');
            }
      });

    $('[name=js-libs]').click(function()
      {
        if(this.checked)
          {
            $('[name=node]').attr('disabled', 'disabled');
            $('[name=node]').parent().addClass('disabledLabel');
          }else
            {
              $('[name=node]').removeAttr('disabled');
              $('[name=node]').parent().removeClass('disabledLabel');
            }
      });

    $('[name=express]').click(function()
      {
        if(this.checked)
          {
            $('[name=js-frameworks]').attr('disabled', 'disabled');
            $('[name=js-frameworks]').parent().addClass('disabledLabel');
          }else
            {
              $('[name=js-frameworks]').removeAttr('disabled');
              $('[name=js-frameworks]').parent().removeClass('disabledLabel');
            }
      });

    $('[name=node]').click(function()
      {
        if(this.checked)
          {
            $('[name=js-libs]').attr('disabled', 'disabled');
            $('[name=js-libs]').parent().addClass('disabledLabel');
          }else
            {
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
    $('.activities').click(function(event)
      {
        let calculateTotal = 0;
        $('input[type=checkbox]:checked').each(function()
          {
            calculateTotal += parseInt($(this).val());
          });
          if(calculateTotal == 0)
            {
              $('#totalAmount').val(0);
              $('#totalAmount').hide();
            }else
              {
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

    //Initially hide the first and last paragraphs from the payment options to ensure
    //the credit card payment method is selected by default
    $('p:first').hide();
    $('p:last').hide();

    $('#payment').click(function(event)
      {
        event.preventDefault();
        if($(this).val() == 'credit card')
          {
            $('p:first').hide();
            $('p:last').hide();
            $('#credit-card').show();
          }else if ($(this).val() == 'paypal')
            {
              $('#credit-card').hide();
              $('p:last').hide();
              $('p:first').show();
            }else if ($(this).val() == 'bitcoin')
              {
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

    //----------------------------------------------------------------------------------------------//

    //Name cannot be blank ~~Real-Time error message 1 --Extra Credit-- --Exceeds Expectations
    $('#name').on('input', function(event)
      {
        if($.trim($(this).val()) == '')
          {
            $(this).css("border", "2px solid firebrick");
            $('label[for="name"]').html('<span style="color:firebrick"><strong>Name cannot be blank</strong></span>');
          }else
            {
              $(this).css("border", "2px solid #679cb3");
              $('label[for="name"]').html('<span style="color:inherit"><strong>Name:</strong></span>');
            }
      });

    // ~~Real Time error message 2 --Extra Credit-- --Exceeds Expectations--
    //Email must be formatted like an email address (i.e. dave@teamtreehouse.com)
    $('#mail').on('input', function()
      {
        let emailRegularExpression = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailValidation = emailRegularExpression.test($.trim($(this).val()));
        if(!emailValidation)
          {
            $(this).css("border", "2px solid firebrick");
            $('label[for="mail"]').html('<span style="color:firebrick"><strong>Please enter a formatted email address (i.e.: yourname@domain.com)</strong></span>');
          }else
            {
              $(this).css("border", "2px solid #679cb3");
              $('label[for="mail"]').html('<span style="color:inherit"><strong>Email:</strong></span>');
            }
      });

      //----------------------------------------------------------------------------------------------//

      //Create Functions to validate each field and call the functions in the button event handler function
      //Name field
      function validateNameFieldOnSubmit()
        {
          if(!$('#name').val())
            {
              $('#name').focus(); //Ensure that the Name input field is still focused when the 'register' button is clicked
              return false;
            } else
              {
                return true;
              }
        }

        //Email field
        function validateEmailFieldOnSubmit()
          {
            if(!$('#mail').val())
              {
                // $('#mail').css("border", "2px solid firebrick");
                // $('label[for="mail"]').html('<span style="color:firebrick"><strong>Email: (Please enter your email address)</strong></span>');
                return false;
              } else
                {
                  return true;
                }
          }

          //Activities section
          function validateActivitiesSectionOnSubmit()
            {
              let activityLegend = $('legend')[2];
              if(!$('.activities input:checked').length > 0)
                {
                  // $(activityLegend).html('<span style="color:firebrick"><strong>Register for Activities: (Please select at least one activity)</strong></span>');
                  return false;
                } else
                  {
                    // $(activityLegend).html('<span style="color:inherit">Register for Activities</span>');
                    return true;
                  }
            }

          //Credit Card Number input
          function validateCreditCardNumberOnSubmit()
            {
              let paymentID = $('#payment').val();
              let ccNumber = $('#cc-num').val();
              let ccNumberRegex = ccNumber.match(/^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/);
              if(paymentID == "credit card")
                {
                  if(!ccNumber)
                    {
                      return false;
                    } else if(ccNumber && !ccNumberRegex)
                      {
                        return false;
                      } else if(ccNumber && ccNumberRegex && !(ccNumber.length >= 13 && ccNumber.length <= 16))
                        {
                          return false;
                        } else
                        {
                          return true;
                        }
                }
              }

            //Zip Code Number input
            function validateZipCodeNumberOnSubmit()
              {
                let paymentID = $('#payment').val();
                let zipCodeNumber = $('#zip').val();
                let zipCodeRegex = zipCodeNumber.match(/^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/);
                if(paymentID == "credit card")
                  {
                    if(!zipCodeNumber)
                      {
                        return false;
                      } else if(zipCodeNumber && !zipCodeRegex)
                        {
                          return false;
                        } else if(zipCodeNumber && zipCodeRegex && !(zipCodeNumber.length == 5))
                          {
                            return false;
                          } else
                            {
                              return true;
                            }
                    }
                }

                //CVV Number input
                function validateCVVNumberOnSubmit()
                  {
                    let paymentID = $('#payment').val();
                    let cvvNumber = $('#cvv').val();
                    let cvvRegex = cvvNumber.match(/^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/);
                    if(paymentID == "credit card")
                      {
                        if(!cvvNumber)
                          {
                            return false;
                          } else if(cvvNumber && !cvvRegex)
                            {
                              return false;
                            } else if(cvvNumber && cvvRegex && !(cvvNumber.length == 3))
                              {
                                return false;
                              } else
                                {
                                  return true;
                                }
                        }
                    }


      //When Form is submitted, check for the following errors
      $('button').click(function(event)
        {
          event.preventDefault(); //Prevent the form from submitting before all form fields are valid
          let paymentID = $('#payment').val();
          let ccNumber = $('#cc-num').val();
          let zipCodeNumber = $('#zip').val();
          let cvvNumber = $('#cvv').val();
          let ccNumberRegex = ccNumber.match(/^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/);
          let zipCodeRegex = zipCodeNumber.match(/^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/);
          let cvvRegex = cvvNumber.match(/^\d*[0-9](|.\d*[0-9]|,\d*[0-9])?$/);

          //Name Error Message
          if(!$('#name').val())
            {
              $('#name').css("border", "2px solid firebrick");
              $('label[for="name"]').html('<span style="color:firebrick"><strong>Name: (Please enter your name)</strong></span>');
            }

          //Email Error Message
          if(!$('#mail').val())
            {
              $('#mail').css("border", "2px solid firebrick");
              $('label[for="mail"]').html('<span style="color:firebrick"><strong>Email: (Please enter your email address)</strong></span>');
            }

          //Activity Error Message
          let activityLegend = $('legend')[2];
          if(!$('.activities input:checked').length > 0)
            {
              $(activityLegend).html('<span style="color:firebrick"><strong>Register for Activities: (Please select at least one activity)</strong></span>');
            } else
              {
                $(activityLegend).html('<span style="color:inherit">Register for Activities</span>');
              }


            if(paymentID == "credit card")
              {
                //validate credit card input
                if(!ccNumber)
                  {
                    $('#cc-num').css("border", "2px solid firebrick");
                    $('label[for="cc-num"]').html('<span style="color:firebrick"><strong>Card Number:</strong></span>');
                  } else if(ccNumber && !ccNumberRegex)
                    {
                      $('#cc-num').css("border", "2px solid firebrick");
                      $('label[for="cc-num"]').html('<span style="color:firebrick"><strong>(Numbers only)</strong></span>');
                    } else if(ccNumber && ccNumberRegex && !(ccNumber.length >= 13 && ccNumber.length <= 16))
                      {
                        $('#cc-num').css("border", "2px solid firebrick");
                        $('label[for="cc-num"]').html('<span style="color:firebrick"><strong>(Must be 13 to 16 digits long)</strong></span>');
                      } else
                      {
                        $('#cc-num').css("border", "1px solid #679cb3");
                        $('label[for="cc-num"]').html('<span style="color:inherit"><strong>Card Number:</strong></span>');
                      }

                //validate zipcode input
                if(!zipCodeNumber)
                  {
                    $('#zip').css("border", "2px solid firebrick");
                    $('label[for="zip"]').html('<span style="color:firebrick"><strong>Zip Code:</strong></span>');
                  } else if(zipCodeNumber && !zipCodeRegex)
                    {
                      $('#zip').css("border", "2px solid firebrick");
                      $('label[for="zip"]').html('<span style="color:firebrick"><strong>(Numbers only)</strong></span>');
                    } else if(zipCodeNumber && zipCodeRegex && !(zipCodeNumber.length == 5))
                      {
                        $('#zip').css("border", "2px solid firebrick");
                        $('label[for="zip"]').html('<span style="color:firebrick"><strong>(Must be 5 digits)</strong></span>');
                      } else
                        {
                          $('#zip').css("border", "1px solid #679cb3");
                          $('label[for="zip"]').html('<span style="color:inherit">Zip Code:</span>');
                        }

                //validate cvv input
                if(!cvvNumber)
                  {
                    $('#cvv').css("border", "2px solid firebrick");
                    $('label[for="cvv"]').html('<span style="color:firebrick"><strong>CVV:</strong></span>');
                  } else if(cvvNumber && !cvvRegex)
                    {
                      $('#cvv').css("border", "2px solid firebrick");
                      $('label[for="cvv"]').html('<span style="color:firebrick"><strong>(Numbers only)</strong></span>');
                    } else if(cvvNumber && cvvRegex && !(cvvNumber.length == 3))
                      {
                        $('#cvv').css("border", "2px solid firebrick");
                        $('label[for="cvv"]').html('<span style="color:firebrick"><strong>(Must be 3 digits)</strong></span>');
                      } else
                        {
                          $('#cvv').css("border", "1px solid #679cb3");
                          $('label[for="cvv"]').html('<span style="color:inherit">CVV:</span>');
                        }


              }




          //Submit the form if all form fields are valid
          if(validateNameFieldOnSubmit() == true &&
             validateEmailFieldOnSubmit() == true &&
             validateActivitiesSectionOnSubmit() == true)
            {
              if(paymentID == "credit card")
                {
                  if(validateCreditCardNumberOnSubmit() == true &&
                     validateZipCodeNumberOnSubmit() == true &&
                     validateCVVNumberOnSubmit() == true)
                     {
                       $('form').submit();
                       alert("form is submitted. Thank you!");
                     }
                } else
                  {
                    $('form').submit();
                    alert("form is submitted. Thank you!");
                  }
            }
        });




});
