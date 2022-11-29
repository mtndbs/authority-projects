// localStorage.removeItem("key")
let myCities = []
console.log('hello')
let myTitle = document.getElementById('my-title')
let myInput = document.getElementById('my-input')
let myBtn = document.getElementById('push-btn')
let getBtn = document.getElementById('get-btn')
let mySelect = document.getElementById('my-select')

const randomFunc =()=>{
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

myTitle.addEventListener('click',()=>{
    myTitle.style.color = randomFunc()
})


myBtn.addEventListener('click',() => { 
    
    let tempValue = myInput.value
     myCities.push(tempValue)
     console.log(myCities)
     myInput.value = ''

     let arrJson = JSON.stringify(myCities);
     localStorage.setItem('cities', arrJson)

mySelect.innerHTML += `
<option value="${tempValue}">${tempValue}</option>
`
myTitle.innerHTML = tempValue
})
    

getBtn.addEventListener('click',() => {
   let getOldCity =  localStorage.getItem('cities')
   let parseOldCity = JSON.parse(getOldCity);
myCities = parseOldCity
console.log(myCities)
for(city of myCities){
    mySelect.innerHTML += `
    <option value="${city}">${city}</option>
    `
}
})
  


mySelect.addEventListener('change',()=>{
    var x = mySelect.selectedIndex;
    let mytest = document.getElementsByTagName("option")[x].value
    myTitle.innerHTML = mytest
})
// mySelect.addEventListener('change',()=>{
// })