const form = document.getElementById('form-confirm');
const valA = document.getElementById('A');
const valB = document.getElementById('B');
const valor-A = valA;
const valor-B = valB;
let formValid =false;

function campoValid (valA, valB){
    return valB > valA;
}
form.addEventListener('submit', function(e){
e.preventDefault();

const valA = parseFloat(document.getElementById('valor-A'.value));
const valB = parseFloat(document.getElementById('valor-B'.value));
const messageSuccess = `resultado correto o valaor de B:<b> ${valB.value} é maior que o valor de A ${valA.value}</b>`;
const messageSuccess = `resultado errado de  B:<b> ${valB.value} é menor que o valor de A ${valB.value}</b>`;


formValid = camporValid(valor-A.value, valor-B.value);
if (formValid ) {
    doccument.querySelector('.message-success').innerHTML = messagesucess;
    alert(messageSuccess);

    valor-A.value = '';
    valor-B.value = '';
} else {
    
        document.querySelector('.message-error').innerHTML = mensagemErro;
        alert(mensagemErro);
    
    }
    
})
