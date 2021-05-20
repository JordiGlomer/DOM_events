
let img = document.getElementsByTagName('img')[0];
let section = document.getElementsByTagName('section')[0];
let boton1 = document.getElementsByTagName('button')[0];
let lectura = ()=>{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    img.style.display = 'none';
};


let boton2 = document.getElementsByTagName('button')[1];
let normal =()=>{
    document.body.style.backgroundColor='blanchedalmond';
    document.body.style.color='black';
    img.style.display = 'block';
   
};

boton1.addEventListener('click',lectura);
boton2.addEventListener('click',normal);