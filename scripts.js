var i=0
var input = document.getElementById("input")
var title= document.getElementById("title")

input.addEventListener('change', upDate)
function upDate(e) {
    title.textContent = e.target.value;
    const number = Number(e.target.value)
    console.log(Number(e.target.value))
    
    while (i <= 12 ){
        var result = number * i
        const node = document.createElement ("li")
        const textnode = document.createTextNode( number + " x " + i + "=" + result)
        node.appendChild(textnode)
        document.getElementById("demo").appendChild(node)
        i += 1
    }
  }








