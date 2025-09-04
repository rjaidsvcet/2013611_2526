const forPosts = document.querySelector('.getPosts')
forPosts.addEventListener('click', getPosts)

function getPosts () {
    fetch ('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>response.json())
        .then((data) => {
            let output = '<h3>Posts</h3>'
            data.forEach((p) => {
                output += `
                    <div>
                        <h3>${p.title}</h3>
                        <p>${p.body}</p>
                    </div>
                `
            })
            document.querySelector('.output').innerHTML = output
        })
}

const forPushing = document.querySelector('.formData')
forPushing.addEventListener('submit', addPosts)

function addPosts (e) {
    e.preventDefault()

    let title = document.querySelector('.title').value
    let body = document.querySelector('.body').value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({title : title, body: body})
    })
    .then((res)=>res.json())
    .then((data) => {
        document.querySelector('.output').innerHTML = `${data.title} and ${data.body}`
    })
}




