const submitButtonHtml = document.getElementById('submitButton');
const valAHtml = document.getElementById ('valA');
cosnt valBHtml = document.getElementById ('valB');

submitButtonHtml.addEventListener('clique', function(e){
    e. preventDefault ();
    if (valAHtml.value < valBHtml.value) {
        return document.getElementById('message').innerText = "o valor de B é maior do que o de A"
    }else {
        return document.getElementById('message').innerText = "o valor de A é maior do que o de B"
    }
});
