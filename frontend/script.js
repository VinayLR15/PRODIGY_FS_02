const token = localStorage.getItem("token");

// Fetch all employees
function loadEmployees() {
  fetch("/api/employees", {
    headers: { Authorization: token }
  })
    .then(res => res.json())
    .then(data => {
      const empList = document.getElementById("empList");
      empList.innerHTML = data.map(emp => `
        <tr id="row-${emp._id}">
          <td><input type="text" value="${emp.name}" id="name-${emp._id}" /></td>
          <td><input type="email" value="${emp.email}" id="email-${emp._id}" /></td>
          <td><input type="text" value="${emp.position}" id="position-${emp._id}" /></td>
          <td><input type="number" value="${emp.salary}" id="salary-${emp._id}" /></td>
          <td>
            <button onclick="updateEmployee('${emp._id}')">Update</button>
            <button onclick="deleteEmployee('${emp._id}')">Delete</button>
          </td>
        </tr>
      `).join("");
    });
}

// Add employee
document.getElementById("addEmployeeForm").onsubmit = function (e) {
  e.preventDefault();

  const employee = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    position: document.getElementById("position").value,
    salary: document.getElementById("salary").value
  };

  fetch("/api/employees", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(employee)
  })
    .then(res => res.json())
    .then(() => {
      document.getElementById("addEmployeeForm").reset();
      loadEmployees();
    });
};

// Delete employee
function deleteEmployee(id) {
  fetch(`/api/employees/${id}`, {
    method: "DELETE",
    headers: { Authorization: token }
  })
    .then(() => loadEmployees());
}

// Update employee
function updateEmployee(id) {
  const updatedEmployee = {
    name: document.getElementById(`name-${id}`).value,
    email: document.getElementById(`email-${id}`).value,
    position: document.getElementById(`position-${id}`).value,
    salary: document.getElementById(`salary-${id}`).value
  };

  fetch(`/api/employees/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(updatedEmployee)
  })
    .then(() => loadEmployees());
}

// Logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

// Initial load
loadEmployees();
