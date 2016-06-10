/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/
var type = $('#activityName').attr("data-type");
var data;
if(type == "likeable")
{
    data = {
        message: "likes"
    };
}
if(type == "dislikeable")
{
    data = {
        message: "dislikes"
    }
}
new Vue({
    el: '#activityName',
    data: data
});