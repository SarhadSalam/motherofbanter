/*******************************************************************************
 * Copyright (c) 2016. All rights reserved. Sarhad Maisoon Salam.
 ******************************************************************************/

// AutoClose Alerts
$(".alert-info").alert();
window.setTimeout(function () {
    $(".alert-info").alert('close');
}, 7000);
$(".tempsuccess").alert();
window.setTimeout(function () {
    $(".alert-success").alert('close');
}, 4000);