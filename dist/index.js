'use strict' 

var submitted = false;

document.addEventListener('DOMContentLoaded', () => {

    // This function is responsible for changing text with a little opacity transition. Chef's
    function changeTextWithAnimation(textElement, textArray, index) {
        textElement.classList.add('animate-animated');
        setTimeout(() => {
            textElement.textContent = textArray[index];
            textElement.classList.remove('animate-animated');
            textElement.classList.add('animate-newContent');
        }, 900);
        setTimeout(() => {
            textElement.classList.remove('animate-newContent');
        }, 1800);
    }


    // Header Text animation
    const dynamicHeaderText = document.querySelector('#dynamicHeaderText');
    const dynamicHeaderTextSelection = ["No more failure", "Earn as a student", "Improve your skills", "Optimize your time"]
    let firstAnimationDone = false;
    let currentIndex = 1;
    setInterval( () => {
        firstAnimationDone = true
        currentIndex = (currentIndex + 1) % dynamicHeaderTextSelection.length
        changeTextWithAnimation(dynamicHeaderText, dynamicHeaderTextSelection, currentIndex)
    }, 5000);


    // Questions Text animation
    let questionAnswerCount = 1;
    const dynamicQuestionElement = document.querySelector('#question')
    const dynamicQuestions = ["Can’t keep up with lectures?", "Just need help studying for that exam?", "Got questions, need resources, or helpful tips?", "School-work-life balance?", "Worried about cost?"]
    // 
    const dynamicAnswerElement = document.querySelector('#answer')
    const dynamicAnswers = ["Your coach can get you up to speed.", "We’ve got a coach for you.", "More reason you need a personal coach.", "You need an accountability partner.", "Don’t be, you can afford it."]
    // 
    setInterval( () => {
        questionAnswerCount = (questionAnswerCount + 1) % dynamicQuestions.length
        changeTextWithAnimation(dynamicQuestionElement, dynamicQuestions, questionAnswerCount)
        // 
        changeTextWithAnimation(dynamicAnswerElement, dynamicAnswers, questionAnswerCount)
    }, 5000);


    
    // REVEALING FAQ QUESTION'S ANSWER;

    const faqDropDowns = document.querySelectorAll('.faqDropDown');
    faqDropDowns.forEach( (faqDropDown) => {
        faqDropDown.addEventListener('click', () => {
            const id = faqDropDown.dataset.id;
            const faqAnswer = document.querySelector(`#faq${id}`);

            if (faqDropDown.classList.contains('rotate-180')){
                
                // 
                faqDropDown.classList.remove('rotate-180')
                // 
                faqAnswer.classList.add('grid-rows-[0fr]')
                faqAnswer.classList.remove('grid-rows-[1fr]')
            }
            else{
                // 
                faqDropDown.classList.add('rotate-180')
                // 
                faqAnswer.classList.add('grid-rows-[1fr]')
                faqAnswer.classList.remove('grid-rows-[0fr]')
            }
        })
    })


    function reveal(name,custom, item){
        var windowheight = window.innerHeight
        var revealtop = item.getBoundingClientRect().top
        var reavealpoint = 0
        if (revealtop < windowheight - reavealpoint){
            item.classList.add(name)
            item.classList.remove(custom)
        }
        else{
            item.classList.remove(name)
            item.classList.add(custom)
        }
    }

    // 
    function revealAcademicGame(){
        const academicGame = document.querySelector('.academicGame')
        reveal('fadeIn', 'shiftRight', academicGame)
    }

    // 
    function revealReasons(){
        document.querySelectorAll('.reasons').forEach( (reason) => {
            reveal('fadeIn', 'shiftRight', reason)
        })
    }

    // 
    function revealBrigeGapSvg(){
        document.querySelectorAll('.brigeGapSvgs').forEach( (brigeGapSvg) => {
            reveal('fadeIn', 'shiftRight', brigeGapSvg)
        })
    }
    


    window.addEventListener('scroll', () => {
        revealAcademicGame();
        revealReasons();
        revealBrigeGapSvg();

    })


    // Close Modal
    document.querySelector('.closeModalBtn').addEventListener('click', () => {
        document.querySelector('.modal').style.display = 'none'
    })
    

    if(localStorage.getItem('waitlist')){
        document.querySelector('#fakeBtn').style.display = 'block';
        document.querySelector('#realBtn').style.display = 'none';
    }
    else{
        document.querySelector('#realBtn').style.display = 'block';
        document.querySelector('#fakeBtn').style.display = 'none';
    }

    document.querySelector('#fakeBtn').addEventListener('click', () => {
        alert("We see you're eager to join! Rest assured, you're already on the waitlist.")
    })





})