document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.post-create').addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const title = document.querySelector('.title-create').value.trim();
      const content = document.querySelector('.content-create').value.trim();
      
  
      if ( title && content) {
        try {
          const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json' },
          });
  
          if (response.ok) {
            const newPost = await response.json();
            console.log(newPost);
            document.location.replace('/');
          } else {
            alert('Failed to create post.');
          }
        } catch (error) {
          console.log('Error creating post:', error);
          alert('Failed to create post. Please check the console for more details.');
        }
      }
    });
  });

  
  document.querySelector(".new-post").addEventListener('click', async (event) => {
    event.preventDefault(); 
    const createPost = document.querySelector(".post-create")
    const newPost = document.querySelector(".new-post")
    createPost.classList.remove("hide")
    newPost.classList.add("hide")
  })