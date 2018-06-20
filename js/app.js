var count = 0;

//Funcion obtiene datos
function getContactData () {
    var name = $('#contact-name').val();
    var $phone = $('#contact-phone');
    //console.log(name, phone);
    addContactData(name, $phone.val());//Se pasan valores del form a contact data

    //Limpiar input (2 opciones)
    //$('input[type="text"], input[type="tel"]').val('');
    $('#contact-name').val('');
    $phone.val('');
}

var template =  '<div class="row">'+
                    '<div class="col offset-s3 s6">'+
                        '<div class="card">'+
                            '<div class="card-content">'+
                                '<h3> __name__</h3>'+
                                '<span> __phone__</span>'+
                                '<a class="waves-effect waves-light btn right" onClick="deleteContact()"><i class="material-icons left">delete</i></a>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>';

//Funcion que imprime los datos

function addContactData (name, phone){
    count++;
    var finalTemplate = "";
    finalTemplate = template.replace("__name__", name)
    .replace("__phone__", phone);

    $("main").append(finalTemplate);
    $('h5').html('Total contactos: ' + count);
    swal(":)!", "Contacto agregado", "success");
}

//Función para borrar contactos

function deleteContact() {
    //Modificar contador de contactos
    count--;
    $('h5').html('Total contactos: ' + count);
    var item = $(event.currentTarget); //nuestro this
    var card = item.parent();
    var colCard = card.parent();
    var rowCard = colCard.parent();

    rowCard.remove();
}

$(document).ready(function(){
    $('.modal').modal();
    $('#add-contact').click(getContactData);

});

    