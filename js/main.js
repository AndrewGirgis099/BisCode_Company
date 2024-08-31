// document.addEventListener("DOMContentLoaded", function() {
//     const scrollToTopBtn = document.getElementById("scrollToTopBtn");
//     const whatsappBtn = document.getElementById("whatsappBtn");

//     function checkScroll() {
//         if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
//             scrollToTopBtn.style.display = "block";
//             whatsappBtn.style.display = "block";
//         } else {
//             scrollToTopBtn.style.display = "none";
//             whatsappBtn.style.display = "none";
//         }
//     }

//     let isScrolling; // Variable to track the scroll state

//     window.onscroll = function() {
//         if (isScrolling) {
//             cancelAnimationFrame(isScrolling);
//         }

//         isScrolling = requestAnimationFrame(checkScroll);
//     };

//     // Scroll to the top of the document when the user clicks on the scroll-to-top button
//     scrollToTopBtn.addEventListener("click", function() {
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth" // For smooth scrolling
//         });
//     });
// });
