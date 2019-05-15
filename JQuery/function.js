/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function() {
    var description = [
        "http://fancygrid.com/img/samples/sovynya.png",
        "http://fancygrid.com/img/samples/kopatich.png",
        "http://fancygrid.com/img/samples/losyash.png",
        "http://fancygrid.com/img/samples/barash.png",
        "http://fancygrid.com/img/samples/eshik.png",
        "http://fancygrid.com/img/samples/karich.png"
    ];

    var size = description.length
    var x = Math.floor(size * Math.random())
    $("#image").attr('src', description[x]);
});

$(function() {
    $("#formDemo").validate({
        rules: {
            name: "required",
            math: {
                required: true,
                max: 10,
                number: true
            },
            physics: {
                required: true,
                max: 10,
                number: true
            },
            chemistry: {
                required: true,
                max: 10,
                number: true
            }
        },
        messages: {
            name: "Enter the full name",
            math: {
                required: "Enter math score",
                max: "Input must be less than 10",
                number: "Input must be a number"
            },
            physics: {
                required: "Enter physics score",
                max: "Input must be less than 10",
                number: "Input must be a number"
            },
            chemistry: {
                required: "Enter chemistry score",
                max: "Input must be less than 10",
                number: "Input must be a number"
            }
        },

        submitHandler: function() {
            // Calculate GPA
            let math = $("#math").val();
            let physics = $("#physics").val();
            let chemistry = $("#chemistry").val();

            let average = (parseFloat(math) + parseFloat(physics) + parseFloat(chemistry)) / 3;
            $("#average").text(average);

            let classification = $('#classification');
            if (average >= 8.5) {
                classification.text('Excellent');
                classification = 'Excellent';
            } else if (average >= 7) {
                classification.text('Good');
                classification = 'Good';
            } else if (average >= 5.5) {
                classification.text('Average');
                classification = 'Average';
            } else {
                classification.text('Below');
                classification = 'Below';
            }

            // Random image
            var description = [
                "http://fancygrid.com/img/samples/sovynya.png",
                "http://fancygrid.com/img/samples/kopatich.png",
                "http://fancygrid.com/img/samples/losyash.png",
                "http://fancygrid.com/img/samples/barash.png",
                "http://fancygrid.com/img/samples/eshik.png",
                "http://fancygrid.com/img/samples/karich.png"
            ];

            let size = description.length
            let x = Math.floor(size * Math.random())
            $("#image").attr('src', description[x]);

            // Add data in table
            $("#myTable")
                .append($('<tr>')
                    .append($('<td>')
                        .text($("#name").val())
                    )
                    .append($('<td>')
                        .html('<img src="' + $("#image").attr('src') + '"/>')
                    )
                    .append($('<td>')
                        .text($("#math").val())
                    )
                    .append($('<td>')
                        .text($("#physics").val())
                    )
                    .append($('<td>')
                        .text($("#chemistry").val())
                    )
                    .append($('<td>')
                        .text(average)
                    )
                    .append($('<td>')
                        .text(classification)
                    )
                    .append($('<td>')
                        .html('<button type = "button" class = "btn btn-danger btn-xs dt-delete">' +
                            '<span class = "glyphicon glyphicon-remove"aria - hidden = "true" > </span> </button> ')
                    )
                );

            // Delete buttons
            $(document).ready(function() {
                $('.dt-delete').click(function() {
                    $(this).parents('tr').first().remove();
                });
            });
        }
    });
});