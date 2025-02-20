function addComment() {
    let input = document.getElementById("input");
    let text = input.value.trim();
    if (text === "") return;

    const commentDiv = document.createElement("div");
    commentDiv.className = "comment";
    
    const textSpan = document.createElement("span");
    textSpan.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = ()=> {
        commentDiv.remove();
    };

    commentDiv.appendChild(textSpan); 
    commentDiv.appendChild(deleteButton);

    document.getElementById("commentsContainer").appendChild(commentDiv);
    input.value = "";
}

