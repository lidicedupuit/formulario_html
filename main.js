const submitButtonHtml = document.getElementById('submitButton');
const valAHtml = document.getElementById ('valA');
const valBHtml = document.getElementById ('valB');

submitButtonHtml.addEventListener('click', function(e){
    e. preventDefault ();
    if (Number(valAHtml.value) < Number(valBHtml.value)) {
        return document.getElementById('mensagem').innerText = "o valor de B é maior do que o de A"
    }else {
        return document.getElementById('mensagem').innerText = "o valor de A é maior do que o de B"
    }
});
