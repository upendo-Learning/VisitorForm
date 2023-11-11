

function addTableRow() {
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Create a new row
    const newRow = table.insertRow(table.rows.length);

    // Add cells to the row
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);

    // Add content to cells
    cell1.innerHTML = 'New Name';
    cell2.innerHTML = 'New Position';
    cell3.innerHTML = 'New Office';
    cell4.innerHTML = 'New Age';
    cell5.innerHTML = 'New Start date';
    cell6.innerHTML = 'New Salary';
    cell7.innerHTML = '<input class="btn btn-primary" type="button" value="Send">';
}

// Function to convert data array to CSV format



