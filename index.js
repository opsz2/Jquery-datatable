$(document).ready(function () {
    $('#example').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": "http://localhost:8080/getData"
    });
});