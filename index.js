function Node (key, value) {
    this.key = key;
    this.value = value;

    this.left = null;
    this.right = null;
}

function BinarySearchTree () {
    this._root = null;//new Node();
}


BinarySearchTree.prototype.insert = function (key, value) {
    var node = new Node(key, value);
    if (!this._root) {
        this._root = node;
    } else {
        var currentRoot = this._root;

        while (currentRoot) {
            if (node.key < currentRoot.key) {
                if (!currentRoot.left) {
                    currentRoot.left = node;
                    break;
                }
                currentRoot = currentRoot.left;
            } else if (node.key > currentRoot.key) {
                if (!currentRoot.right) {
                    currentRoot.right = node;
                    break;
                }
                currentRoot = currentRoot.right;
            } else {
                break;
            }
        }
    }

    return this;
};

BinarySearchTree.prototype.root = function () {
    if (this._root) {
        return this._root.value;
    } else {
        return null;
    }
}

BinarySearchTree.prototype.delete = function (key) {
    var that = this;

    var removeNode = function (node, key) {
        if (!node) {
            return null;
        }
        if (key === node.key) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }


            // 2 children
            var temp = that.getMin(node.right);
            node.key = temp.key;
            node.value = temp.value;
            node.right = removeNode(node.right, temp);
            return node;

        } else if (key < node.key) {
            node.left = removeNode(node.left, key);
            return node;
        } else {
            node.right = removeNode(node.right, key);
            return node;
        }
    };

    this._root = removeNode(this._root, key);
    return this;
}

BinarySearchTree.prototype.getMin = function (node) {
    if (!node) {
        node = this._root;
    }
    while (node.left) {
        node = node.left;
    }
    return node;
};

BinarySearchTree.prototype.search = function (key) {
    var result = null;

    function search (node, key) {
        if ((node === null) || (key === node.key)) {
            return node;
        } else if (key < node.key) {
            return search(node.left, key)
        } else {
            return search(node.right, key)
        }
    }

    var node = search(this._root, key);

    if (node) {
        result = node.value;

    }

    return result;
}

BinarySearchTree.prototype.contains = function (value) {
    var result = false;

    this.traverseOne(function (node) {
        if (result) {
            return;
        }
        result = (node.value === value);
    });

    return result;
}


BinarySearchTree.prototype.traverseOne = function (fn) {
    var current = this._root;
    this.inOrder(current, fn);
};

BinarySearchTree.prototype.traverse = function (order) {
    var result = [];

    this.traverseOne(function (node) {
        result.push(node.value);
    });

    if (!order) {
        result = result.reverse();
    }

    return result;
};

BinarySearchTree.prototype.inOrder = function (node, fn) {
    if (node) {
        this.inOrder(node.left, fn);
        if (fn) {
            fn(node);
        }
        this.inOrder(node.right, fn);
    }
};
BinarySearchTree.prototype.verify = function () {

    function check (root, min, max) {
        if (root === null) {
            return true
        }
        if ((root.key <= min) || (max <= root.key)) {
            return false
        } else {
            return check(root.left, min, root.key) && check(root.right, root.key, max)
        }

    }

    return check(this._root, -Infinity, Infinity)
}


function test () {
    var bst = new BinarySearchTree();
    //------7--------
    //--6--------34--
    //-4-------20--65-
    var elements = [
        7,
        6,
        34,
        4,
        65,
        20
    ];

    elements.forEach((element) => {
        bst.insert(element, 'elem' + element);
    });

    var del = bst.contains('elem7')
}


test();


module.exports = {
    BinarySearchTree,

    //WARNING!!!
    //PROVIDE BST STRUCTURE FOR TESTS {STRING}
    root: '_root',
    left: 'left',
    right: 'right',
    student: 'Maryna Sakovich'
};
