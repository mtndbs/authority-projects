import { vipArr } from "./vipJson.js";
//empty array
let theRichest = [];
//prepair constuctor for craeting classes  vipArr data
class richs {
  constructor(flag=0, name, worth, birth_year, source, country, image) {
    this.flag = flag;
    this.name = name;
    this.worth = worth;
    this.birth_year = birth_year;
    this.source = source;
    this.country = country;
    this.image = image;
  }
//printing method inside the prototype class
  printData() {
    document.getElementById("screen").innerHTML += `
    <div class="card rich-div m-5" style="width: 18rem;">
    <img src="${this.image}" class="card-img-top" alt="${this.name}">
    <div class="card-body">
      <h5 class="card-title">${this.name}</h5>
      <p class="card-text">worth: ${this.worth},</p>
      <p class="card-text">birth_year: ${this.birth_year},</p>
      <p class="card-text">source: ${this.source},</p>
      <p class="card-text">country: ${this.country},</p>
      </div>
      </div>
      `;
  }
}

    
// loop for pushing the classes inside the new array
for (let man of vipArr) {
  let rich = new richs(
    man.flag,
    man.name,
    man.worth,
    man.birth_year,
    man.source,
    man.country,
    man.image
  );
  theRichest.push(rich);
}

// fillter func
let mytext = ()=>{
  document.getElementById("screen").innerHTML = " ";
  theRichest.forEach((rich) => {
    rich.printData();
  });


  let richDivs = document.querySelectorAll(".rich-div");
  richDivs.forEach((singleDiv, index) => {
    
    singleDiv.addEventListener("click",() => {
      theRichest[index].flag = 1;
      let newRiches = theRichest.filter((richFlag) => richFlag.flag < 1);
    
      console.log(newRiches);
      theRichest = newRiches
     
    mytext() // calling the function again!

    });
  });

  
}

console.log(theRichest);
//button for present the data inside the html
let myBtn = document.getElementById("btn");
myBtn.addEventListener("click", ()=>{
 mytext()
});



