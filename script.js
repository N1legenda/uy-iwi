let son1 = prompt("kerakli sonni kiriting  !")

let son2 = prompt("yana son kiriting !")

let son3 = prompt("ohirgi sonni kiriting !")

if(son1 > son2 && son1 < son3 || son1 > son3 && son1 < son2){
    alert(num1 + " o`tacha")
}else if(son2 > son1 && son2 < son3 || son2 < son1 && son2 > son3){
    alert(son2 + " o`tacha")
}else if(son3 > son1 && son3 < son2 || son3 < son1 && son3 > son2){
    alert(son3 + " o`tacha")
}