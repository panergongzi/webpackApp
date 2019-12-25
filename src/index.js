import './style.css'
import imgs from './assets/colony.png'
import consoleHello from './print.js'
console.log(process.env.NODE_ENV);
console.log(11111111)
function init() {
    var Div=document.createElement('div');
    document.body.appendChild(Div);
    // var node = document.querySelector('div');
   
    Div.classList.add('red_');
    Div.innerHTML="你是傻子吗？";
    var imgNode=document.createElement('img');
    imgNode.src=imgs;
    document.body.appendChild(imgNode)
    consoleHello();
}
init()