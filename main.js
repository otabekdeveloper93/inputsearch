const firstName = document.querySelector('#firstName'),
lastName = document.querySelector('#lastName'),
age = document.querySelector('#age'),
tel = document.querySelector('#tel'),
submit = document.querySelector('#submit');
let container = document.querySelector('.content');

submit.addEventListener('click', handler);



function handler(e){
    e.preventDefault();
    let firstVal = firstName.value,
    lastVal = lastName.value,
    ageVal = age.value,
    telVal = tel.value;
    
    const bodyInform = {
        firstName: firstVal,
        lastName: lastVal,
        age: ageVal,
        tel: telVal
    }
    let lists = document.createElement('li');
    lists.className = 'body-list';
    lists.innerHTML = `<h2 id="first-out">${bodyInform.firstName}</h2>
                       <h2 id="last-out">${bodyInform.lastName}</h2>
                       <p id="age-out">${bodyInform.age}</p>
                       <p id="number-out">${bodyInform.tel}</p> `;
    container.appendChild(lists);

}


