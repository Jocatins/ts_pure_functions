var data = 90;
var func1 = function (data) {
    data--;
};
var func2 = function (data) {
    console.log("data (90): " + data);
};
func1(data);
setTimeout(function () { return func2(data); }, 1000);
