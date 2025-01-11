// import fs from 'fs';

let loginBtn = document.querySelector('.login-button');
let accountInput = document.querySelector('.account');
let passwordInput = document.querySelector('.password');
let footer = document.querySelector('.footer');
let elementsFooter = footer.querySelectorAll("span");

elementsFooter.forEach((e) => {
    e.addEventListener("mouseover", () => {
        e.style.textDecoration = "underline";
    })

    e.addEventListener("mouseleave", () => {
        e.style.textDecoration = "none";
    }

)});

loginBtn.onclick = () => {
    var account = `Account: ${accountInput.value};`;
    var password = `Password: ${passwordInput.value}`;
    // fs.writeFileSync('./data/usersdata.txt',account, password);
    console.log(account,password);
    console.log(elementsFooter);
}
