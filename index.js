const button = document.getElementById('button');

button.onclick = function onClickButton() {
    const n1 = document.getElementById('n1').value;
    const operator = document.getElementById('operator').value;
    const n2 = document.getElementById('n2').value;
    document.getElementById('result').textContent = eval(n1+operator+n2);
};