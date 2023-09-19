// Function to handle new blog post submission
const newBlogPostHandler = async (event) => {
  event.preventDefault();

  // Collect values from the form
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();

  if (title && content) {
    // Send a POST request to the create post API endpoint
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If post creation is successful, reload the page to display the new post
      document.location.reload();
    } else {
      // Display an alert with the error message if post creation fails
      const errorMessage = await response.json();
      alert(errorMessage.message);
    }
  }
};

// Function to handle blog post deletion
const deleteBlogPostHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const postId = event.target.getAttribute('data-id');

    // Send a DELETE request to the delete post API endpoint
    const response = await fetch(`/api/posts/${postId}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      // If post deletion is successful, reload the page to update the list of posts
      document.location.reload();
    } else {
      // Display an alert with the error message if post deletion fails
      const errorMessage = await response.json();
      alert(errorMessage.message);
    }
  }
};

// Add event listener for new blog post submission
document.querySelector('.new-blog-post-form').addEventListener('submit', newBlogPostHandler);

// Add event listener for blog post deletion
document.querySelector('.blog-post-list').addEventListener('click', deleteBlogPostHandler);