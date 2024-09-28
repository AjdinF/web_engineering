export function showOrHideComments()
{
    // functionality for showing/hiding the comments section

    const showHideBtn = document.querySelector('.show-hide');
    const commentWrapper = document.querySelector('.comment-wrapper');

    commentWrapper.style.display = 'none';

    //COMMENT: Hier habe ich function() durch () => ersetzt 
    showHideBtn.onclick = () => {
    const showHideText = showHideBtn.textContent;
    
    if(showHideText == 'Show comments') {
        showHideBtn.textContent = 'Hide comments';
        commentWrapper.style.display = 'block';
    } 
    else {
        showHideBtn.textContent = 'Show comments';
        commentWrapper.style.display = 'none';
    }
    };
}

export function addingComments()
{
    // functionality for adding a new comment via the comments form
    // COMMENT: in dieser Funktion habe ich die "var" mit "const" ersetzt und die function(e) durch (e) => ersetzt
    const form = document.querySelector('.comment-form');
    const nameField = document.querySelector('#name');
    const commentField = document.querySelector('#comment');
    const list = document.querySelector('.comment-container');

    form.onsubmit = (e) => {
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