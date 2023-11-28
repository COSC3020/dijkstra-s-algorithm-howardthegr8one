
// Sources/references used:
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript

function dijkstra(graph, source) {

	// creates dictionary holding each node with distance of Infinity
	// source node with distance of 0
    let unvisited = []
	let distGraph = {}
	for (let v in graph) {
		if (v == source) 
			distGraph[v] = 0;
		else 
			distGraph[v] = Infinity;
        unvisited.push(v)
	}
    let currentNode = source
    let neighbors = []

    // while unvisited nodes remain
    while(unvisited.length > 0) {

        // for each edge connected to currentNode
        for (let neighbor in graph[currentNode]) {
            neighbors.push(neighbor)
            let cost = distGraph[currentNode] + graph[currentNode][neighbor]
            distGraph[neighbor] = Math.min(distGraph[neighbor], cost)
        }
        let i = unvisited.indexOf(currentNode)
        unvisited.splice(i, 1)
        let lowest = Infinity
        for(let i = 0; i < neighbors.length; i++) {
            if( (distGraph[neighbors[i]] < lowest) && (unvisited.includes(neighbors[i])) ) {
                currentNode = neighbors[i]
				lowest = distGraph[neighbors[i]] 
		}
        }
    }
    return distGraph
}

// how I'm implementing my adjacency list
// I switched back to dictionaries, not sure what I was trying to accomlish using multidimensional arrays
// var graph0 = { 'A': {'B': 2},
// 			   'B': {'A': 2, 'C': 1, 'D': 5},
// 			   'C': {'B': 1, 'E': 1},
// 			   'D': {'B': 5, 'F': 6},
// 			   'E': {'C': 1, 'F': 9},
// 			   'F': {'D': 6, 'E': 9} };
