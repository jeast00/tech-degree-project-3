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


    //Set focus on the first text field by default when the page loads
    $('#name').focus();

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

    //Create seperate functions for each t-shirt theme color list
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

    //Create an event listener function that updates the color list when a t-shirt theme is clicked
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


    //---------------------------------------------------------------------//

    //Register for Activities Section

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

    //Calculate the total and show the total amount when checkboxes are clicked -
    //hide the total amount when no checkboxes are clicked
    $('.activities').click(function(event)
      {
        let calculateTotal = 0;
        $('input[type=checkbox]:checked').each(function()
          {
            calculateTotal += parseInt($(this).val()); //parseInt is used to change the string value to an integer value
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





    //-----------------------------------------------------------------------//


    //Payment Info Section


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

    //Form Validation

    //Real Time Error Messages - Extra Credit -- Exceeds Expectations

    //Name cannot be blank ~~Real-Time error message 1 --Extra Credit-- --Exceeds Expectations
    $('#name').on('input', function(event)
      {
        if($.trim($(this).val()) == '') //$.trim (to remove white spaces) I found this on jQuery.com when I was trying to figure out how to validate empty form fields and if a user types spaces in the form field -- Attribution link -- https://api.jquery.com/jQuery.trim/#jQuery-trim-str  ||--||
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
        let emailValidation = emailRegularExpression.test($.trim($(this).val())); //$.trim Attribution link -- https://api.jquery.com/jQuery.trim/#jQuery-trim-str ||--||
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

      //----------------------------------------------------------------------//

      //Create Functions to validate each field and call the functions in the button event handler function

      //Name field
      function validateNameFieldOnSubmit()
        {
          if(!$('#name').val())
            {
              $('#name').focus(); //Ensure that the Name input field is still focused when the 'register' button is clicked and returned false
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
                return false;
              } else
                {
                  return true;
                }
          }

          //Activities section
          function validateActivitiesSectionOnSubmit()
            {
              if(!$('.activities input:checked').length > 0)
                {
                  return false;
                } else
                  {
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
          event.preventDefault(); //Prevent the form from submitting until all form fields are valid
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
                  } else if(ccNumber && !ccNumberRegex) // Exceeds Expectations -- Update error message for Credit Card after button has been clicked if input is not a number
                    {
                      $('#cc-num').css("border", "2px solid firebrick");
                      $('label[for="cc-num"]').html('<span style="color:firebrick"><strong>(Please enter a credit card number)</strong></span>');
                    } else if(ccNumber && ccNumberRegex && !(ccNumber.length >= 13 && ccNumber.length <= 16)) //Exceeds Expectations -- Update error message for Credit Card after button has been clicked if input length is not equal to or within range
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
                  } else if(zipCodeNumber && !zipCodeRegex) //Exceeds Expectations -- Update error message for zip code after button has been clicked if input is not a number
                    {
                      $('#zip').css("border", "2px solid firebrick");
                      $('label[for="zip"]').html('<span style="color:firebrick"><strong>(Numbers only)</strong></span>');
                    } else if(zipCodeNumber && zipCodeRegex && !(zipCodeNumber.length == 5)) //Exceeds Expectations -- Update error message for zip code after button has been clicked if input length does not equal 5
                      {
                        $('#zip').css("border", "2px solid firebrick");
                        $('label[for="zip"]').html('<span style="color:firebrick"><strong>(Must be 5 digits)</strong></span>');
                      } else
                        {
                          $('#zip').css("border", "1px solid #679cb3");
                          $('label[for="zip"]').html('<span style="color:inherit"><strong>Zip Code:</strong></span>');
                        }

                //validate cvv input
                if(!cvvNumber)
                  {
                    $('#cvv').css("border", "2px solid firebrick");
                    $('label[for="cvv"]').html('<span style="color:firebrick"><strong>CVV:</strong></span>');
                  } else if(cvvNumber && !cvvRegex) //Exceeds Expectations -- Update error message for CVV after the button has been clicked if input is not a number
                    {
                      $('#cvv').css("border", "2px solid firebrick");
                      $('label[for="cvv"]').html('<span style="color:firebrick"><strong>(Numbers only)</strong></span>');
                    } else if(cvvNumber && cvvRegex && !(cvvNumber.length == 3)) //Exceeds Expectations -- Update error message for CVV after the button has been clicked if the input length does not equal to 3
                      {
                        $('#cvv').css("border", "2px solid firebrick");
                        $('label[for="cvv"]').html('<span style="color:firebrick"><strong>(Must be 3 digits)</strong></span>');
                      } else
                        {
                          $('#cvv').css("border", "1px solid #679cb3");
                          $('label[for="cvv"]').html('<span style="color:inherit"><strong>CVV:</strong></span>');
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
                       alert("form is submitted. Thank you!"); //Just for user validation purposes; Will remove when ready to submit project for grading
                     }
                } else
                  {
                    $('form').submit();
                    alert("form is submitted. Thank you!"); //Just for user validation purposes; Will remove when ready to submit project for grading
                  }
            }
        });

});
