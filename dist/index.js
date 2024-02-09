'use strict' 

var submitted = false;

document.addEventListener('DOMContentLoaded', () => {
    const dynamicHeaderText = document.querySelector('#dynamicHeaderText');
    const dynamicHeaderTextSelection = ["No more failure", "Earn as a student", "Improve your skills", "Optimize your time"]
    var currentIndex = 1;

    function changeHeaderTextWithAnimation() {
        dynamicHeaderText.classList.add('animate-animated');
        setTimeout(() => {
            dynamicHeaderText.textContent = dynamicHeaderTextSelection[currentIndex];
            dynamicHeaderText.classList.remove('animate-animated');
            dynamicHeaderText.classList.add('animate-newContent');
            currentIndex = (currentIndex + 1) % dynamicHeaderTextSelection.length;
        }, 400); 
        setTimeout(() => {
            dynamicHeaderText.classList.remove('animate-newContent');
        }, 800);
    }

    setInterval(changeHeaderTextWithAnimation, 2000);


})