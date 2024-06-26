
class Cliente{
    constructor(nombre, descripcion, linkFotoPerfil){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.fotoPerfil=linkFotoPerfil;
    }
}

let arrayClientes=[                                                                                   
    new Cliente("Sandra García","Contable","imagenes/foto.jpg"),
    new Cliente("María Gago","Hace cosas","imagenes/foto1.jpg"),
    new Cliente("Susana Rojas","Arqueóloga en busca de la Atlántida","imagenes/foto2.jpg"),
    new Cliente("Ana Gonzalez","Pintora y escultora","imagenes/foto3.jpg"),
    new Cliente("Raul Ramos","Camarero estudiando oposiciones","imagenes/foto6.jpg"),
    new Cliente("Manuel Lopez","Soldador en astilleros","imagenes/foto7.jpg"),
    new Cliente("Coriandra Álvarez","Contable","imagenes/foto4.jpg"),
    new Cliente("Bea Cordeiro","Hace cosas","imagenes/foto5.jpg"),
    new Cliente("Matilde Barros","Arqueóloga en busca de la Atlántida","imagenes/foto8.jpg"),
    new Cliente("Conie Fernandez","Pintora y escultora","imagenes/foto.jpg"),
    new Cliente("Catalina Diaz","Camarero estudiando oposiciones","imagenes/foto1.jpg"),
    new Cliente("Mar Molinos","Soldador en astilleros","imagenes/foto2.jpg"),
]


$(function() {
    function loadcards() {
        let template = $("#cardTemplate").prop('content');

        arrayClientes.forEach((cliente,index )=> {
            let clone = $(template).clone(true);
            $(clone).find(".card").data("indice", index);
            $(clone).find(".cardimg").attr('src',cliente.fotoPerfil);
            $(clone).find(".nombre").text(cliente.nombre);
            $(clone).find(".descripcion").text(cliente.descripcion);
            $(".cardcontainer").append(clone);
        });
    }

    function emptycards(){
        $(".cardcontainer").empty();
    }

    loadcards();

    $('#adduser').on("click", function(){
        $(".modalback").css('display', 'block');
    })

    $('#closeform').on("click", function(){
        $(".modalback").css('display', 'none');
    })

    $('#addform').on("click", function(){
        
        let urnombre = $('#urn').val();
        let urdescripcion = $('#urd').val();
        let ururl = $('#uri').val();

        arrayClientes.push(new Cliente(urnombre,urdescripcion,ururl));
        
        emptycards();
        loadcards();
        
        $('#urn').val("");
        $('#urd').val("");
        $('#uri').val("");

        $(".modalback").css('display', 'none');
    })

    $(".cardcontainer").on("click",".closecard", function() {//Tienes que llamarlo desde el contenedor si o si por el event delegation
        console.log("algo");
        let card = $(this).closest(".card");//closest busca entre los ancestros de un elemento, yendo hacia la raiz hasta encontrar un mach
        let indice = card.data("indice");
        
        arrayClientes.splice(indice, 1);
        emptycards();
        loadcards();
    });

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