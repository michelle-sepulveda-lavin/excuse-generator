let who = ["Mi hermano", "El gato", "El cuco", "Pie grande"];
let action = ["se comió", "se robó", "me vomitó", "me mordió"];
let what = ["mis llaves", "mi tarea", "mi pelo", "mi computador"];
let when = [" cuando iba saliendo", "justo ahora", "hace unos minutos", "antes de la clase"];



const generador = () =>{
    let frase = "";
    frase = frase + who[Math.floor(Math.random() * 4)] + " ";
    frase = frase + action[Math.floor(Math.random() * 4)] + " ";
    frase = frase + what[Math.floor(Math.random() * 4)] + " ";
    frase = frase + when[Math.floor(Math.random() * 4)] + " "; 
    return frase;   
};

document.getElementById("excuse").innerHTML = generador();

