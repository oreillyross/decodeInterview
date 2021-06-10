"use strict";
exports.__esModule = true;
exports.usage = void 0;
var LinkedList_1 = require("./src/LinkedList");
var linkedList = new LinkedList_1.LinkedList();
linkedList.insertAtEnd({ name: "Bob" });
linkedList.insertInBegin({ name: "John" });
var list = linkedList.traverse();
console.log(list);
var found = linkedList.search(function (_a) {
    var name = _a.name;
    return name === "Bob";
});
console.log(found);
exports.usage = "empty string";
