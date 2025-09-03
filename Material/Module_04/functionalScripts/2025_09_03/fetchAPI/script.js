const submits = document.getElementById('getText')
submits.addEventListener('click', getTexts)

// function getTexts (e) {
//     e.preventDefault ()

//     fetch ('./sample.txt')
//         .then(function (response) {
//             return response.text()
//         })
//         .then(function (data) {
//             console.log(data)
//         })
// }

function getTexts () {
    fetch ('./sample.txt')
        .then((response) => response.text())
        .then((data) => {
            document.querySelector('#output').innerHTML = data
        })
}


const forUsers = document.querySelector('.getUsers')
forUsers.addEventListener('click', getUsers)

function getUsers () {
    fetch ('./users.json')
        .then((response) => response.json())
        .then((data) => {
            let output = '<h4>Users</h4>'
            data.forEach ((u) => {
                output += `<ul>
                    <li>${u.name}</li>
                    <li>${u.heroName}</li>
                </ul>`
            })
            document.getElementById('output').innerHTML = output
        })
}