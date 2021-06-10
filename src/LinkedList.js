"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.insertInBegin = function (data) {
        var node = new LinkedListNode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return node;
    };
    LinkedList.prototype.insertAtEnd = function (data) {
        var node = new LinkedListNode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var getLast_1 = function (node) {
                return node.next ? getLast_1(node.next) : node;
            };
            var lastNode = getLast_1(this.head);
            node.prev = lastNode;
            lastNode.next = node;
        }
        return node;
    };
    LinkedList.prototype.deleteNode = function (node) {
        if (!node.prev) {
            this.head = node.next;
        }
        else {
            var prevNode = node.prev;
            prevNode.next = node.next;
        }
    };
    LinkedList.prototype.traverse = function () {
        var array = [];
        if (!this.head) {
            return array;
        }
        var addToArray = function (node) {
            array.push(node.data);
            return node.next ? addToArray(node.next) : array;
        };
        return addToArray(this.head);
    };
    LinkedList.prototype.size = function () {
        return this.traverse().length;
    };
    LinkedList.prototype.search = function (comparator) {
        var checkNext = function (node) {
            if (comparator(node.data)) {
                return node;
            }
            return node.next ? checkNext(node.next) : null;
        };
        return this.head ? checkNext(this.head) : null;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
