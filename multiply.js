var i=0
var number = prompt("Enter a number:");
while (i <= 12 ){
    var result = number * i
    document.getElementById("title").innerHTML=("Table Number" + number )
    const node = document.createElement ("li")
    const textnode = document.createTextNode( number + " x " + i + "=" + result)
    node.appendChild(textnode)
    document.getElementById("demo").appendChild(node)
    i += 1
}

