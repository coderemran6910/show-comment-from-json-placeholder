function getComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(comments){
    console.log(comments);
    const commentContainer = document.getElementById('commentContainer');

    for (const comment of comments) {
        const div = document.createElement('div');
        div.classList.add('commentCard')
        div.innerHTML = `
        <h3>Name:  ${comment.name} </h3>
        <h4>Email: ${comment.email} </h4>
        <p>Comment: ${comment.body} </p>
        `;
        commentContainer.appendChild(div)
    }
}

getComments()