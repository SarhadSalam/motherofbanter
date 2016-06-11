/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

$(document).on('ready', function () {
    $("#input-4").fileinput({
        allowedFileExtensions: ["jpg", "png", "gif"],
        previewFileType: "image",
        showCaption: false,
        showUpload: false,
        browseClass: "btn btn-primary",
        browseIcon: "<i class=\"icon icon-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"icon icon-trash\"></i> ",
    });
});
$(document).on('ready', function () {
    $("#input-2").fileinput({
        allowedFileExtensions: ["jpg", "png", "gif"],
        previewFileType: "image",
        showCaption: false,
        showUpload: false,
        browseClass: "btn btn-primary",
        browseIcon: "<i class=\"icon icon-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"icon icon-trash\"></i> ",
    });
});
$(document).on('ready', function () {
    $("#input-3").fileinput({
        allowedFileExtensions: ["jpg", "png", "gif"],
        previewFileType: "image",
        showCaption: false,
        showUpload: false,
        browseClass: "btn btn-danger",
        browseIcon: "<i class=\"icon icon-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"icon icon-trash\"></i> ",
    });
});

$(document).ready(function () {
    var textCounter = "#text_counter";
    var overlimit = "#overlimit",
        overlimitText  = "#overlimitText";
    var left = 2000;
    $(textCounter).text(left);
    $('#status').keyup(function () {
        left = 2000 - $(this).val().length;
        if (left < 0) {
            $(textCounter).addClass(overlimit);
            $('#status').addClass(overlimitText);
            $('#posting').attr("disabled", true);
        } else {
            $(textCounter).removeClass(overlimit);
            $('#status').removeClass("overlimitText");
            $('#posting').attr("disabled", false);
        }
        $(textCounter).text(left);
    });
});
$(function () {
    $('[data-toggle="post"]').tooltip()
});
$(document).ready(function () {
    $(".emojiArea").textcomplete([{
        match: /\B:([\-+\w]*)$/,
        search: function (term, callback) {
            var results = [];
            var results2 = [];
            var results3 = [];
            $.each(emojiStrategy, function (shortname, data) {
                if (shortname.indexOf(term) > -1) {
                    results.push(shortname);
                }
                else {
                    if ((data.aliases !== null) && (data.aliases.indexOf(term) > -1)) {
                        results2.push(shortname);
                    }
                    else if ((data.keywords !== null) && (data.keywords.indexOf(term) > -1)) {
                        results3.push(shortname);
                    }
                }
            });
            if (term.length >= 3) {
                results.sort(function (a, b) {
                    return (a.length > b.length);
                });
                results2.sort(function (a, b) {
                    return (a.length > b.length);
                });
                results3.sort();
            }
            var newResults = results.concat(results2).concat(results3);

            callback(newResults);
        },
        template: function (shortname) {
            return '<img class="emojione" src="//cdn.jsdelivr.net/emojione/assets/png/' + emojiStrategy[shortname].unicode + '.png"> :' + shortname + ':';
        },
        replace: function (shortname) {
            return ':' + shortname + ': ';
        },
        index: 1,
        maxCount: 10
    }
    ], {
        footer: '<a href="http://www.emoji.codes" target="_blank">Browse All<span class="arrow">»</span></a>'
    });
});