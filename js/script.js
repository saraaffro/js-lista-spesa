// creo la lista della spesa
const list = ["cotolette", "patate", "carote", "melograno", "the"];
console.log(list);

// seleziono ul
const ulList = document.getElementById("listaspesa");


// scorro la lista della spesa (ciclo while)
let i = 0;
while(i < list.length){

    // salvo elemento della lista
    let elementList = list[i];
    
    // creo li e inserisco in html
    const ulElement = `<li>${elementList}</li>`
    

    // output dell'elemento
    ulList.innerHTML += ulElement;
    i++
}
    
