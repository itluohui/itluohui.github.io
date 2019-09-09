function openxm(title, url) {
    layer.open({
        type: 2,
        title: title,
        offset: '70px',
        area: ['900px', '70%'],
        shadeClose: true,
        closeBtn: 1,
        shade: .1,
        shadeClose: true,
        btn: ['确定'],
        content: url
    });
}
// 产业类别选择

$(".scr-l").fixedScroll();
$(".scr-r").fixedScroll();
$(".scr-t").fixedScroll();

// 滚动跟随

$.emoticons({
    'activeCls': 'trigger-active'
}, function (api) {
    var $content = $('textarea[name="content"]');
    var $result = $('#result');
    $('#format').click(function () {
        $result.html(api.format($content.val()));
    });
});
// 发布

$(function () {
    $('.zan').click(function () {
        if ($(this).hasClass("icon-praise")) {
            $(this).removeClass("icon-praise");
            $(this).addClass("icon-praise_fill").css('color', '#ca3030');
        } else {
            $(this).addClass("icon-praise");
            $(this).removeClass("icon-praise_fill");
        }

    });
    $('.shoucang').click(function () {
        if ($(this).hasClass("icon-collection")) {
            $(this).removeClass("icon-collection");
            $(this).addClass("icon-collection_fill").css('color', '#cc8906');
        } else {
            $(this).addClass("icon-collection");
            $(this).removeClass("icon-collection_fill");
        }

    });
})