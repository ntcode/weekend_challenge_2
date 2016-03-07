$(document).ready(function(){
    $.ajax({
      type: "GET",
      url: "/data",
      success: function(data){
        console.log(data);

var kappa = [];
var index = 0;
var time = 20000;
  for(var i = 0; i < data.kappa.length; i++) {
    kappa.push(data.kappa[i]);
  }
//sets the individual that is being viewed
setInterval(function(){
  $('.people').children().remove();
  $('.people').append(
    '<div>' + "<b>Name: </b>" + kappa[index].name + '</div>' +
    '<div>' + "<b>From: </b>" + kappa[index].location + '</div>' +
    '<div>' + "<b>Spirit Animal: </b>" + kappa[index].spirit_animal + '</div>' +
    '<div>' + "<b>Shoutout: </b>" + kappa[index].shoutout + '</div>' +
    '<img src="' + kappa[index].image + '">');

  index++;
  if (index > kappa.length -1) {
    index = 0;
  }
}, time);
//click previous button - previous kappa
$('.click').on('click', '.prev', function(){
  index--;
  time = 20000;
  if(index == -1) {
    index = kappa.length -1;
  }
  $('.people').children().remove();
  $('.people').append(
    '<div>' + "<b>Name: </b>" + kappa[index].name + '</div>' +
    '<div>' + "<b>From: </b>" + kappa[index].location + '</div>' +
    '<div>' + "<b>Spirit Animal: </b>" + kappa[index].spirit_animal + '</div>' +
    '<div>' + "<b>Shoutout: </b>" + kappa[index].shoutout + '</div>' +
    '<img src="' + kappa[index].image + '">');
});
//click next button - next kappa
$('.click').on('click', '.next', function(){
  index++;
  time = 20000;
  if(index > kappa.length -1) {
    index = 0;
  }
  $('.people').children().remove();
  $('.people').append(
    '<div>' + "<b>Name: </b>" + kappa[index].name + '</div>' +
    '<div>' + "<b>From: </b>" + kappa[index].location + '</div>' +
    '<div>' + "<b>Spirit Animal: </b>" + kappa[index].spirit_animal + '</div>' +
    '<div>' + "<b>Shoutout: </b>" + kappa[index].shoutout + '</div>' +
    '<img src="' + kappa[index].image + '">');
});

}
});
});








//
