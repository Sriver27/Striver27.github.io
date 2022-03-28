// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);


// var scroll = window.requestAnimationFrame ||
//              // IE Fallback
//              function(callback){ window.setTimeout(callback, 1000/60)};
// var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

// function loop() {

//     Array.prototype.forEach.call(elementsToShow, function(element){
//       if (isElementInViewport(element)) {
//         element.classList.add('is-visible');
//       } else {
//         element.classList.remove('is-visible');
//       }
//     });

//     scroll(loop);
// }

// // Call the loop for the first time
// loop();

// // Helper function from: http://stackoverflow.com/a/7557433/274826
// function isElementInViewport(el) {
//   // special bonus for those using jQuery
//   if (typeof jQuery === "function" && el instanceof jQuery) {
//     el = el[0];
//   }
//   var rect = el.getBoundingClientRect();
//   return (
//     (rect.top <= 0
//       && rect.bottom >= 0)
//     ||
//     (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//     ||
//     (rect.top >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//   );
// }

document.getElementById("myButton").onclick = function () {
    location.href = "menu.html";
};

document.getElementById("insta").onclick = function () {
    location.href="https://instagram.com/vintagerestrobar?utm_medium=copy_link";
};

