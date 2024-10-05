export function showOrHideComments() {
  // functionality for showing/hiding the comments section

  const showHideBtn = document.querySelector<HTMLButtonElement>('.show-hide');
  const commentWrapper = document.querySelector<HTMLElement>('.comment-wrapper');

  if (!showHideBtn || !commentWrapper) {
    console.error('Required elements not found');
    return; // Exit the function if elements are not found
  }
  commentWrapper.style.display = 'none';

  //COMMENT: Hier habe ich function() durch () => ersetzt
  showHideBtn.onclick = () => {
    const showHideText = showHideBtn.textContent;

    if (showHideText == 'Show comments') {
      showHideBtn.textContent = 'Hide comments';
      commentWrapper.style.display = 'block';
    } else {
      showHideBtn.textContent = 'Show comments';
      commentWrapper.style.display = 'none';
    }
  };
}

export function addingComments() {
  // functionality for adding a new comment via the comments form
  // COMMENT: in dieser Funktion habe ich die "var" mit "const" ersetzt und die function(e) durch (e) => ersetzt

  const form = document.querySelector<HTMLFormElement>('.comment-form'); // Ensure form is a form element
  const nameField = document.querySelector<HTMLInputElement>('#name'); // Ensure nameField is an input element
  const commentField = document.querySelector<HTMLTextAreaElement>('#comment'); // Ensure commentField is a textarea element
  const list = document.querySelector<HTMLUListElement>('.comment-container'); // Ensure list is an unordered list

  if (!form || !nameField || !commentField || !list) {
    console.error('Required elements not found');
    return; // Exit the function if elements are not found
  }

  form.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const listItem = document.createElement('li');
    const namePara = document.createElement('p');
    const commentPara = document.createElement('p');
    const nameValue = nameField.value;
    const commentValue = commentField.value;

    namePara.textContent = nameValue;
    commentPara.textContent = commentValue;

    list.appendChild(listItem);
    listItem.appendChild(namePara);
    listItem.appendChild(commentPara);

    nameField.value = '';
    commentField.value = '';
  };
}
