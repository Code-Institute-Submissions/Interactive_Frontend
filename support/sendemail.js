var myform = $("form#contact-form");
myform.submit(function(event) {
    event.preventDefault();

    var service_id = "gmail";
    var template_id = "miscsoletrader";

    $('.btn-contact').prop('disabled', true); // Button Disable
    myform.find("button").text("Wait..."); // Change Button Text
    emailjs.sendForm(service_id, template_id, myform[0])
        .then(function() {
            myform.find("button").text("Send"); // Display "Send" text on Button
            $('.btn-contact').prop('disabled', false); // Enable Button
            $('#success').show(); // Shows success alert
            myform.trigger("reset"); // reset all fields on form
        }, function(err) {
            myform.find("button").text("Send");
        });
    return false;
});