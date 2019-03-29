$(function(){
    $("#formOne").submit(function(event){
        event.preventDefault();

        var environment = $('input:radio[name=environment]:checked').val();
        var content = $('input:radio[name=content]:checked').val();
        var backing = $('input:radio[name=backing]:checked').val();
        var nerd = $('input:radio[name=nerd]:checked').val();
        var animal = $('input:radio[name=animal]:checked').val();

        

    });
});