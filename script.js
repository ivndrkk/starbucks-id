$('#menu-item1').mouseenter(function () {
    $('#panel1').slideDown(200);
})

$('#menu-item1').mouseleave(function () {
    $('#panel1').slideUp(100);
})

$('#menu-item2').mouseenter(function () {
    $('#panel2').slideDown(200);
})

$('#menu-item2').mouseleave(function () {
    $('#panel2').slideUp(100);
})

$('#menu-item3').mouseenter(function () {
    $('#panel3').slideDown(200);
})

$('#menu-item3').mouseleave(function () {
    $('#panel3').slideUp(100);
})

$('#menu-item4').mouseenter(function () {
    $('#panel4').slideDown(200);
})

$('#menu-item4').mouseleave(function () {
    $('#panel4').slideUp(100);
})

$('#menu-item5').mouseenter(function () {
    $('#panel5').slideDown(200);
})

$('#menu-item5').mouseleave(function () {
    $('#panel5').slideUp(100);
})

$('#menu-item6').mouseenter(function () {
    $('#panel6').slideDown(200);
})

$('#menu-item6').mouseleave(function () {
    $('#panel6').slideUp(100);
})

$('#menu-item7').mouseenter(function () {
    $('#panel7').slideDown(200);
})

$('#menu-item7').mouseleave(function () {
    $('#panel7').slideUp(100);
})

$('#menu-item8').mouseenter(function () {
    $('#panel8').slideDown(200);
})

$('#menu-item8').mouseleave(function () {
    $('#panel8').slideUp(100);
})


const btn2 = document.querySelector('#about-but2');
const btn = document.querySelector('#about-but');
const secondBlock = document.querySelector('#about-us');
const thirdBlock = document.querySelector('#menu');
const fourthBlock = document.querySelector('#contact');
const firstBlock = document.querySelector('#home');
const btnMenu = document.querySelector('#menu-but');
const btnContact = document.querySelector('#contact-but');
const cartButton = document.querySelector('#cart')

btn.addEventListener('click', function () {
    secondBlock.scrollIntoView({ behavior: 'smooth' });
});

btn2.addEventListener('click', function () {
    secondBlock.scrollIntoView({ behavior: 'smooth' });
});

btn2.addEventListener('click', function () {
    secondBlock.scrollIntoView({ behavior: 'smooth' });
});

btn2.addEventListener('click', function () {
    secondBlock.scrollIntoView({ behavior: 'smooth' });
});

btnContact.addEventListener('click', function () {
    fourthBlock.scrollIntoView({ behavior: 'smooth' });
});

btnMenu.addEventListener('click', function () {
    thirdBlock.scrollIntoView({ behavior: 'smooth' });
});


var isContacted = false;
async function contactBtnClickHandler(){

    if (isContacted == false){
        document.getElementById("sendBtn").innerHTML="Loading...";
        await new Promise(res => setTimeout(res, 1000));
        document.getElementById("sendBtn").innerHTML="Done";
        isContacted = true;
    }
    else if(isContacted == true){
        return
    }
    

}







