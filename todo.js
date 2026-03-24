const Name = document.getElementById("name");
const age = document.getElementById("age");
const gender = document.getElementsByName("gender");
const course = document.getElementById("course");
const email = document.getElementById("email");
const outputform = document.querySelector(".outputform");
const outputprint = document.getElementById("outputprint");
const errMsg = document.getElementById("error");
const form = document.getElementById("reset");

const update = () => {
    let count = 0;
    let replaceGender = "";
    errMsg.textContent = "";

    for (i = 0; i < gender.length; i++ ) {
        if (gender[i].checked) {
            replaceGender = gender[i].checked;
        }
    };

    if (Name.value === "") count++;
    if (age.value === "") count++;
    if (replaceGender === "") count++;
    if (course.value === "") count++;
    if (email.value === "") count++;

    if (count > 1) {
        errMsg.innerHTML = "Fill Everything";
        return;
    }

    if (count === 1) {
        if (Name.value === "") {
            errMsg.textContent = "Fill The Name";
            inputshake(Name);
        }

        else if (age.value === "") {
            errMsg.textContent = "Fill Age";
             inputshake(age);
        }

        else if (replaceGender === "") {
            errMsg.textContent = "Fill The Gender";
        }

        else if (course.value === "") {
            errMsg.textContent = "Fill The Course";
             inputshake(course);
        }

        else if (email.value === "") {
            errMsg.textContent = "Fill The Email";
             inputshake(email);
        }
        return;
    }

    outputform.style.display = "block";

    row = document.createElement("tr");
    row.innerHTML = 
    `<td>${Name.value}</td>
     <td>${age.value}</td>
     <td>${replaceGender}</td>
     <td>${course.value}</td>
     <td>${email.value}</td>
     <td><button type = "button" onclick = "deleteItem(event)">delete</td>`
     form.reset();
     outputprint.appendChild(row);
}

const inputshake = (inputbar) => {
    inputbar.classList.add("shake");
    setTimeout ( () => {
        inputbar.classList.remove("shake");    
    },400);
};

const deleteItem = (event) => {
    event.target.parentElement.parentElement.remove();
    if (outputprint.children.length === 0) {
       outputform.style.display = "none"; 
    }
}


