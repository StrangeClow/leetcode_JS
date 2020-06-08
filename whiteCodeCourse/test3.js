var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this.foo);  
        console.log(self.foo);  
        (function() {
            console.log(this.foo);     //  当前this指向window  所以为undefined
            console.log(self.foo);  
        }());
    }
};
myObject.func();


let n = [1,3,6,9,4]
console.log(n.slice(1));
console.log(n);