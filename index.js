// هنا يمكنك كتابة وظائف JavaScript الخاصة بك
document.addEventListener('DOMContentLoaded', function() {
    // يتم تحميل هذا الكود عندما تنتهي الصفحة من التحميل
    console.log('مرحبًا بك في صفحة Nur Restaurant!');
});

// يمكنك أيضًا إضافة وظائف أخرى هنا
document.addEventListener('DOMContentLoaded', function() {
    // اضف وظيفة للانتقال عند النقر على الأزرار
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    }

    // احصل على الأزرار
    var homeButton = document.getElementById('homeButton');
    var aboutButton = document.getElementById('aboutButton');
    var menuButton = document.getElementById('menuButton');
    var galleryButton = document.getElementById('galleryButton');
    var contactButton = document.getElementById('contactButton');

    // اضف وظائف لكل زر
    homeButton.addEventListener('click', function() {
        scrollToSection('header');
    });

    aboutButton.addEventListener('click', function() {
        scrollToSection('about');
    });

    menuButton.addEventListener('click', function() {
        scrollToSection('menu');
    });

    galleryButton.addEventListener('click', function() {
        scrollToSection('gallery');
    });

    contactButton.addEventListener('click', function() {
        scrollToSection('contact');
    });
});
