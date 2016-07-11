var InvalidUdataUser = function () {

};

InvalidUdataUser.prototype.init = function () {
    this.initHover();
};

/**
 * 在定义hover 的CSS3动画时，会覆盖进入页面的动画
 * 当leave时，进入页面的动画重新生效，这个时候需要做一些调整
 * 调整依然在css中进行，这里只是加上一个类
 *
 * @author lzh
 * @date 2016-07-11 10:11
 */
InvalidUdataUser.prototype.initHover = function () {
    $('.invalid-container').hover(function (event) {
        $(this).addClass('after-init').off('hover');
    })
};

var invalidUdataUser = new InvalidUdataUser();
invalidUdataUser.init();