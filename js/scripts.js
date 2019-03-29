$(function(){
    $("#questions").submit(function(event){
        
        $('.csharp').hide();
        $('.java').hide();
        $('.php').hide();

        var environment = $('input:radio[name=environment]:checked').val();
        var content = $('input:radio[name=content]:checked').val();
        var backing = $('input:radio[name=backing]:checked').val();
        var nerd = $('input:radio[name=nerd]:checked').val();
        var animal = $('input:radio[name=animal]:checked').val();

        if(environment === "big-business" && content === "gaming" && backing === "microsoft" && nerd === "yes-nerd" && animal === "cheetah") {
            $('.csharp').show('slow');

        }else if(environment === "small-business" && content === "apps" && backing === "no-microsoft" && nerd === "no-nerd" && animal === "rhino") {
            $('.java').show('slow');

        }else if(environment === "indifferent-business" && content === "backend" && backing === "linux" && nerd === "middle-nerd" && animal === "turtle") {
            $('.php').show('slow');

        }else if(environment === "big-business" && content === "apps" && backing === "no-microsoft" && nerd === "no-nerd" && animal === "rhino") {
            $('.java').show('slow');

        }else if(environment === "big-business" && content === "backend" && backing === "linux" && nerd === "middle-nerd" && animal === "turtle") {
            $('.php').show('slow');

        }else if(environment === "small-business" && content === "gaming" && backing === "microsoft" && nerd === "yes-nerd" && animal === "cheetah") {
            $('.csharp').show('slow');

        }else if(environment === "small-business" && content === "apps" && backing === "no-microsoft" && nerd === "no-nerd" && animal === "rhino") {
            $('.java').show('slow');

        }else if(environment === "small-business" && content === "backend" && backing === "linux" && nerd === "middle-nerd" && animal === "turtle") {
            $('.php').show('slow');

        }else if(environment === "indifferent-business" && content === "gaming" && backing === "microsoft" && nerd === "yes-nerd" && animal === "cheetah") {
            $('.csharp').show('slow');

        }else if(environment === "indifferent-business" && content === "apps" && backing === "no-microsoft" && nerd === "no-nerd" && animal === "rhino") {
            $('.java').show('slow');

        }else if(environment === "big-business" && content === "gaming" && backing === "no-microsoft" && nerd === "no-nerd" && animal === "rhino") {
            $('.java').show('slow');

        }else if(environment === "big-business" && content === "apps" && backing === "linux" && nerd === "middle-nerd" && animal === "turtle") {
            $('.php').show('slow');

        }else if(environment === "big-business" && content === "apps" && backing === "microsoft" && nerd === "yes-nerd" && animal === "cheetah") {
            $('.csharp').show('slow');

        }else if(environment === "big-business" && content === "backend" && backing === "microsoft" && nerd === "yes-nerd" && animal === "cheetah") {
            $('.csharp').show('slow');

        }else if(environment === "big-business" && content === "backend" && backing === "no-microsoft" && nerd === "no-nerd" && animal === "rhino") {
            $('.java').show('slow');

        }else if(environment === "big-business" && content === "backend" && backing === "linux" && nerd === "middle-nerd" && animal === "turtle") {
            $('.php').show('slow');

        }








        event.preventDefault();
    });
});