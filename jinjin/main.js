

window.onload = function () {
    let Project3 = document.getElementById("Project3");
    Project3.onclick = Project3_F;
    let Project2 = document.getElementById("Project2");
    Project2.onclick = Project2_F;
    let Project1 = document.getElementById("Project1");
    Project1.onclick = Project1_F;

}

 

function Project1_F()  {
    location.href = "Project1.html"
}
function Project2_F()  {
    location.href = "Project2.html"
}
function Project3_F()  {
    location.href = "Project3.html"
}

function GoMain() {
    location.href = "index.html"
}