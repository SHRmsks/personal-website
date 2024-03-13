document.querySelector('.ins').addEventListener('mouseenter', function () {
    document.querySelector('p').style.opacity = 0.03;
    document.querySelectorAll('.wannachange').forEach(function (img) {
        img.style.opacity = 0.03;
    });
})
document.querySelector('.ins').addEventListener('mouseleave', function () {
    document.querySelector('p').style.opacity = 1;
    document.querySelectorAll('.wannachange').forEach(function (img) {
        img.style.opacity = 1;
    });
})
document.querySelector('.wechat').addEventListener('mouseenter', function () {
    document.querySelector('p').style.opacity = 0.03;
    document.querySelectorAll('.wannachange').forEach(function (img) {
        img.style.opacity = 0.03;
    });
})
document.querySelector('.wechat').addEventListener('mouseleave', function () {
    document.querySelector('p').style.opacity = 1;
    document.querySelectorAll('.wannachange').forEach(function (img) {
        img.style.opacity = 1;
    });
})