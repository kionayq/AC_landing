

var editButtonSelector = "button[data-button-type='Edit']";
var saveButtonSelector = "button[data-button-type='Save']";
var cancelButtonSelector = "button[data-button-type='Cancel']";

var isEnglish = false;
var isGregorianCalendar = true;

$(function () {

    isEnglish = getLanguage() == "en";
    setupDate();
    setAutoSearch();
    equalHeightColumns();
    //initICheck();
});

function block(element) {

    App.blockUI({
        target: element,
        message: "LOADING ...",
        boxed: true
    });
}

function unblock(element) {
    App.unblockUI(element);
}


function setMetronicActiveLink() {

    var currentPath = location.pathname.toLocaleLowerCase();

    var selectedTag = '<span class="selected"></span>';

    $('.nav-item a').each(function (i, n) {

        var href = $(n).attr("href");
        href = href.toLowerCase();

        if (href.endsWith(currentPath)) {

            var anchor = $(n);

            var navToggle = anchor.parents('.nav-item');


            navToggle.addClass('active');
            navToggle.addClass('open');
            navToggle.find("a").append(selectedTag);

            $(n).closest("li").addClass('active');
            $(n).append(selectedTag);
        }
    });
}


//=============== BEGIN ALERTS ==================
function showAlert(alert, container) {

    var css = alert.alertCSS;
    var message = alert.message;
    var type = alert.alertTypeMetronic;
    var dismissable = alert.dissmisable;

    App.alert({
        container: container,
        // alerts parent container place: 'append', 
        // append or prepent in container type: 'success', 
        // alert's type message: 'Test alert', 
        // alert's message
        type: type,
        message: message,
        close: dismissable,
        focus: false,
        // make alert closable reset: false, 
        // close all previouse alerts first focus: true, 
        // auto scroll to the alert after shown closeInSeconds: 10000, 
        // auto close after defined seconds icon:
        // put icon class before the message });
    });
}

function showAutoHideAlert(alert) {

    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-top-full-width",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }


    switch (alert.alertTypeMetronic) {
        case "warning": //Warning
            toastr.warning(alert.Title, alert.message);
            break;
        case "info": //Info
            toastr.info(alert.Title, alert.message);
            break;
        case "success": //Success
            toastr.success(alert.Title, alert.message);
            break;
        case "danger": //Error
            toastr.error(alert.Title, alert.message);
            break;
        default:
            toastr.info(alert.Title, alert.message);
            break;
    }

}
//=============== END ALERTS ==================



function changeFormActionUrl(button) {
    var url = $(button).attr('data-action-url');

    var form = $(button).closest('form');

    form.attr('action', url);

    return true;
}

function changeFormActionUrlAndStatus(button, status) {
    var url = $(button).attr('data-action-url');

    var form = $(button).closest('form');

    form.data("form-status", status);

    form.attr('action', url);

    return true;
}

//=========== Begin AJAX Helpers ================

function onAjaxBegin(blockDiv) {

    block(blockDiv);
}

function onAjaxFailed(xhr, status, error, alertDiv, formId) {

    var data = xhr.responseJSON;
    console.log(data);
    if (data) {

        if (data.alertMessage != null) {

            if (data.alertMessage.isAutoHide)
                showAutoHideAlert(data.alertMessage);
            else
                showAlert(data.alertMessage, alertDiv);
        }

    }

    $(formId).data("form-status", 'Edit');
}

function onAjaxSuccess(xhr, status, modalToHide) {
    if (modalToHide) {
        $(modalToHide).modal('hide');
    }
}

function onAjaxComplete(xhr, status, blockDiv, alertDiv, divToReplace, formId) {

    var data = xhr.responseJSON;

    if (data) {

        if (data.isRedirect)
            window.location.href = data.redirectUrl;


        if (data.success) {

            if (data.alertMessage != null) {

                if (data.alertMessage.isAutoHide)
                    showAutoHideAlert(data.alertMessage);
                else
                    showAlert(data.alertMessage, alertDiv);
            }

            $(divToReplace).html(data.partialViewHtml);
        }

        setFormStatus(formId);


    }

    setupDate();

    //initICheck();

    //initSelect2();


    //if (status == 'success')
    //    $(formId).data("form-status", 'Read');

    unblock(blockDiv);





}

function updateContainer(url, divToUpdate, formData) {

    $.ajax(url,
       {
           method: "GET",
           data: formData,
           beforeSend: function () {

               block(divToUpdate);
           },
           complete: function (xhr, status) {

               setupDate();

               //initICheck();

               //initSelect2();

               unblock(divToUpdate);
           },

           success: function (data, status, xhr) {

               if (typeof data === 'object') {
                   $(divToUpdate).html(data.partialViewHtml);
               } else {
                   $(divToUpdate).html(data);
               }

           },
           error: function (xhr, status, error) {

           }

       });

}

//function updateContainer(url, divToUpdate) {
//    debugger;

//    var d = $.Deferred();
//    $.ajax(url,
//        {
//            method: "GET",
//            beforeSend: function () {

//                block(divToUpdate);
//            },
//            complete: function (xhr, status) {

//                setupDate();

//                initICheck();

//                initSelect2();

//                unblock(divToUpdate);
//            },

//            success: function (data, status, xhr) {
//                if (typeof data === 'object') {
//                    $(divToUpdate).html(data.partialViewHtml);
//                } else {
//                    $(divToUpdate).html(data);
//                }

//                d.resolve(data);
//            },
//            error: function (xhr, status, error) {
//                d.reject;
//            }

//        });

//    return d.promise();
//}

//=========== END AJAX Helpers ================


function enableEdit(form) {

    var formId = "#" + $(form).attr("id");
    enableInputs(formId);

    $(form).find(editButtonSelector).hide();
    $(form).find(saveButtonSelector).show();
    $(form).find(cancelButtonSelector).show();



}

function disableEdit(form) {

    if (form) {

        $(form).find(editButtonSelector).show();
        $(form).find(saveButtonSelector).hide();
        $(form).find(cancelButtonSelector).hide();

        var formId = "#" + $(form).attr("id");
        disableInputs(formId);
    }
}

function disableInputs(form) {

    $(form + ' input, ' + form + ' select').each(
        function (i) {
            $(this).prop('disabled', true);
        });
}

function enableInputs(form) {
    //$(form + " :input[type='text']").prop('disabled', false);

    $(form + ' input, ' + form + ' select').each(
        function (i) {
            $(this).prop('disabled', false);
        });
    //" + form + ":input[type='radio']," + form + " textarea," + form + " select"
}

function setFormStatus(formId) {

    if ($(formId).data("form-status") == "Edit") {
        enableEdit(formId);
    }
    else {
        disableEdit(formId);
    }
}


function getCulture() {

    if (isEnglish)
        return "en-us";
    else
        return "ar-sa";
}

function refreshUnobtrusiveValidation(formSelector) {
    var form = $(formSelector);
    form.removeData('validator');
    form.removeData('unobtrusiveValidation');
    $.validator.unobtrusive.parse(form);

    $(formSelector).validateBootstrap(true);
}



function clearForm(form) {

    // iterate over all of the inputs for the form

    // element that was passed in

    $('.has-success', form).each(function () {
        $(this).removeClass('has-success');
    });

    $('.has-error', form).each(function () {
        $(this).find('.text-danger').removeClass('text-danger');
        $(this).removeClass('has-error');
    });

    $('.field-validation-error', form).each(function () {
        $(this).html('');
    });

    $(':input', form).each(function () {

        var type = this.type;

        var tag = this.tagName.toLowerCase(); // normalize case

        // it's ok to reset the value attr of text inputs,

        // password inputs, and textareas

        if (type == 'text' || type == 'password' || tag == 'textarea') {
            this.value = "";

            // checkboxes and radios need to have their checked state cleared

            // but should *not* have their 'value' changed
        }

        else if (type == 'checkbox' || type == 'radio')

            this.checked = false;

            // select elements need to have their 'selectedIndex' property set to -1

            // (this works for both single and multiple select elements)

        else if (tag == 'select')

            this.selectedIndex = 0;

    });


    ////clear Icheck
    //$('.icheck', form).each(function () {
    //    $(this).iCheck('uncheck');
    //});

};

function initModal() {

    $('.modal').each(function () {

        $(this).find('.alert-danger').parent().html('');

    });
    //$('.custom-alerts .alert .alert-danger');
    //$('#add-alert').html('');
    //$('#edit-alert').html('');

}

//============ Mini Tabs =====================================
function initMiniTabs() {
    $('.mini-tab-navigation').each(function () {
        var targetNavSelector = '#' + $(this).data('target-tabs');
        var listItems = '';
        $(targetNavSelector + ' li a').each(function () {
            listItems += '<option value="' + $(this).attr('href') + '">' + $(this).html() + '</options>';
        });
        $(this).html(listItems);
    });

}

function onMiniTabChange(miniTabSelector, tabSelector) {
    var targetTab = $(miniTabSelector + ' option:selected').val();
    //$(tabSelector+' a[href="' + targetTab  + '"]').tab('show');
    $(tabSelector + ' a[href="' + targetTab + '"]').click();
    //var onclick =$(tabSelector + ' a[href="' + targetTab + '"]').attr('onclick');


}
//============ Localization =====================================

function getLocalizedValue(localizableObject) {
    if (isEnglish)
        return localizableObject.english;

    localizableObject.arabic;
}
function getLanguage() {
    return window.location.pathname.slice(1, 3).toLowerCase();
}

function getCalendarText(isHijri) {
    var hijrString = "هجري";
    var hijrStringEn = "Hijri";
    var gregString = "ميلادي";
    var gregStringEn = "Gregorian";

    if (isEnglish) {

        if (isHijri)
            return hijrStringEn;
        else
            return gregStringEn;
    }
    else {

        if (!isHijri)
            return hijrString;
        else
            return gregString;
    }
}

function equalHeightColumns(isTimeout) {
    var timeout = 1;
    if (isTimeout)
        timeout = 200;
    setTimeout(function () {
        $(".equal-height-columns").each(function () {
            heights = [];
            $(".equal-height", this).each(function () {
                $(this).removeAttr("style");
                heights.push($(this).height()); // write column's heights to the array
            });
            $(".equal-height", this).height(Math.max.apply(Math, heights)); //find and set max
        });

    }, timeout);

}

function setAutoSearch() {
    $('form.auto-search').each(function () {
        var theForm = $(this);
        var inputs = $(theForm).find('input');
        var minCharacters = 3;
        for (var i = 0; i < inputs.length; i++) {
            var input = inputs[i];
            var tagName = $(input).prop('tagName');
            var isHidden = $(input).attr('type') == 'hidden';
            if (tagName == 'INPUT' && !isHidden) {
                if ($(input).attr('type') == 'text') {
                    $(input).keyup(function () {
                        if ($(this).val().length == 0 || $(this).val().length >= minCharacters) {
                            $(theForm).submit();

                        }
                    });

                } else {
                    $(input).change(function () {
                        $(theForm).submit();
                    });
                }
            }

        }
    });
}

function setActiveLink() {

    var pathName = window.location.pathname;
    var anchor = $(".nav-link[href='" + pathName + "']")
    var li = anchor.closest(".nav-link");
    li.addClass("active");

}

function showConfirmDeleteModal(btn) {

    initModal();

    var sharedFormSelector = "#delete-shared-form";
    var completeMethod = $(btn).attr("data-complete-method");
    var url = $(btn).attr('data-url');
    var onComplete = $(sharedFormSelector).attr('data-ajax-complete');

    onComplete = onComplete + ";" + completeMethod;
    $(sharedFormSelector).attr('data-ajax-complete', onComplete);
    $(sharedFormSelector).attr('action', url);
    $("#delete-shared-modal").modal('show');

}

function disableForms() {

    $("form").each(function (index) {
        setFormStatus(this);
    });

    initICheck();
}

//============ Repeater =====================================

function initFormRepeater(el, customOptions) {
    if (customOptions === 'undefined' || typeof customOptions !== 'object')
        customOptions = {};

    var defaultOptions = {
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            setupDate();
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            if (confirm('هل أنت متأكد من حذف هذا العنصر؟')) {
                $(this).slideUp(deleteElement);
            }
        },
        isFirstItemUndeletable: false
    };

    var options = $.extend({}, defaultOptions, customOptions);
    
    $(el).repeater(options);
}
function initForm2Repeater(el,el2, customOptions) {
    if (customOptions === 'undefined' || typeof customOptions !== 'object')
        customOptions = {};

    var defaultOptions = {
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show: function () {
            setupDate();
            $(this).slideDown();
        },
        hide: function (deleteElement) {
            if (confirm('هل أنت متأكد من حذف هذا العنصر؟')) {
                $(this).slideUp(deleteElement);
            }
        },
        isFirstItemUndeletable: false
    };

    var options = $.extend({}, defaultOptions, customOptions);

    $(el).repeater(options);
    $(el2).repeater(options);
}