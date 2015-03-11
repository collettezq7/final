var myHeader = document.querySelector("header");

var h1Element = document.createElement("h1");
  h1Element.setAttribute("class", "h1Header");
  h1Element.textContent = "Website Header";
  var text = h1Element.textContent;
  myHeader.appendChild(h1Element);

var pElement = document.createElement("p");
  pElement.setAttribute("class", "pElement");
  pElement.textContent = "Tagline";
  var pText = pElement.textContent;
  myHeader.appendChild(pElement);

var nav = document.createElement("nav");
  myHeader.appendChild(nav);
var ul = document.createElement("ul");
  myHeader.appendChild(ul);

var li = document.createElement("li");
var a = document.createElement("a");
  a.setAttribute('href','index.html');
  //li.classList.add("current");
  a.textContent = "Home";
  ul.appendChild(li);
  li.appendChild(a);

var li2 = document.createElement("li");
var a2 = document.createElement("a");
  a2.setAttribute('href','about.html');
  a2.textContent = "About";
  ul.appendChild(li2);
  li2.appendChild(a2);

var li3 = document.createElement("li");
var a3 = document.createElement("a");
  a3.setAttribute('href','image-gallery.html');
  a3.textContent = "Image Gallery";
  ul.appendChild(li3);
  li3.appendChild(a3);


var li4 = document.createElement("li");
var a4 = document.createElement("a");
  a4.setAttribute('href','contact.html');
  a4.textContent = "Contact";
  ul.appendChild(li4);
  li4.appendChild(a4);
myHeader.appendChild(pElement);



//Footer Code
$.ajax({
    url : "http://httpbin.org/get",
    type: "GET",
}).done(function(response){
  var results = response.origin;
    console.log(response.origin);

  var IPAddress = $("<p>" + response.origin + "</p>");
    $("footer").append(IPAddress);
});

$(function() {
    $( "#datepicker" ).datepicker();
  });








// 1 = 1  = 2.61/ 60pts     = 4.35/ 100%   /*  header and footer  */
// 2 = 1  = 2.61/ 60pts     = 4.35/ 100%   /*  Navigation menu  */
// 3 = 1  = 2.61/ 60pts     = 4.35/ 100%   /*  Four HTML documents */
// 4 = 5  = 13.05/60pts     = 21.75/100%   -- Need to use $.ajax() mothod still and use Parsley.js to validate
// 5 = 3  = 7.83 /60pts     = 13.05/100%   /* Display user's IP address in bottom */
// 6 = 3  = 7.83 /60pts     = 13.05/100%   -- Implement a jQueryUI widget of your choice
// 7 = 5  = 13.05/60pts     = 21.75/100%   -- Retrieve and parse out at least eight images from the Flickr API
// 8 = 4  = 10.44/60pts     = 17.40/100%   /* Make use of the HTML5 local storage API to store your First and Last name, and course title */
//-------------------------------------------
// Actually   60.05pts    and     100.05%

