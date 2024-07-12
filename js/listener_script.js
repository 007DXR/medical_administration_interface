document.querySelector('[data-link_cid="homepage_link"]').addEventListener('click', function() {
    console.log('Element clicked!');
    window.location.href="homepage.html";
    // 在这里添加你的处理代码
});
document.querySelector('[data-link_cid="doctor_list_link"]').addEventListener('click', function() {
    console.log('doctor_list_link clicked!');
    window.location.href="doctor_list.html";
    // 在这里添加你的处理代码
});
document.querySelector('[data-link_cid="article_link"]').addEventListener('click', function() {
    console.log('article_link clicked!');
    window.location.href="article.html";
    // 在这里添加你的处理代码
});
