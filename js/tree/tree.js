class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/** 排序二叉树 */
class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    addNoe(v) {
        this.root = this._addChild(this.root, v);
    }

    _addChild(node, v) {
        if (!node) {
            this.size ++;
            return new Node(v);
        }
        if (node.value > v) {
            node.left = this._addChild(node.left, v);
        } else {
            node.right = this._addChild(node.right, v);
        }
        return node;
    }
}