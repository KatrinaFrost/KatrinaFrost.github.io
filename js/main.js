console.log("Welcome to my portfolio :) ");

// document loads in web browser - when ready, we can code ! :)
$(document).ready(function(){

  // bind mouseover event using jquery. Ensure event is passed as an arg.
  $('.pulse').mouseover(function (event){

    // use event.currentTarget to locate the element that was hovered over
    // as we can't use pulse, because it refers to many items etc.
    // here we remove the animation classes used to animate the item
    $(event.currentTarget).removeClass('animated pulse');

    // the animation will not fire again, until we have removed the classes successfully.
    // so we use a timeout trick here to basically say, when the stuff before is done,
    // run the code inside timeout.
    // 0 is used, which is fine. We don't need time.
    setTimeout(function () {
      $(event.currentTarget).addClass('animated pulse');
    }, 0);
  });

// END
});
