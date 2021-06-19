var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["namalengkap"] = document.getElementById("namalengkap").value;
    formData["npm"] = document.getElementById("npm").value;
    formData["alamat"] = document.getElementById("alamat").value;
    formData["email"] = document.getElementById("email").value;
    formData["judul"] = document.getElementById("judul").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.namalengkap;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.npm;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.alamat;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.judul;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <b onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("namalengkap").value = "";
    document.getElementById("npm").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("email").value = "";
    document.getElementById("judul").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("namalengkap").value = selectedRow.cells[0].innerHTML;
    document.getElementById("npm").value = selectedRow.cells[1].innerHTML;
    document.getElementById("alamat").value = selectedRow.cells[2].innerHTML;
    document.getElementById("email").value = selectedRow.cells[3].innerHTML;
    document.getElementById("judul").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.namalengkap;
    selectedRow.cells[1].innerHTML = formData.npm;
    selectedRow.cells[2].innerHTML = formData.alamat;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.judul;
}

function onDelete(td) {
    if (confirm('apakah anda yakin untuk menghapusnya ? ')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("namalengkap").value == "") {
        isValid = false;
        document.getElementById("namalengkapValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("namalengkapValidationError").classList.contains("hide"))
            document.getElementById("namalengkapValidationError").classList.add("hide");
    }
    return isValid;
}