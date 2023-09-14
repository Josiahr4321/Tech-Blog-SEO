document.addEventListener('DOMContentLoaded', function() {

    document.querySelector('.comment-create').addEventListener('click', async (event) => {
      event.preventDefault();
      const postId = event.target.getAttribute('value')
      const comment = document.querySelector('.comment-content').value.trim();
      
  
      if (postId) {
        try {
          const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({comment}), 
            headers: { 'Content-Type': 'application/json' },
          });
          console.log(response)
          if (response.ok) {
            const newComment = await response.json();
            console.log(newComment);
            document.location.replace('/');
          } else {
            alert('Failed to create comment.');
          }
        } catch (error) {
          console.log('Error creating comment:', error);
          alert('Failed to create comment. Please check the console for more details.');
        }
      }
    });
  });

  document.querySelector(".new-comment").addEventListener('click', async (event) => {
    event.preventDefault(); 
    const createComment = document.querySelector(".comment-create")
    const newComment = document.querySelector(".new-comment")
    createComment.classList.remove("hide")
    newComment.classList.add("hide")
  })