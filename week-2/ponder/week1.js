
let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    document.getElementById('html').classList.remove('highlight')
    document.getElementById('css').classList.remove('highlight')
    document.getElementById('js').classList.remove('highlight')
    if (codeValue == 'html') {
        let newElement = document.getElementById('html');
        newElement.classList.add('highlight')
    }
    if (codeValue == 'css') {
        let newElement = document.getElementById('css');
        newElement.classList.add('highlight')
    }
    if (codeValue == 'js') {
        let newElement = document.getElementById('js');
        newElement.classList.add('highlight')
    }
});                 