
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

/*
     C--E
    /   |
A--B    |
    \   |
     D--F
*/
var graph0 = { 'A': {'B': 2},
			   'B': {'A': 2, 'C': 1, 'D': 5},
			   'C': {'B': 1, 'E': 1},
			   'D': {'B': 5, 'F': 6},
			   'E': {'C': 1, 'F': 9},
			   'F': {'D': 6, 'E': 9} };

/*
   B----D
  /|    |\
 / |    | \ 
A  |    |  F
 \ |    | /
  \|    |/
   C----E
*/
var graph1 = { 'A': {'B': 2, 'C': 4},
			   'B': {'A': 2, 'C': 1, 'D': 7},
			   'C': {'A': 4, 'B': 1, 'E': 3},
			   'D': {'B': 7, 'E': 2, 'F': 1},
			   'E': {'C': 3, 'D': 2, 'F': 5},
			   'F': {'E': 5, 'D': 1} };

// test with graph0 and A as source node
// correct output: { B: 2, C: 3, D: 7, E: 4, F: 13 }
var distFromSource = [];
var source = 'A';
distFromSource = dijkstra(graph0, source);
console.log(source + " distance from nodes: ");
console.log(distFromSource);
console.log("correct output: ")
console.log("{ B: 2, C: 3, D: 7, E: 4, F: 13 }")

// test with graph1 and A as source node
// correct output: { B: 2, C: 4, D: 9, E: 7, F: 12 }
distFromSource = [];
distFromSource = dijkstra(graph1, source);
console.log(source + " distance from nodes: ");
console.log(distFromSource);
console.log("correct output: ")
console.log("{ B: 2, C: 4, D: 9, E: 7, F: 12 }")

// how I'm implementing my adjacency list
// I switched back to dictionaries, not sure what I was trying to accomlish using multidimensional arrays
// var graph0 = { 'A': {'B': 2},
// 			   'B': {'A': 2, 'C': 1, 'D': 5},
// 			   'C': {'B': 1, 'E': 1},
// 			   'D': {'B': 5, 'F': 6},
// 			   'E': {'C': 1, 'F': 9},
// 			   'F': {'D': 6, 'E': 9} };
