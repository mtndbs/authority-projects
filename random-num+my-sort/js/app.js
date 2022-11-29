let screen = document.getElementById('output')
let randomBtn = document.getElementById('random')
let sortBtn = document.getElementById('sort')
let myArr = [];
let tempArr = [];
let lowerArr = [];
const randomFunc =()=>{
while (myArr.length < 15) {
  let num = Math.floor(Math.random()*100);
  myArr.push(num);
}
}
console.log(myArr);


const myRecurse = (x,i) => {
  if (i !== 100) {
    if (myArr[x] === i) {
      let lowerNum = myArr[x];
      tempArr.push(lowerNum);
      myRecurse(0,++i)
    }else if(x===100){
        myRecurse(0,++i)
    }else{
        myRecurse(++x,i)
    }
}else{
console.log(tempArr)
}
};


randomBtn.addEventListener('click',() => {
    console.log('helo')
      randomFunc()
      screen.innerHTML = myArr 
})

sortBtn.addEventListener('click',() => {
     myRecurse(0,0)
     let lowArr = tempArr.filter((num)=> num <= 30)
     let statArr = tempArr.filter((num)=> num > 30)
     let middleArr = statArr.filter((num)=> num < 60)
     let highArr = statArr.filter((num)=> num > 60)

     screen.innerHTML = `
     <p>${lowArr}</p>
     <p>${middleArr}</p>
     <p>${highArr}</p>
     `
})
