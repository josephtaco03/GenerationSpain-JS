// 1) Algoritmia: Demuestrar que la siguiente cadena "geeksforgeeks" 
// no es un palíndromo

function esPalindromo(cadena) {
    let array = cadena.split("");
    let reverse = array.reverse();

    return cadena == reverse.join("") ? "Si es" : "No es"
}

console.log(esPalindromo("geeksforgeeks"))

// 2) CSS: Diferencias entre flexbox y grid.
// Rpta: - Uno es unidimensional (Flexbox) y el otro bidimensional (Grid)
// - Flexbox trabaja desde el contenido, mientras que Grid funciona desde
// el layout hacia dentro

// 3) HTML:

// 1. creacion de un div
var div = document.createElement('div')
// 2. creacion de un svg   
    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg')
// 3. agregar una clase al div
    div.classList.add("clasediv")
// 4. agregar un estilo que cambie la propiedad color
    div.style.setProperty("color","blue")
    div.setAttribute("id","divId")
// 5. agregar div al body del documento html
    document.body.appendChild(div)
// 6. agregar texto al div
    let text = document.createTextNode("Hello World")
    div.appendChild(text)
// 7. crear hijo antes del div con texto.
    var div2 = document.createElement('div')
    document.body.insertBefore(div2,div)
// 8. buscar los nodos del primer Div
    let childs = div.children;
// 9. dime los elementos que tiene el primer div
    let elements = div.ELEMENT_NODE;
// 10. buscar todos los div de la pagina
    let allDivs = document.body.querySelectorAll("div")
// 11. buscar los div que contiene la clase agregada "clasediv"
    let classDiv = document.body.querySelectorAll("clasediv")
// 12. buscar los divs con el id agregado en el punto 5
    let seekdivsId = document.body.querySelectorAll("divId")