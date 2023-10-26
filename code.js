
// Sources/references used:
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript

function dijkstra(graph, source) {
	// creates dictionary holding each node with distance of Infinity
	// source node with distance of 0
	var distGraph = {};
	for (var v in graph) {
		if (v == source) {
			distGraph[v] = 0;
		}
		else {
			distGraph[v] = Infinity;
		}
	}
    // used to keep track of nodes to visit and not visit
	var marked = [source];
	var cost = 0;
	var currentNode;
	var stack = [source];
	// while unmarked vertices remain
	while (marked.length != Object.keys(graph).length) {
		currentNode = stack.pop();
		// pushes all neighboring nodes onto stack
		for (var node in graph[currentNode]) {
			stack.push(node);
			cost = 0;
			// checks distance of each neighboring node
			for (let i = 0; i < stack.length; i++) {
				node = stack[i];

				if (!marked.includes(node)) {
					marked.push(node);
					cost = graph[currentNode][node];

					if (distGraph[currentNode] + cost < distGraph[node]) {
						distGraph[node] = distGraph[currentNode]+cost;
					}
				}	
			}
		}
	}
	// removes source node from list leaving every other node and their
	// distance from the source node
	delete distGraph[source];
	return distGraph;
}
// how I'm implementing my adjacency list
// I switched back to dictionaries, not sure what I was trying to accomlish using multidimensional arrays
// var graph0 = { 'A': {'B': 2},
// 			   'B': {'A': 2, 'C': 1, 'D': 5},
// 			   'C': {'B': 1, 'E': 1},
// 			   'D': {'B': 5, 'F': 6},
// 			   'E': {'C': 1, 'F': 9},
// 			   'F': {'D': 6, 'E': 9} };
