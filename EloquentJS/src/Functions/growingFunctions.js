
export var growingFunctions = function() {
    var x = "outside"; // global variable

    var f1 = function () {
        var x = "inside f1"; // local variable, different from global variable // Hoisting of variable declaration, only declaration is hoisted not the assignment, so x is undefined at the time of console.log
    };
    f1();
    console.log(x); // Output: "outside" because the local variable x in f1 does not affect the global variable x

    var f2 = function () {
        x = "inside f2"; // reassigns the global variable x
    };
    f2();
    console.log(x); // Output: "inside f2" because the global variable x is reassigned within f2



//Note that in JavaScript, variables declared with var are function-scoped, and if a variable is not declared within a function, it refers to the global variable. In f1, the local variable x does not affect the global variable x, while in f2, the assignment to x changes the value of the global variable.

//Nested scope

    // var landscape = function (){
    //     var result = "";
        
    //     var flat = function(size){
    //         for(var count = 0; count < size; count++){
    //             result += '-';
    //         }
    //     }
    //     var mountain = function(size){
    //         for(var count=0; count < size; count++){
    //             result += "'";
    //         result += '\\';
    //         }
    //     }
    //     flat(3);
    //     mountain(4);
    //     flat(6);
    //     mountain(1);
    //     flat(1);
    //     return result;
    // }

    // console.log(landscape());
}
export var landscape = function(){
    var result = "";

    var flat = function (size) {
        for (var count = 0; count < size; count++) {
            result += '_';
        }
    };

    var mountain = function (size) {
        result += '/';
        for (var count = 0; count < size; count++) {
            result += "'";
        }
        result += '\\';
    };

    

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    console.log('Landscape function executed: ', output());
        function output() {
            return result;
        }

}