const form = document.getElementById('attendance-form');
const list = document.getElementById('attendance-list');

// Try to load previous attendance from localStorage
const attendance = JSON.parse(localStorage.getItem('attendanceList')) || [];

function renderList() {
  list.innerHTML = '';
  attendance.forEach((name, idx) => {
    const li = document.createElement('li');
    li.textContent = name;
    list.appendChild(li);
  });
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const nameField = document.getElementById('student-name');
  const name = nameField.value.trim();
  if (name && !attendance.includes(name)) {
    attendance.push(name);
    localStorage.setItem('attendanceList', JSON.stringify(attendance));
    renderList();
    nameField.value = '';
  } else if (attendance.includes(name)) {
    alert('This name is already marked present!');
  }
});

renderList();