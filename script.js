$(document).ready(function () { 
  $("section").hide().fadeIn(1000);
 
  $("header h1").hover(
    function () {
      $(this).css("color", "#ff6f00");
    },
    function () {
      $(this).css("color", "white");
    }
  ); 

  $('#contactForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#name').val().trim();
    const email = $('#email').val().trim();
    const message = $('#message').val().trim();

    if (!name || !email || !message) {
      alert('❌ Please fill out all fields.');
      return;
    }

    alert(`✅ Message submitted!\n\nThank you, ${name}!`);
    $(this)[0].reset();
  });
 
   
  $('#modalForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#modalName').val().trim();
    const email = $('#modalEmail').val().trim();
    const message = $('#modalMessage').val().trim();

    if (!name || !email || !message) {
      alert('❌ Please fill out all fields.');
      return;
    }

    alert(`✅ Your project request has been submitted!\nThank you, ${name}!`);
    $(this)[0].reset();
    $('#applyModal').modal('hide'); 
  });


});
