
// Sources/references used:
// https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript

function dijkstra(graph, sourceNode) {

    // populates unvisited array with all nodes and
    // distGraph array with either 0 for the sourceNode and Infinity otherwise
    var unvisited = new Array();
    var distGraph = new Array();
    var index = 0;
    for (node of graph) {
        unvisited.push(node[0])
        if (node[0] == sourceNode)
            distGraph[index] = [node[0], 0]
        else
            distGraph[index] = [node[0], Infinity]
        index++;
        for (var i = 1; i < node.length; i++) {
        }
    }

    // while unvisited nodes remain
    var currentNode = Infinity
    while (unvisited.length > 0) {
        for (node in distGraph) {
            if (distGraph[node][1] < currentNode) {
                currentNode = node;
            }
        }

        for (var i = 1; i < graph[currentNode].length; i++) {
            if (graph[i][1] != undefined) {
                if (distGraph[currentNode][1] + graph[currentNode][i][1]  < distGraph[i][1]) {
                    distGraph[i][1] = distGraph[currentNode][1] + graph[currentNode][i][1]
                }
            }
            else {
                distGraph[i][1] = distGraph[currentNode][1]
            }
        }
    }
    return distGraph;
}
// how I'm implementing my adjacency list
// legend: [node, [neighbor, weight], [neighbor, weight]]
//testGraph0 = [
//    [1, [2,5], [3,4]],
//    [2, [4,1]],
//    [3, [4,1]],
//    [4]
//]
