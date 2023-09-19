const commentFormHandler = async (event) => {
    console.log("Comment form is being submitted!");
    event.preventDefault();
  
    // Get the postId from the data-id attribute of the clicked button
    const postId = document.querySelector('#comment-form').getAttribute('data-id');
    const commentText = document.querySelector('#comment-text').value.trim();
    console.log('Comment Data:', { text: commentText, postId });
  
    if (commentText && postId) {
      // Send a POST request to the create comment API endpoint
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        body: JSON.stringify({ text: commentText }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // If comment submission is successful, reload the page to display the new comment
        document.location.reload();
      } else {
        alert('Failed to submit comment');
      }
    }
  };
  
  // Add event listener for comment form submission
  document.querySelector('#comment-form').addEventListener('submit', commentFormHandler);
  
    