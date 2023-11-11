/*
There is a directed weighted graph that consists of n nodes numbered from 0 to n - 1. The edges of the graph are initially represented by the given array edges where edges[i] = [fromi, toi, edgeCosti] meaning that there is an edge from fromi to toi with the cost edgeCosti.

Implement the Graph class:

Graph(int n, int[][] edges) initializes the object with n nodes and the given edges.
addEdge(int[] edge) adds an edge to the list of edges where edge = [from, to, edgeCost]. It is guaranteed that there is no edge between the two nodes before adding this one.
int shortestPath(int node1, int node2) returns the minimum cost of a path from node1 to node2. If no path exists, return -1. The cost of a path is the sum of the costs of the edges in the path.
*/

class Graph {
	private adjacencyList: Map<number, { node: number; weight: number }[]>;

	constructor(n: number, edges: number[][]) {
		this.adjacencyList = new Map();
		for (let i = 0; i < n; i++) {
			this.adjacencyList.set(i, []);
		}
		for (let edge of edges) {
			this.addEdge(edge);
		}
	}

	addEdge(edge: number[]) {
		const [from, to, edgeCost] = edge;
		this.adjacencyList.get(from)!.push({ node: to, weight: edgeCost });
	}

	shortestPath(node1: number, node2: number): number {
		const distances = new Map();
		for (let node of this.adjacencyList.keys()) {
			distances.set(node, Infinity);
		}
		distances.set(node1, 0);

		const queue = [{ node: node1, distance: 0 }];
		while (queue.length > 0) {
			queue.sort((a, b) => a.distance - b.distance);
			const current = queue.shift()!;
			for (let neighbor of this.adjacencyList.get(current.node)!) {
				const distance = current.distance + neighbor.weight;
				if (distance < distances.get(neighbor.node)!) {
					distances.set(neighbor.node, distance);
					queue.push({ node: neighbor.node, distance });
				}
			}
		}

		return distances.get(node2) === Infinity ? -1 : distances.get(node2)!;
	}
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
