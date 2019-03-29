var csharp = 0;
var java = 0;
var php = 0;





$(function () {

    $("#formOne").submit(function (event) {
        event.preventDefault();

        var name = $('input#name').val();
        var email = $('input#email').val();
        var address1 = $('input#inputAddress').val();
        var address2 = $('input#inputAddress2').val();
        var city = $('input#inputCity').val();
        var state = $('input#inputState').val();
        var zip = $('input#inputZip').val();

        $('.name').text(name);
        $('.email').text(email);
        $('.inputAddress').text(address1);
        $('.inputAddress2').text(address2);
        $('.inputCity').text(city);
        $('.inputState').text(state);
        $('.inputZip').text(zip);

        $('.user-info').show('slow');
    });

    $("#questions").submit(function (event) {

        $('.csharp').hide();
        $('.java').hide();
        $('.php').hide();

        var environment = $('input:radio[name=environment]:checked').val();
        var content = $('input:radio[name=content]:checked').val();
        var backing = $('input:radio[name=backing]:checked').val();
        var nerd = $('input:radio[name=nerd]:checked').val();
        var animal = $('input:radio[name=animal]:checked').val();



        if (environment === "big-business") {
            csharp += 5;
            java += 2;
            php += 1;
        } else if (environment === "small-business") {
            csharp += 1;
            java += 5;
            php = 2;
        } else if (environment === "indifferent-business") {
            csharp += 2;
            java += 1;
            php += 5;
        };

        if (content === 'gaming') {
            csharp += 5;
            java += 2;
            php += 1;
        } else if (content === 'apps') {
            csharp += 2;
            java += 5;
            php += 1;
        } else if (content === 'backend') {
            csharp += 1;
            java += 2;
            php += 5;
        };

        if (backing === 'microsoft') {
            csharp += 5;
            java += 2;
            php += 1;
        } else if (backing === 'no-microsoft') {
            csharp += 2;
            java += 5;
            php += 1;
        } else if (backing === 'linux') {
            csharp += 1;
            java += 2;
            php += 5;
        };

        if (nerd === 'yes-nerd') {
            csharp += 5;
            java += 2;
            php += 1;
        } else if (nerd === 'no-nerd') {
            csharp += 2;
            java += 5;
            php += 1;
        } else if (nerd === 'middle-nerd') {
            csharp += 1;
            java += 2;
            php += 5;
        };

        if (animal === 'cheetah') {
            csharp += 5;
            java += 2;
            php += 1;
        } else if (animal === 'rhino') {
            csharp += 2;
            java += 5;
            php += 1;
        } else if (animal === 'turtle') {
            csharp += 1;
            java += 2;
            php += 5;
        };

        console.log(csharp);
        console.log(java);
        console.log(php);

        function score(csharp, java, php) {
            if (csharp > java && csharp > php) {
                $('.csharp').show('slow');
            } else if (java > csharp && java > php) {
                $('.java').show('slow');
            } else {
                $('.php').show('slow');
            };
        };

        score(csharp, java, php);


        event.preventDefault();
    });
});