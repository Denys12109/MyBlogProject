const container = document.getElementById('todoContainer');

const addNewTitleInp = document.getElementById('postTitleInput');
const addNewDescInp = document.getElementById('postDescInput');
const addNewPostBtn = document.getElementById('postButton');

const addNewCommentInp = document.getElementById('postCommentInput');
const addNewCommentBtn = document.getElementById('postCommentButton');
 

const main = async () => {

    const response = await fetch('https://c5r5vi7x49.execute-api.eu-central-1.amazonaws.com/dev');
    const data = await response.json();

    data.posts.forEach(todo => {

        container.innerHTML += 
            `<div class="container_posts">
                <h2 class="title">Title: ${todo.title}</h2>
                <p class="content">Description: ${todo.content}</p>

                <div class="container_comment">
                  <input type="text" id="postCommentInput" name="post-comment" placeholder="Please, add comment">
                  <button type="button" id="postCommentButton">Submit</button>
                  <p class="comment">Comment: ${todo.comment}</p>
                </div>
            </div>`
        console.log('todo => ', todo);

    });
    
    console.log('data => ', data.posts);
}

main();

addNewPostBtn.addEventListener('click', async () => {
    if (addNewTitleInp?.value?.length || addNewDescInp?.value?.length) {
        
        console.log('add title =>', addNewTitleInp.value)
        console.log('add description =>', addNewDescInp.value)
        
        const response = await fetch('https://c5r5vi7x49.execute-api.eu-central-1.amazonaws.com/dev', {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                newPost: addNewTitleInp.value,
                newDesc: addNewDescInp.value,
            })
        });

        const data = await response.json();
        
        container.innerHTML += 
            `<div class="container_posts">
            
                <h2 class="title">Title: ${addNewTitleInp.value}</h2>
                <p class="content">Description: ${addNewDescInp.value}</p>

            </div>`

        console.log('add new info response => ', data)

    }
});

addNewCommentBtn.addEventListener('click', async () => {
  if (addNewCommentInp?.value?.length) {

    console.log('add comment =>', addNewCommentInp.value)

    const response = await fetch('https://c5r5vi7x49.execute-api.eu-central-1.amazonaws.com/dev', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            newComment: addNewCommentInp.value
        })
    });

    const data = await response.json();

    container.innerHTML +=
        `<div class="container_posts">
        
            <div class="container_comment">
                <input type="text" id="postCommentInput" name="post-comment" placeholder="Please, add comment">
                <button type="button" id="postCommentButton">Submit</button>
                <p class="comment">Comment: ${addNewCommentInp.value}</p>
            </div>

        </div>`

    console.log('add comment info response => ', data)
  }
});










