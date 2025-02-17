const number = document.getElementById("san");

let bashtapkySan = 0;
const btn = document.getElementsByClassName("btn");

btn[0].onclick = () => {
    bashtapkySan++; 
    number.innerText = bashtapkySan;

};

btn[1].onclick = () => {
    if (bashtapkySan > 0) { 
        bashtapkySan--;
        number.innerText = bashtapkySan;

    }
};

btn[2].onclick = () => {
    onNumber();
};

function onNumber() {
    bashtapkySan = 0;
    number.innerText = bashtapkySan;
}
