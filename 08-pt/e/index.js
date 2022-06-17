const myObject = {};
myObject['um atributo com espaço'] = 1;
console.log(myObject);
document.querySelector('h1').innerHTML = JSON.stringify(myObject);

const myObject2 = {};
Object.defineProperty(myObject2, 'um outro atributo com espaço', { value: 1 });
console.log(myObject2);
document.querySelector('h2').innerHTML = JSON.stringify(myObject2);
