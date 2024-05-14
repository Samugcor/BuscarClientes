$(function() {
    $("#searchbar").keyup(function() {
        let input = $(this).val().toLowerCase();

        $(".cardcontainer .card").each(function() {
            let nombre = $(this).find(".nombre").text().toLowerCase();

            if (nombre.includes(input)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});