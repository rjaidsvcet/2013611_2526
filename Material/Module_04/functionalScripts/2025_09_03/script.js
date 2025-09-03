const posts = [
    {title : 'First Post', body : 'First Post Body'},
    {title : 'Second Post', body : 'Second Post Body'}
]

function getPosts () {
    setTimeout (() => {
        let output = ''
        posts.forEach((p) => {
            output += `<li>${p.title}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

// function createPosts (p) {
//     setTimeout (()=>{
//         posts.push(p)
//     }, 2000)
// }

// getPosts ()
// createPosts ({
//     title : "Third Post",
//     body : "Third Post Body"
// })

// Callbacks
// function createPosts (p, callback) {
//     setTimeout (()=> {
//         posts.push (p)
//         callback ()
//     }, 2000)
// }

// createPosts ({
//     title : "Third Post",
//     body : "Third Post Body"
// }, getPosts)

// Promise
function createPosts (p) {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            posts.push(p)
            const error = false
            !error ? resolve () : reject('Something is wrong')
        }, 2000)
    })
}

// createPosts({title : "Third Post", body : "Third Post Body"})
//     .then(getPosts)
//     .catch(err => console.log(err))

// Async/Await 
async function init () {
    await createPosts({title : "Third Post", body : "Third Post Body"})
    getPosts()
}

init ()