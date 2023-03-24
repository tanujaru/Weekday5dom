let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1*******************************
  let title = document.getElementById('main-title');
  console.log(title)
    title.innerHTML = "Hi, DOM hi hi"

  // Part 2**********************

document.body.style.backgroundColor="blue"



  // Part 3*****************************
  let favlist = document.getElementById('favorite-things')
    favlist.removeChild(favlist.lastElementChild);
  // Part 4****************************

function fontSizechan() {
  let Fontch = document.getElementsByClassName('special-title');
  for (let i = 0; i < Fontch.length; i++) {
       Fontch[i].style.fontSize="2rem";
      
  }
}
fontSizechan()

// part5**************************

//let races = document.getElementById('# past-races')
    //    races.parentNode.removeChild(races[3]);
    let races = document.querySelectorAll('#past-races li')
    races[3].remove();


//Part 6*****************************
let pastRaces = document.querySelector('#past-races')
        let newItem1 = document.createElement('LI');
        let newItem2 = document.createElement('LI');

        newItem1.textContent = "California";
        newItem2.textContent = "San Diago";

        pastRaces.append(newItem1);
        pastRaces.append(newItem2)

  //Part 7*********************************
   let mainBlog = document.querySelector('.main');

     let newBlog = document.createElement('DIV');
     newBlog.classList.add('blog-post');
    newBlog.classList.add('purple');


     let newHeading1 = document.createElement('H1');
     newHeading1.textContent = "Create new list of cities1";

    newHeading1.append(newBlog);

    let newHeading2 = document.createElement('H2');
    newHeading2.textContent = "Create new list of cities2";

    newHeading2.append(newBlog);

   mainBlog.appendChild(newBlog)
   newBlog.appendChild(newHeading1)
   newBlog.appendChild(newHeading2)



// Part 8************************

let quotetit = document.querySelector('#quote-title')
quotetit.addEventListener('click', randomQuote)


// Part 9************************

let applyHand = document.querySelectorAll('.blog-post')
applyHand.forEach((handlers) => {
  
    
handlers.addEventListener('mouseout', function(event) {
  event.currentTarget.classList.toggle('purple');
    })
    handlers.addEventListener('mouseenter', (event) => {
        event.stopPropagation()
        event.currentTarget.classList.toggle('red');
    })
})




});









































































































    
    






  




