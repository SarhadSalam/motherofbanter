/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

function textCounters(textarea, textCounter, buttonName, left) {
    var overlimit = "overlimit",
        overlimitText = "overlimit-text";
    var finalCount = left;
    $(textCounter).text(left);
    $(textarea).keyup(function () {
        left = finalCount - $(this).val().length;
        if (left < 0) {
            $(textCounter).addClass(overlimit);
            $(textarea).addClass(overlimitText);
            $(buttonName).attr("disabled", true);
        } else {
            $(textCounter).removeClass(overlimit);
            $(textarea).removeClass(overlimitText);
            $(buttonName).removeAttr("disabled");
        }
        $(textCounter).text(left);
    });
}