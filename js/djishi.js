function station(x, y, z) {
    //当前时间
    var now = Date.now(),
        //结束时间
        end = new Date(x, y - 1, z),
        ends = end.getTime();
    var ss = ends - now;
    var s = Math.floor(ss / 1000);
    //相差天数
    var day = Math.floor(s / 60 / 60 / 24);
    //相差小时数
    var hours = Math.floor(s / 60 / 60 % 24);
    //相差分钟数
    var min = Math.floor(s / 60 % 60);
    //相差秒数
    var sec = Math.floor(s % 60);
    var html = "距离第99天还有" + day + "天" + hours + "时" + min + "分" + sec + "秒";
    hh.innerHTML = html;

}
station(2023, 02, 05);
//station(2023, 01, 29);
//一秒一次调用
setInterval(function () {
    station(2023, 02, 05);
    //station(2023, 01, 29);
}, 1000);