console.log("JavaScript code is working!");
const commentForm = document.querySelector('.comment-form');
const commentsContainer = document.querySelector('.comments');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = commentForm.querySelector('textarea').value;
  const newComment = document.createElement('div');
  newComment.classList.add('comment');
  newComment.innerHTML = `
    <img src="avatar.jpg" alt="User Avatar">
    <div class="comment-content">
      <h3>You</h3>
      <p>${commentText}</p>
    </div>
  `;
  commentsContainer.appendChild(newComment);
  commentForm.querySelector('textarea').value = '';
});