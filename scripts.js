var i=0
var input = document.getElementById("inputNumber")
var title= document.getElementById("titleNumber")

input.addEventListener('change', upDate)
function upDate(e) {
    title.textContent = e.target.value;
    const number = Number(e.target.value)
    console.log(Number(number))

    while (i <= 12 ){
        var result = number * i
        const node = document.createElement ("li")
        const textnode = document.createTextNode( number + " x " + i + "=" + result)
        node.appendChild(textnode)
        document.getElementById("demoNumber").appendChild(node)
        i += 1
    }
  }


//Use of conditional if else
const selectWeather= document.getElementById('weather')
const pWeather = document.getElementById('pWeather');

selectWeather.addEventListener('change', setWeather);

function setWeather (){
    const choice = selectWeather.value;

    if (choice === 'sunny'){
        pWeather.innerText= "Use of sunglasses is welcome"
    }
   else if( choice === 'rainy'){
    pWeather.textContent= "Bring your umbrella"
   }
   else if( choice === 'overcast'){
    pWeather.textContent = 'No need for sunblock'
   }
   else {
    pWeather.textContent='';
   }
}
 
//Use of conditional Switch
const selectFood = document.getElementById('food')
const pFood = document.getElementById('pFood')

selectFood.addEventListener('change', setFood)

function setFood (){
    const choice= selectFood.value
    switch(choice){
        case 'soup':
            pFood.textContent='Azteca spicy tomato soup'
            break;
        case 'sandwich':
            pFood.textContent='Toasted meat sandwich with'
            break;    
        case 'pizza':
            pFood.textContent='Cheese and peperoni pizza'
            break;    
        default:
            pFood.textContent=''
    }
}

//Use of ternary operator
const selectColor = document.getElementById('selectColor')
const allHtml = document.querySelector('html')

function upDateColor(bgColor,textColor){
    allHtml.style.backgroundColor =  bgColor
    allHtml.style.color = textColor
}

selectColor.addEventListener('change', ()=> selectColor.value === 'black' ? upDateColor('black', 'white') : upDateColor('white' , 'black'));


