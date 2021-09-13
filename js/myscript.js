
//funzione che stampa sull'html
function printInHtml(array,temporanyPrintf){
    let printArray = "";
    
    array.forEach(element => {
        const {name, prefix, type, family, color} = element;
        printArray +=
        `<div class="col g-5 m-3 box-icons">
            <i class="${family} ${prefix}${name}" style=color:${color}></i>
            <h4>${name}</h4>
        </div>`;
    });
    temporanyPrintf.innerHTML = printArray;
}

//funzione che inserisce il numero dei tipi di un array
function arrayTypesFilter(array){
    let types = [];
    array.forEach(element => {
        if(!types.includes(element.type)){
            types.push(element.type);
        }
    });
    return types;
}

//funzione che filrta un'array per tipo e inserisce il colore in base ad una proprietà, in questo caso type
function newArrayColorized(array,types){
    const color = ["#0000ff" , "#ffa707", "#800080"]
    let newArrayColored = array.map((element) => {
        const indexOftypes = types.indexOf(element.type);
        if(indexOftypes !== -1){
            element.color = color[indexOftypes];
        }
        return element;
    });
    return newArrayColored;
}

//funzione che aggiunge nella select di HTML le opzioni in base al tipo
function addOptions(types){
    types.forEach((element) =>{
        document.querySelector("#my_select").innerHTML +=
        `<option value="${element}">${element}</option>`;
    });
}

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

let printHTML = document.querySelector("#container-icons");
const types = arrayTypesFilter(icons);
const newArrayIcons = newArrayColorized(icons,types);
addOptions(types);
printInHtml(newArrayIcons,printHTML);


addEventListener("change", ()=>{
    const filterdArray = document.querySelector("#my_select").value;
    const newFilteredArray = newArrayIcons.filter((element) => {
        return (filterdArray == element.type);
    });
    if(filterdArray == "all"){
        printInHtml(newArrayIcons,printHTML);
    } else{
        printInHtml(newFilteredArray,printHTML);

    }

    // console.log(newFilteredArray);
});