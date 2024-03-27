
$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.title + "</td>" +
                    "<td>" + item.body + "</td>" +
                    "</tr>";
                $("#tabla>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });
}); 

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.albumId+ "</td>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.title + "</td>" +
                    "<td>" + "<img src='" + item.url + "' alt='foto'>" + "</td>" +
                    "<td>" + "<img src='" + item.thumbnailUrl + "' alt='foto'>" + "</td>" +
                    "</tr>";
                $("#tabla2>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });
}); 

