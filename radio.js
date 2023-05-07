function f1(choice){
    let num = document.getElementById("s1").value
    let result
    switch (choice) {
        case "square":
              result = num * num                            
            break;
        case "cube":
            result = num * num * num
            break;
        case "as":
            result = num
            break;
        default:
            num = 0
            break;
    }
    document.getElementById("s2").innerHTML = `${result}`

 }