// Esta es la función que contiene el codigo una vez que el docuemnto ha sido cargado

// *****************  IMPORTANTE ********************************************************
//cuando clickeamos en la subcategoria o categoria correspondiente a lo mejor lo mas conveniente es
//que no se oculte el menu

//**************** iMPORTANTE ************************************************************

$(document).ready(function(){

    //Se accede a los elemEntos li que tiene un elemento ul (es decir las subcategorias) para que al seleccionarlos no nos redirija
    $('.menu-des li:has(ul)').click(function(e){
        e.preventDefault();

    //animaciones del menu

        if ($(this).hasClass('activado')){ //si se clickea una categoria con subcategorías

            $(this).removeClass('activado');
            $(this).children('ul .sub').slideToggle(); //Oculta la subcategoria clickeada nuevamente

        } else { //si no tiene subcategorias 

            $('.menu-des li ul .sub').slideUp(); //oculta la subcategoria
            $('.menu-des li').removeClass('activado'); //le saca la clase activado
            $(this).addClass('activado'); //le coloca la clase activado al elemento seleccionado
            $(this).children('ul .sub').slideDown();//despliega la lista
        }   
        
    });

        $('.boton-menu').click(function(e){
            e.preventDefault();
             
            // menu categorías para celular
            $('.contenedor-menu .menu-des').slideToggle();
        
            $(window).resize(function(){
                if ($(document).width()>480){
                    $('.contenedor-menu .menu-des').css({'display' : 'block'});
                }
            
               if ($(document).width()<480){
                    $('.contenedor-menu .menu-des').css({'display' : 'none'});
                    $('.menu-des li ul').slideUp();
                    $('.menu-des li').removeClass('activado');
                }
            });
        
        });

    //Con esto se logra que las subcategorías nos lleven al catalogo correspondiente al hacer click
    /*$('.menu-des li ul li a').click(function(){
        window.location.href = $(this).attr('href') //Asi obtenemos el atributo href del elemento clickeado
    });*/
    
   


    // ************** SLIDER **************************

    var slider=$('.slider'); //almacena salider en una variable
    var siguiente=$('.btn-next'); //almacena boton en variable
    var anterior=$('.btn-prev');

    //se coloca el ultima articulo al principio
    $('.slider section:last').insertBefore('.slider section:first'); 
    //mostrar primera imagen con margen de -100%
    slider.css('margin-left', '-'+100+'%');

    //funcion que "mueve el articulo" al tocar el bton derecho
    function moverD() {
         slider.animate({marginLeft:'-'+200+'%'
         } ,700, function(){
             $('.slider section:first').insertAfter('.slider section:last');
             slider.css('margin-left', '-'+100+'%');
         });
    }

    //funcion que "mueve el articulo" al tocar el bton izquierdo
    function moverI() {
        slider.animate({marginLeft:0
        } ,700, function(){
            $('.slider section:last').insertBefore('.slider section:first');
            slider.css('margin-left', '-'+100+'%');
        });
    }

    siguiente.on('click',function(){
       moverD();
    });
   
    anterior.on('click',function(){
    moverI();
    });

    //slider automático
    function autoplay(){
        interval = setInterval(function(){
            moverD();
        }, 8000); //se ejecuta cada x segundos
    }

    autoplay();

    
    /****** filtrado ********************/
    
    $('.category-item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);

        /* ocultando categorias no seleccionadas */
        $('.product-item').css('transform','scale(0)');
        function hideProduct(){
            $('.product-item').hide();
        } setTimeout(hideProduct,400);
        

        /* mostrando categorias no seleccionadas */
        function showProduct(){
            $('.product-item[category="'+catProduct+'"]').show();
            $('.product-item[category="'+catProduct+'"]').css('transform','scale(1)');
        }setTimeout(showProduct,400);

        /* MOSTRANDO OFERTAS 
        $('.category-item[category="oferta"]').click(function(){
            function showOferta(){
                $('.product-item').show();
                $('.product-item').css('transform','scale(1)');
            }setTimeout(showProduct,400);
            
        });
        */


    });
     

});