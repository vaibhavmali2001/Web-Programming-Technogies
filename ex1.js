var arr = []
function f1(){
    let e1 = document.getElementById("i1").value
    let e2 = document.getElementById("i2").value
    arr.push({name:e1,age:e2})
    console.log(arr)
}

function f2(){
    let str = ""
    for(x of arr)
    {
        str = str.concat(x["name"],',',x["age"])
    }
    document.getElementById("p1").innerHTML = `<h1>${str}</h1>`
}