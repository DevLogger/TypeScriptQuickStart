///<reference path="User.ts"/>
var MyUser = (function () {
    function MyUser(name) {
        this.name = name;
    }
    MyUser.prototype.greet = function () {
        return "Hi my name is " + this.name;
    };
    return MyUser;
}());
///<reference path="MyUser.ts"/>
document.getElementById("greet").innerHTML = new MyUser('Devlogger').greet();
