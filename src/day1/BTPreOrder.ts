function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
	//base case
	if(!curr) {
		return path;
	}

	// recursion
	// pre
	path.push(curr.value);
	// rec
	walk(curr.left, path);
	walk(curr.right, path);
	// post
	return path;
}
export default function pre_order_search(head: BinaryNode<number>): number[] {
	return walk(head, []);
}
