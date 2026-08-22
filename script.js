let students = [];

function addStudent() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let marks = parseInt(document.getElementById("marks").value);

    if (!name || !roll || !dept || !marks) {
        alert("Please fill all fields");
        return;
    }

    students.push({ name, roll, dept, marks });
    updateTable();
}

function updateTable() {
    let tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    students.forEach(stu => {
        let row = `<tr>
            <td>${stu.name}</td>
            <td>${stu.roll}</td>
            <td>${stu.dept}</td>
            <td>${stu.marks}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function searchStudent() {
    let roll = document.getElementById("searchRoll").value;
    let result = students.find(s => s.roll === roll);

    let div = document.getElementById("searchResult");

    if (result) {
        div.innerHTML = `
            <h3>Search Result</h3>
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Roll No:</strong> ${result.roll}</p>
            <p><strong>Department:</strong> ${result.dept}</p>
            <p><strong>Marks:</strong> ${result.marks}</p>
        `;
    } else {
        div.innerHTML = "<p>No student found with this Roll Number</p>";
    }
}

function showTopper() {
    if (students.length === 0) {
        alert("No students added yet");
        return;
    }

    let topper = students.reduce((max, stu) => stu.marks > max.marks ? stu : max);

    let div = document.getElementById("topper");

    div.innerHTML = `
        <h3>Topper</h3>
        <p><strong>Name:</strong> ${topper.name}</p>
        <p><strong>Roll No:</strong> ${topper.roll}</p>
        <p><strong>Department:</strong> ${topper.dept}</p>
        <p><strong>Marks:</strong> ${topper.marks}</p>
    `;
}
