var primes = function(n) {

  var allNumbers = [];
  for (var i = 2; i <= n; i++) {
    allNumbers.push(i);
  }

  for (var prime = 2; prime <= n; prime++) {
    allNumbers.forEach(function(number) {
      if (number % prime === 0 && number !== prime) {
        var index = allNumbers.indexOf(number);
        allNumbers.splice(index, 1);
      }
    });
  }
  return allNumbers;
};

$(document).ready(function() {
  $("form#primeForm").submit(function(event) {
    var n = parseInt($("input#number").val());
    var allPrimes = primes(n);
    var htmlPrimes = "";
    allPrimes.forEach(function(prime) {
      htmlPrimes = htmlPrimes + "<li>" + prime + "</li>"
    });

    $("#results ul").html(htmlPrimes);

    event.preventDefault();
  });

  var extraUX = false;

  if ( extraUX ) $('form').addClass('more-ux');

  var checkallreq = function () {
    var _reqlen = $('input[required]').length,
        _passlen = $('.fields li.pass').length;

    if ( parseInt($('input[required]').val()) > 1 ) {
      $('form button').removeAttr('disabled');
    } else {
      $('form button').attr('disabled', 'disabled');
    }
  };

  var checkfield = function (e) {
    var _basic = ['first_name', 'last_name'],
        $_field = $('.fields input').filter('[name="' + e + '"]'),
        $_parent = $_field.parent();

    if ( $.inArray(_basic, e) ) {
      if ( $_field.val().length > 0 && parseInt($_field.val()) >= 2 ) {
        $_parent.removeClass('fail');
        $_parent.addClass('pass');
      } else {
        $_parent.removeClass('pass');
        $_parent.addClass('fail');
      }
    }

    checkallreq();
  };

  $('.fields input[required]')
    .each(function () {
      $_input = $(this).attr('name');
      $(this).parent().addClass('required fail');

      checkfield($_input);
    } )

    .change(function () {
      $_input = $(this).attr('name');

      checkfield($_input);
    } );


  $('form.more-ux .fields input')
    .on('keypress', function () {
      $(this).addClass('editting');
      $(this).on('blur', function () {
        $(this).removeClass('editting');
      } )
    });

});
