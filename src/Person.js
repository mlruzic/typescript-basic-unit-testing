define(["require", "exports"], function (require, exports) {
    var Person = (function () {
        function Person(name) {
            this.name = name || "Kokolo";
        }
        return Person;
    })();
    return Person;
});
