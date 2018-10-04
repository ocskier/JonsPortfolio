function Project (url,pic,name) {
    this.Url = url;
    this.Pic=pic;
    this.Name=name;
}

var Proj1=new Project("https://ocskier.github.io/Train-Scheduler/","assets/images/railway-station-619082_1280.jpg","Train Scheduler");
var Proj2=new Project("https://ocskier.github.io/Trivia-Game/","assets/images/question-mark-1872665_1280.jpg","Trivia Game");
var Proj3=new Project("https://ocskier.github.io/unit-4-game/","assets/images/main-thumb-t-1785517-200-boztfctkwxbzmfjwurneimbimaluhaxk.jpeg","Star Wars Battle");
var Proj4=new Project("https://ocskier.github.io/Word-Guess-Game/","assets/images/Screenshot (5).png","Word Game");
var Proj5=new Project("https://jenguin777.github.io/project1/index.html","assets/images/tithe-favicon.1.png","Tithe App");
var Proj6=new Project("https://ocskier.github.io/Api-Ajax-Hw/","assets/images/window-615427_1920.jpg","Api Demo");
var Proj7=new Project("https://github.com/ocskier/LIRI-Node-App","assets/images/bot.jpg","LIRI Bot");
var Proj8=new Project("https://github.com/ocskier/Bamazon","assets/images/fancycrave.jpg","Bamazon");
var Proj9=new Project("https://nameless-plateau-29518.herokuapp.com/","assets/images/love-logo-hi.png","Match Maker");
var Proj10=new Project("https://intense-wildwood-45271.herokuapp.com/","assets/images/fabio-alves-773406-unsplash.jpg","Burger App");
var Proj11=new Project("https://fierce-basin-24175.herokuapp.com/","assets/images/fabio-alves-773406-unsplash.jpg","Serialize Burger");
var Proj12=new Project("https://secret-gorge-60402.herokuapp.com/","assets/images/jeshoots-com-436787-unsplash.jpg","Aristotle");

var projectsArray = [];
projectsArray.push(Proj1,Proj2,Proj3,Proj4,Proj5,Proj6,Proj7,Proj8,Proj9,Proj10,Proj11,Proj12);
var projObj = {Projects: projectsArray};

module.exports = projObj;