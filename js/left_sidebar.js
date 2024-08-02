// var is_checked = false;
document.querySelector('[data-link_cid="homepage_link"]').addEventListener('click', function () {
    console.log('Element clicked!');
    window.location.href = "homepage.html";
});
document.querySelector('[data-link_cid="hospital_list_link"]').addEventListener('click', function () {
    console.log('hospital_list_link clicked!');
    window.location.href = "hospital_list.html";
});
document.querySelector('[data-link_cid="article_link"]').addEventListener('click', function () {
    console.log('article_link clicked!');
    window.location.href = "article.html";
});
document.querySelector('[data-link_cid="passed_doctor_link"]').addEventListener('click', function () {
    console.log('passed_doctor_link clicked!');

    window.location.href = "passed_doctor_list.html";
    // is_checked=true;
    // document.querySelector('[data-link_cid="unchecked_doctor_link"]').classList.remove("selected");
    // document.querySelector('[data-link_cid="passed_doctor_link"]').classList.add("selected");
});
document.querySelector('[data-link_cid="unchecked_doctor_link"]').addEventListener('click', function () {
    console.log('unchecked_doctor_link clicked!');

    window.location.href = "unchecked_doctor_list.html";
    // is_checked=false;
    // document.querySelector('[data-link_cid="passed_doctor_link"]').classList.remove("selected");
    //         document.querySelector('[data-link_cid="unchecked_doctor_link"]').classList.add("selected");
});