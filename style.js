document.addEventListener('DOMContentLoaded', function() {
    const svgIcon = document.getElementById('toggle-icon');
    const xMarkIcon = document.getElementById('x-mark-icon');
    const mobileDiv = document.querySelector('.brj-mobile');

    svgIcon.addEventListener('click', function() {
        mobileDiv.classList.toggle('open');
        xMarkIcon.classList.toggle('close');
    });
});
