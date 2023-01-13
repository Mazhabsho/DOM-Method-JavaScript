//creatElement()
function createparagraph(){
    let x = document.createElement('p');
    let y = document.createTextNode('Paragraph is created');
     x.appendChild(y);
     document.body.appendChild(x);
}

let link = document.querySelector('#myLink');
let href = link.getAttribute('href');
alert(href);

let btn = document.querySelector('.btn');
btn.setAttribute('class', 'click-btn');
btn.setAttribute('disabled', '');