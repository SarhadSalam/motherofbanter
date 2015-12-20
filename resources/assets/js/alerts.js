// AutoClose Alerts
$(".alert-info").alert();
window.setTimeout(function() {
    $(".alert-info").alert('close');
}, 7000);
$(".alert-success").alert();
window.setTimeout(function() {
    $(".alert-success").alert('close');
}, 4000);