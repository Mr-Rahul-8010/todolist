let input = document.getElementById("inp");
let button = document.getElementById("btn");
let task = document.querySelector(".text");

button.addEventListener("click",()=>{
    if(input.value==""){
        alert("Please Enter a Task")
    }else{
        let newtask = document.createElement("li");
        newtask.textContent= (input.value);
        task.appendChild(newtask);

        let removebtn = document.createElement("button");
        removebtn.textContent="remove";
        task.appendChild(removebtn);

        removebtn.addEventListener("click",()=>{
            task.removeChild(newtask);
        });

        newtask.appendChild(removebtn);
        input.value="";
    }
});