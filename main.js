import { Tree } from "./Tree.js";

// --- Helpers ---

function randomArray(size, max) {
	return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}

function printAllOrders(tree) {
	const levelOrder = [], preOrder = [], inOrder = [], postOrder = [];

	tree.levelOrderForEach((v) => levelOrder.push(v));
	tree.preOrderForEach((v) => preOrder.push(v));
	tree.inOrderForEach((v) => inOrder.push(v));
	tree.postOrderForEach((v) => postOrder.push(v));

	console.log("  Level order :", levelOrder.join(", "));
	console.log("  Pre order   :", preOrder.join(", "));
	console.log("  In order    :", inOrder.join(", "));
	console.log("  Post order  :", postOrder.join(", "));
}

// --- Driver ---

// 1. Create BST from random numbers < 100
const arr = randomArray(15, 100);
console.log("Input array:", arr);

const tree = new Tree(arr);
tree.printTree();

// 2. Confirm balanced
console.log("\n[1] Is balanced?", tree.isBalanced());

// 3. Print all traversals
console.log("\n[2] Traversals:");
printAllOrders(tree);

// 4. Unbalance the tree by inserting numbers > 100
const extras = [150, 200, 250, 300, 350];
console.log("\n[3] Inserting", extras, "to unbalance...");
extras.forEach((v) => tree.insert(v));
tree.printTree();

// 5. Confirm unbalanced
console.log("\n[4] Is balanced?", tree.isBalanced());

// 6. Rebalance
console.log("\n[5] Rebalancing...");
tree.rebalance();
tree.printTree();

// 7. Confirm balanced again
console.log("\n[6] Is balanced?", tree.isBalanced());

// 8. Print all traversals again
console.log("\n[7] Traversals after rebalance:");
printAllOrders(tree);