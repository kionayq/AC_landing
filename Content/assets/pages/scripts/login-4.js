var Login = function () {


    var handleRegister = function () {

        function format(state) {
            if (!state.id) { return state.text; }
            var $state = $(
             '<span><img src="/content/assets/global/img/flags/' + state.element.value.toLowerCase() + '.png" class="img-flag" /> ' + state.text + '</span>'
            );

            return $state;
        }

        if (jQuery().select2 && $('#country_list').size() > 0) {
            $("#country_list").select2({
                placeholder: '<i class="fa fa-map-marker"></i>&nbsp;Select a Country',
                templateResult: format,
                templateSelection: format,
                width: 'auto',
                escapeMarkup: function (m) {
                    return m;
                }
            });


            $('#country_list').change(function () {
                //$('.register-form').validate().element($(this)); //revalidate the chosen dropdown value and show error or success message for the input
            });
        }

        $('.register-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.register-form').validate().form()) {
                    $('.register-form').submit();
                }
                return false;
            }
        });

        jQuery('#register-btn').click(function () {
            jQuery('.login-form').hide();
            jQuery('.register-form').show();
        });

        jQuery('#register-back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.register-form').hide();
        });
    }


    var handleForgetPassword = function () {
        
        $('.forget-form input').keypress(function (e) {
            if (e.which == 13) {
                if ($('.forget-form').validate().form()) {
                    $('.forget-form').submit();
                }
                return false;
            }
        });

        jQuery('#forget-password').click(function () {
            jQuery('.login-form').hide();
            jQuery('.forget-form').show();
        });

        jQuery('#back-btn').click(function () {
            jQuery('.login-form').show();
            jQuery('.forget-form').hide();
        });

    }

    return {
        //main function to initiate the module
        init: function () {

            handleRegister();
            handleForgetPassword();

            // init background slide images
            $.backstretch([
		        "/content/assets/pages/media/bg/1.jpg",
		        "/content/assets/pages/media/bg/2.jpg",
		        "/content/assets/pages/media/bg/3.jpg",
		        "/content/assets/pages/media/bg/4.jpg"
            ], {
                fade: 1000,
                duration: 8000
            }
        	);
        }
    };

}();

jQuery(document).ready(function () {
    Login.init();
});