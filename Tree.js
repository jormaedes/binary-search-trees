import { Node } from "./Node.js";

export class Tree {
	constructor(arr) {
		this._root = this._buildTree(arr);
	}

	_filter(arr) {
		return [...new Set(arr.sort((a, b) => a - b))];
	}

	_fillTree(arr, start, end) {
		if (start > end) return null;
		const mid = start + Math.floor((end - start) / 2);
		let root = new Node(arr[mid]);

		root.left = this._fillTree(arr, start, mid - 1);
		root.right = this._fillTree(arr, mid + 1, end);
		return (root);
	}

	_buildTree(arr) {
		arr = this._filter(arr);
		return this._fillTree(arr, 0, arr.length - 1);
	}

	#prettyPrint(node, prefix = '', isLeft = true) {
		if (node === null || node === undefined) {
			return;
		}

		this.#prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
		console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
		this.#prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}

	includes(value) {
		let root = this._root;
		while (root) {
			if (root.data == value)
				return true;
			if (value > root.data)
				root = root.right;
			else
				root = root.left;
		}
		return false;
	}

	insert(value) {
		if (this.includes(value)) return;
		const newNode = new Node(value);
		let root = this._root;
		while (root) {
			if (value > root.data) {
				if (root.right == null) {
					root.right = newNode;
					return;
				}
				root = root.right;
			}
			else {
				if (root.left == null) {
					root.left = newNode;
					return;
				}
				root = root.left;
			}
		}
	}

	#nearest(root) {
		let near = root.left;
		while(near.right){
			near = near.right;
		}
		return near;
	}

	#deleteNode(root, value) {
		if (root.data == value) {
			if (!root.left && !root.right) return null;
			if (!root.left) return root.right;
			if (!root.right) return root.left;
			let near = this.#nearest(root);
			let aux = near.data;
			this.#deleteNode(root, near.data);
			root.data = aux;
			return (root);
		}
		if (value > root.data)
			root.right = this.#deleteNode(root.right, value);
		else
			root.left = this.#deleteNode(root.left, value);
		return root;
	}

	deleteItem(value) {
		if (!this.includes(value)) return ;
		this.#deleteNode(this._root, value);
	}

	#preOrderForEachREC(root, callback) {
		if (!root) return ;
		callback(root.data);
		this.#preOrderForEachREC(root.left, callback);
		this.#preOrderForEachREC(root.right, callback);
	}

	preOrderForEach(callback) {
		if (!callback) throw "preOrderForEach(callback): <expect callback function>";
		this.#preOrderForEachREC(this._root, callback)
	}

	#inOrderForEachRec(root, callback)
	{
		if (!root) return ;
		this.#inOrderForEachRec(root.left, callback);
		callback(root.data);
		this.#inOrderForEachRec(root.right, callback);
	}

	inOrderForEach(callback) {
		if (!callback) throw "inOrderForEach(callback): <expect callback function>";
		this.#inOrderForEachRec(this._root, callback);
	}

	#postOrderForEachRec(root, callback)
	{
		if (!root) return ;
		this.#postOrderForEachRec(root.left, callback);
		this.#postOrderForEachRec(root.right, callback);
		callback(root.data);
	}

	postOrderForEach(callback) {
		if (!callback) throw "postOrderForEach(callback): <expect callback function>";
		this.#postOrderForEachRec(this._root, callback);
	}

	levelOrderForEach(callback) {
		if (!callback) throw "levelOrderForEach(callback): <expect callback function>";
		const queue = [this._root];
		while (queue.length > 0) {
			const currentNode = queue.shift();
			callback(currentNode.data);
			if (currentNode.left)
				queue.push(currentNode.left);
			if (currentNode.right)
				queue.push(currentNode.right);
		}
	}

	printTree() {
		this.#prettyPrint(this._root);
	}
}
