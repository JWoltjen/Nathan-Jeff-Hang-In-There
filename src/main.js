// query selector variables go here 👇
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [

];
var currentPoster;

getRandomPoster();



// event listeners go here 👇
document.querySelector('.show-random').addEventListener('click', getRandomPoster);
document.querySelector('.show-form').addEventListener('click', showPosterFormSection);
document.querySelector('.show-main').addEventListener('click', showMainPosterSection);
document.querySelector('.save-poster').addEventListener('click', makeSavedPostersObject);
document.querySelector('.back-to-main').addEventListener('click', showMainPosterSection);
document.querySelector('.show-saved').addEventListener('click',showSavedPosterSection);
document.querySelector('.make-poster').addEventListener('click', makeFormPoster);

// functions and event handlers go here 👇
// (we've provided one for you to get you started)!

//~~~~~~~~~~~~~~~~~~RandomizePoster
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomPoster() {
  currentPoster = new Poster(randomizePoster(), randomizeTitle(), randomizeQuote());
  return currentPoster;
}

function randomizePoster() {
  posterImage.src = images[getRandomIndex(images)];
  return posterImage.src;
}

function randomizeTitle() {
  posterTitle.innerText = titles[getRandomIndex(titles)];
  return posterTitle.innerText;
}

function randomizeQuote() {
  posterQuote.innerText = quotes[getRandomIndex(quotes)];
  return posterQuote.innerText;
}

//~~~~~~~~~~~~~~~~~~~~~Navigation Functions~~~~~~~~~~~~~~~~~~~~~

function showPosterFormSection(){
  document.querySelector('.main-poster').classList.add('hidden')
  document.querySelector('.saved-posters').classList.add('hidden')
  document.querySelector('.poster-form').classList.remove('hidden')
}
function showMainPosterSection(){
  document.querySelector('.main-poster').classList.remove('hidden')
  document.querySelector('.saved-posters').classList.add('hidden')
  document.querySelector('.poster-form').classList.add('hidden')
}
function showSavedPosterSection(){
  document.querySelector('.main-poster').classList.add('hidden')
  document.querySelector('.saved-posters').classList.remove('hidden')
  document.querySelector('.poster-form').classList.add('hidden')
}

//~~~~~~~~~~~~~~~~~~Custom Poster Functions~~~~~~~~~~~~~~~~~~~~~~
function makeFormPoster() {
  document.querySelector('.make-poster').type = "button";
  showMainPosterSection();
  displayInputs();
  pushInputs()
  makeUserPosterObject()
}

function makeUserPosterObject() {
  currentPoster = new Poster(displayImage(), displayTitle(), displayQuote());

  return currentPoster;
}

function makeSavedPostersObject() {
  showSavedPosterSection();
  currentPoster = new Poster(displaySavedImage(), displaySavedTitle(), displaySavedQuote());
  checkForDuplicates(currentPoster)
  displaySavedPosters(currentPoster)
}

//~~~~~~~~~~~~~~~~~Push Input Functions~~~~~~~~~~~~~~~~~~~~~
function pushInputs(){
    pushTitleArray();
    pushImageArray();
    pushQuoteArray();
}
function pushTitleArray() {
  titles.push(document.querySelector("#poster-title").value);
}

function pushImageArray(){
  images.push(document.querySelector("#poster-image-url").value);
}

function pushQuoteArray(){
  quotes.push(document.querySelector("#poster-quote").value)
}

//~~~~~~~~~~~~~~~~~~~Display Input Functions~~~~~~~~~~~~~~
function displayInputs() {
  displayImage();
  displayTitle();
  displayQuote();
}

function displayImage() {
  posterImage.src = document.querySelector('#poster-image-url').value;
}

function displayTitle() {
  posterTitle.innerText = document.querySelector('#poster-title').value;
}

function displayQuote() {
  posterQuote.innerText = document.querySelector('#poster-quote').value;
}

function displaySavedImage() {
  var saveImage = posterImage.src;
  return saveImage
}

function displaySavedTitle() {
  var saveTitle = posterTitle.innerText;
  return saveTitle;
}

function displaySavedQuote() {
  var saveQuote = posterQuote.innerText;
  return saveQuote;
}

//~~~~~~~~~~~~~~~~~~~Save To Array Functions~~~~~~~~~~~~~~
function saveToPostersArray(poster) {
  savedPosters.push(poster)
}
function checkForDuplicates(poster){
  if (savedPosters.length !== 0){
  for (var i = 0; i<savedPosters.length; i++){
  if (poster !== savedPosters[i]){
    displaySavedPosters();
    savedPosters.push(poster)
        }
      }
    } else{ savedPosters.push(poster)
  }
}

function displaySavedPosters(poster){

  var toBePrinted = document.querySelector('.saved-posters-grid');
  var div = document.createElement('div')

  div.innerHTML = `
  <img class = 'mini-poster' src = "${poster.imageURL}" >
  <h2 class = 'mini-poster'> ${poster.title.toUpperCase()} </h2>
  <h4 class = 'mini-poster'> ${poster.quote} </h4>
`;
  toBePrinted.appendChild(div)
}
