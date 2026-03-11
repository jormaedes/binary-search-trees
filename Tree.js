import { Node } from "./Node.js";

export class Tree {
	constructor(arr) {
		this._root = this._buildTree(arr);
	}

	_filter(arr) {
		return [...new Set(arr.sort((a, b) => a - b))];
	}
}