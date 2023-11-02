export const binarySearchTree = (A: number[]) => {
	class Node {
		value: number;
		left: Node | null;
		right: Node | null;

		constructor(value: number) {
			this.value = value;
			this.left = null;
			this.right = null;
		}
	}

	class BinarySearchTree {
		root: Node | null;

		constructor() {
			this.root = null;
		}

		insert = (value: number) => {
			const newNode = new Node(value);
			if (!this.root) {
				this.root = newNode;
				return this;
			} else {
				let current = this.root;
				while (true) {
					if (value <= current.value) {
						if (!current.left) {
							current.left = newNode;
							return;
						} else {
							current = current.left;
						}
					} else if (value > current.value) {
						if (!current.right) {
							current.right = newNode;
							return;
						} else {
							current = current.right;
						}
					}
				}
			}
		};

		find = (value: number) => {
			if (!this.root) return false;

			let current: Node | null = this.root;
			let done = false;

			while (current && !done) {
				if (value < current.value) {
					current = current.left;
				} else if (value > current.value) {
					current = current.right;
				} else {
					done = true;
				}
			}

			return done ? current : null;
		};

		sort = () => {
			const result: number[] = [];

			const traverse = (node: Node) => {
				if (node.left) traverse(node.left);
				result.push(node.value);
				if (node.right) traverse(node.right);
			};

			traverse(this.root!);

			return result;
		};
	}

	const tree = new BinarySearchTree();
	A.forEach((a) => tree.insert(a));

	return tree.sort();
};
