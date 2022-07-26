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
const select= document.getElementById('weather')
const pResponse = document.getElementById('pSelect');

select.addEventListener('change', setWeather);

function setWeather (){
    const choice = select.value;

    if (choice === 'sunny'){
        pResponse.textContent= "Use of sunglasses is welcome"
    }
   else if( choice === 'rainy'){
    pResponse.textContent= "Bring your umbrella"
   }
   else if( choice === 'overcast'){
    pResponse.textContent = 'No need for sunblock'
   }
   else {
    pResponse.textContent='';
   }
}
 






