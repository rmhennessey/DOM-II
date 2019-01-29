// Your code goes here


//----#1 - mouseover

const signUpBtn = document.querySelector(".btn"); //only applying to first vs. all btns
    signUpBtn.addEventListener('mouseover', e => {
        e.target.style.background = "yellow";

    });

//----#2 - mouseout

    signUpBtn.addEventListener('mouseout', e => { //only applying to first vs. all btns
        e.target.style.background = "#17A2B8";
      });

//----#3 - doubleclick


    signUpBtn.addEventListener('dblclick', e => { //only applying to first vs. all btns
        e.target.style.background = "black";
      });


//----#4 - click

    signUpBtn.addEventListener('click', e => { //only applying to first vs. all btns
        e.target.style.background = "pink";
      });

//----#5 - mousemove

signUpBtn.addEventListener('mousemove', e => { //only applying to first vs. all btns
    e.target.style.background = "orange";
  });



// mousemove

const underYellow = document.querySelector(".content-destination h2"); //only applying to first vs. all btns
underYellow.addEventListener('mousemove', e => {
    e.target.style.background = "yellow";

});

// mouseout

    underYellow.addEventListener('mouseout', e => { //only applying to first vs. all btns
        e.target.style.background = "white";
  });

// mouseover h2 text

  underYellow.addEventListener('mouseover', e => {
    e.target.style.color = "blue";
});

//----#xx - keydown

const keyed = document.querySelector(".container .home");
keyed.addEventListener('keydown', e => {
    console.log("A key was clicked");
});


