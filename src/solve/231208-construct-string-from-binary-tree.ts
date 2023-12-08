/*
Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.
*/

export const tree2str = (root: TreeNode | null): string => {
	if (root === null) {
		return '';
	}

	const left = tree2str(root.left);
	const right = tree2str(root.right);

	if (left === '' && right === '') {
		return `${root.val}`;
	}

	if (left === '') {
		return `${root.val}()(${right})`;
	}

	if (right === '') {
		return `${root.val}(${left})`;
	}

	return `${root.val}(${left})(${right})`;
};

class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}
