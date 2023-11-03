const createIssue = document.getElementById("create-issue");
const issueInput = document.getElementById("issue-input");
createIssue.addEventListener("click", onCreateClick);

function onCreateClick(){
    createIssue.classList.toggle("hide");
    
}