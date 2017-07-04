(function( $ ){

    $(function() {

        $('.rf').each(function(){
            // Объявляем переменные (форма и кнопка отправки)
            var form = $(this),
                btn = form.find('.btn_submit');

            // Добавляем каждому проверяемому полю, указание что поле пустое
            form.find('.rfield').addClass('empty_field');

            // Функция проверки полей формы
            function checkInput(){
                form.find('.rfield').each(function(){
                    if($(this).val() != ''){
                        // Если поле не пустое удаляем класс-указание
                        $(this).removeClass('empty_field');
                    } else {
                        // Если поле пустое добавляем класс-указание
                        $(this).addClass('empty_field');
                    }
                });
            }

            // Функция подсветки незаполненных полей
            function lightEmpty(){
                form.find('.empty_field').css({'border-color':'#d8512d'});
                // Через полсекунды удаляем подсветку
                setTimeout(function(){
                    form.find('.empty_field').removeAttr('style');
                },500);
            }

            // Проверка в режиме реального времени
            setInterval(function(){
                // Запускаем функцию проверки полей на заполненность
                checkInput();
                // Считаем к-во незаполненных полей

                var sizeEmpty = $('.empty_field').length;

                // Вешаем условие-тригер на кнопку отправки формы
                if(sizeEmpty > 0){
                    if(btn.hasClass('disabled')){
                        return false
                    } else {
                        btn.addClass('disabled')
                    }
                } else {
                    btn.removeClass('disabled')
                }
            },500);

            // Событие клика по кнопке отправить
            btn.click(function(){
                if($(this).hasClass('disabled')){
                    // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
                    lightEmpty();
                    return false
                } else {
                    // Все хорошо, все заполнено, отправляем форму
                    form.submit();
                }
            });
        });
    });

})( jQuery );


$(document).ready(function(){
    $('.wall-item').hover(function(event){
        event.preventDefault();
        $(this).toggleClass('active');

    });


    $(document).ready(function () {
        $('.number-min').click(function () {
            var $input = $(this).closest('.wrap_counter').find('input[type="number"]')
            console.log($input);
            var count = parseInt($input.val()) - 1;
            count = count < 1 ? 1 : count;
            $input.val(count);
            $input.change();
            return false;
        });
        $('.number-max').click(function () {
            var $input = $(this).closest('.wrap_counter').find('input[type="number"]')
            $input.val(parseInt($input.val()) + 1);
            $input.change();
            return false;
        });
    });
});

$(document).ready(function(){
    var $menu = $('#myPanelDefault');
    var $m=$('#overlay');
    $('#menu-btn-toggle').click(function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $menu.toggleClass('active');
        $m.toggleClass('active');
    });
    $('.x').click(function(event){
        event.preventDefault();
        $('#menu-btn-toggle').removeClass('active');
        $menu.toggleClass('active');
        $m.toggleClass('active');
    });
});


//$(document).ready(function() {
//    console.log('+++++');
//    var $a=$('.style_menu li a');
//    $(".multi-accordion li a").click(function(e){
//        e.preventDefault();
//        //$(this).toggleClass("active");
//        $(this).toggleClass("active");
//        if ($(this).hasClass('active')) {
//            //$(this).removeClass('active');
//            $(this).off("active");
//        }
//        //$(".multi-accordion li ul").removeClass("active");//Удаляем класс у прошлого выделенного
//    });
//});
//    $('.first_item').on('click', function() {
//        var $this = $(this);
//        if ($this.hasClass('active')) {
//            $this.removeClass('active');
//            $("first_item").off("active");
//
//        } else {
//            $this.addClass('active');
//            $(document).on('click.first_item>ul', function(e) {
//                if ($(e.target).closest('.menu-wrap').length === 0) {
//                    $('.menu-wrap').removeClass('active');
//                    $("first_item").off("active");
//
//                }
//            });
//        }
//    });
//});

$(document).on('click', '.multi-accordion li > a', function (event) {
    var $this = $(this), $next = $this.next();
    if ($next.length) {
        if ($next.is(':visible')) {
            $next.slideToggle(function () {
                $next.find('ul').toggle(false);
            });
        } else {
            $next.slideToggle().parent().siblings().find('ul').filter(':visible').slideToggle();
        }

        event.preventDefault();
    }
});

$(document).ready(function(){
    $(".style_menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top - 180}, 1500);
    });
});
$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        closeBtnInside:true,
        showCloseBtn: false
        //closeOnContentClick: true
        //preloader: false,
        //focus: '#username',
        //midClick: true
        //modal: true
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    /* slider */

});
