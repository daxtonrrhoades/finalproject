// -----Favorite Characters List-----
const input = document.querySelector("#fav-char");
const favButton = document.querySelector("#fav-btn");
const favList = document.querySelector("#fav-list");

favButton.addEventListener('click', () => {
    displayList(input.value);
    favCharArray.push(input.value);
    setFavCharList();

    input.value = '';
    input.focus();
});

let favCharArray = getFavCharList() || [];

favCharArray.forEach(character => {
    displayList(character);
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;

    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    favList.append(li);

    deleteButton.addEventListener('click', function () {
        favList.removeChild(li);
        deleteCharacter(li.textContent);
        input.focus();
    });
}

function setFavCharList() {
    localStorage.setItem('myFavCharList', JSON.stringify(favCharArray));
}

function getFavCharList() {
    return JSON.parse(localStorage.getItem('myFavCharList'));
}

function deleteCharacter(character) {
    character = character.slice(0, character.length - 1);
    favCharArray = favCharArray.filter((item) => item !== character);
    setFavCharList();
}