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
}
