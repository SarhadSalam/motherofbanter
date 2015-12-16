// AutoClose Alerts
$(".alert-info").alert();
window.setTimeout(function() {
    $(".alert-info").alert('close');
}, 4000);
