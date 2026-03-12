# Binary Search Trees

A JavaScript implementation of a balanced Binary Search Tree (BST), built as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-binary-search-trees) curriculum.

## Features

- Build a balanced BST from an unsorted array (duplicates removed automatically)
- Insert and delete nodes while preserving BST properties
- Search for values with `includes`
- Traversals: level-order, pre-order, in-order, post-order
- Measure node `height` and `depth`
- Check if the tree is balanced with `isBalanced`
- Rebalance an unbalanced tree with `rebalance`

## Project Structure

```
├── Node.js      # Node class
├── Tree.js      # Tree class with all BST methods
├── main.js      # Driver script
└── README.md
```

## Getting Started

**Prerequisites:** Node.js installed on your machine.

```bash
# Clone the repository
git clone https://github.com/jormaedes/binary-search-trees.git
cd binary-search-trees

# Run the driver script
node main.js
```

## API

| Method | Description |
|---|---|
| `includes(value)` | Returns `true` if value exists in the tree |
| `insert(value)` | Inserts a new node; ignores duplicates |
| `deleteItem(value)` | Removes a node; ignores missing values |
| `levelOrderForEach(cb)` | Breadth-first traversal |
| `inOrderForEach(cb)` | Depth-first: left → root → right |
| `preOrderForEach(cb)` | Depth-first: root → left → right |
| `postOrderForEach(cb)` | Depth-first: left → right → root |
| `height(value)` | Edges from node to deepest leaf |
| `depth(value)` | Edges from root to node |
| `isBalanced()` | Returns `true` if tree is balanced |
| `rebalance()` | Rebuilds the tree in a balanced state |
| `printTree()` | Visualises the tree in the console |

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.