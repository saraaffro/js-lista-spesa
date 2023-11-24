// creo la lista della spesa
const list = ["cotolette", "patate", "carote", "melograno", "the"];
console.log(list);

// seleziono ul
const ulList = document.getElementById("listaspesa");

// seleziono input e button
const addElement = document.querySelector(".addelement");
const sendButton = document.querySelector(".sendbutton");

// scorro la lista della spesa (ciclo while)
let i = 0;

while(i < list.length){

    // salvo elemento della lista
    let elementList = list[i];
    
    // creo li
    const ulElement = `<li>${elementList}</li>`
    
    // output dell'elemento
    ulList.innerHTML += ulElement;
    i++

    
  
}

sendButton.addEventListener("click", function(){
    
    const elementAdded = addElement.value;
    
    if(elementAdded !== list[i]){
        list.push(elementAdded);
        console.log(list);

        // creo li
        const ulElementAdded = `<li>${elementAdded}</li>`

        // output dell'elemento
        ulList.innerHTML += ulElementAdded;
    }
})
// const elementAdded = prompt("aggiungi un elemento alla lista");

// list.push(elementAdded);



