///<reference path="User.ts"/>

class MyUser implements User {
    private name : string;

    constructor(name : string){
        this.name = name;
    }

    public getName(){
        return name;
    }

    public greet() : string {
        return "Hi my name is " + this.getName();
    }
}
