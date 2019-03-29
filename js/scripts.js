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
        }
        event.preventDefault();
    });
});