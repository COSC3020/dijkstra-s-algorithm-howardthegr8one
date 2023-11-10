const fs = require('fs');
//const jsc = require('jsverify');
const assert = require('assert')

eval(fs.readFileSync('testDijkstra.js')+'');

function test0() {
    let source = 'A'
    let graph = { 
        'A': {'B': 2},
        'B': {'A': 2, 'C': 1, 'D': 5},
        'C': {'B': 1, 'E': 1},
        'D': {'B': 5, 'F': 6},
        'E': {'C': 1, 'F': 9},
        'F': {'D': 6, 'E': 9} 
    }
    let result = { A: 0, B: 2, C: 3, D: 7, E: 4, F: 13 }
    assert.equal(result, dijkstra(graph, source))
}

function test1() {
    let source = 'A'
    let graph1 = { 
	'A': {'B': 2, 'C': 4},
	'B': {'A': 2, 'C': 1, 'D': 7},
	'C': {'A': 4, 'B': 1, 'E': 3},
	'D': {'B': 7, 'E': 2, 'F': 1},
	'E': {'C': 3, 'D': 2, 'F': 5},
	'F': {'E': 5, 'D': 1} 
    }
    let result = { A: 0, B: 2, C: 3, D: 8, E: 6, F: 9 }
    assert.equal(result, dijkstra(graph1, source))
}

function test2() {
    let source = 'A'
    var graph2 = {
        'A': {'B': 1, 'C': 2, 'D': 3},
        'B': {'A': 1, 'E': 4},
        'C': {'A': 2, 'F': 5},
        'D': {'A': 3, 'G': 6},
        'E': {'B': 4, 'F': 7},
        'F': {'C': 5, 'E': 7},
        'G': {'D': 6}
    }
    let result = { A: 0, B: 1, C: 2, D: 3, E: 5, F: 7, G: 9 }
    assert.equal(result, dijkstra(graph2, source))
}

function test3() {
    let source = 'A'
    var graph3 = {
        'A': {'B': 1, 'E': 5},
        'B': {'A': 1, 'C': 2},
        'C': {'B': 2, 'D': 3, 'E': 4},
        'D': {'C': 3},
        'E': {'A': 5, 'C': 4}
    }
    let result = { A: 0, B: 1, C: 3, D: 6, E: 5 }
    assert.equal(result, dijkstra(graph3, source))
}

function test4() {
    let source = 'A'
    let graph4 = {
        'A': {}
    }
    let result = { A: 0 }
    assert.equal(result, dijkstra(graph4, source))
}

// console.log("Test 0: " + test0())
// console.log("Test 1: " + test1())
console.log("Test 2: " + test2())
// console.log("Test 3: " + test3())
// console.log("Test 4: " + test4())
