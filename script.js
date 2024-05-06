const url= "https://jsonplaceholder.typicode.com/users" //url Api
const table= document.getElementById("table") //selezione spazio dove inserire i dati
const inputSearch= document.getElementById("input") // selettore dell'input
const select= document.getElementById("select") // selettore del select

//Funzione per la chiamata Api
async function fetchData() {
    try {  //prova a fare questo
      const response = await fetch(url); // chiamata Api e inserisco la risposta nella costante response
      const utenti = await response.json(); // trasformo response in JSON e inserisco nella const UTENTI

      return utenti;  // ritorniamo utenti

    } catch (error) {  // se non ho risposta allora fammi questo
        console.error("Errore:", error);
    }
}

//Funzione per inserire i dati nella pagina
function inserimentoDati(utenti) { 
    table.innerHTML = ''; //pulisco la tabella
    utenti.forEach(utente => {  //per tutti gli "utenti" fai..
        // inserisci queste linee di codice e dati in table
        
        const tr = document.createElement("tr"); //creo un elemento tr per ogni libro
              
        tr.innerHTML = ` 

            <th scope="row">${utente.id}</th>
            <td>${utente.username}</td>
            <td>${utente.name}</td>
            <td>${utente.email}</td>
            <td>${utente.website}</td>
            
        `;
        table.appendChild(tr); //inserisco l'elemento tr a table
    })
          
}


// funzione per filtrare la ricerca in base al select e all'input
function utentiFilter(utenti) {
    console.log(utenti) //verifico che l'array utenti sia disponibile per questa funzione
    const filtrati = utenti.filter(utente => { 

        const searchValue= inputSearch.value; 
        const selectValue = select.value;

        //Inizione Verifiche:

        const output = utente[selectValue].toLowerCase().includes(searchValue.toLowerCase());    
        return output;
    })
    return filtrati;

}


    
fetchData().then((utenti) => {

    inserimentoDati(utenti);

    inputSearch.addEventListener('input', () => {
        const utentiFiltrati = utentiFilter(utenti);
        inserimentoDati(utentiFiltrati);

    })


});


    
