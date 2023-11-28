const fs = require('fs');
const assert = require('assert')

eval(fs.readFileSync('code.js')+'');

describe('graph0 test', () => {
    const source = 'A'
    const graph = { 
        'A': {'B': 2},
        'B': {'A': 2, 'C': 1, 'D': 5},
        'C': {'B': 1, 'E': 1},
        'D': {'B': 5, 'F': 6},
        'E': {'C': 1, 'F': 9},
        'F': {'D': 6, 'E': 9} 
    }
    const solution = { A: 0, B: 2, C: 3, D: 7, E: 4, F: 13 }
    const result = dijkstra(graph, source)
    it('implementation result is correct', () => {
        assert.deepEqual(solution, result)
    })
})

describe('graph1 test', () => {
    const source = 'A'
    const graph1 = { 
    'A': {'B': 2, 'C': 4},
    'B': {'A': 2, 'C': 1, 'D': 7},
    'C': {'A': 4, 'B': 1, 'E': 3},
    'D': {'B': 7, 'E': 2, 'F': 1},
    'E': {'C': 3, 'D': 2, 'F': 5},
    'F': {'E': 5, 'D': 1} 
    }
    const result = { A: 0, B: 2, C: 3, D: 8, E: 6, F: 9 }
    it('implementation result is correct', () => {
        assert.deepEqual(result, dijkstra(graph1, source))
    })
})

describe('graph2 test', () => {
    const source = 'A'
    const graph2 = {
        'A': {'B': 1, 'C': 2, 'D': 3},
        'B': {'A': 1, 'E': 4},
        'C': {'A': 2, 'F': 5},
        'D': {'A': 3, 'G': 6},
        'E': {'B': 4, 'F': 7},
        'F': {'C': 5, 'E': 7},
        'G': {'D': 6}
    }
    const result = { A: 0, B: 1, C: 2, D: 3, E: 5, F: 7, G: 9 }
    it('implementation result is correct', () => {
        assert.deepEqual(result, dijkstra(graph2, source))
    })
})

describe('graph2 test', () => {
    const source = 'A'
    const graph3 = {
        'A': {'B': 1, 'E': 5},
        'B': {'A': 1, 'C': 2},
        'C': {'B': 2, 'D': 3, 'E': 4},
        'D': {'C': 3},
        'E': {'A': 5, 'C': 4}
    }
    const result = { A: 0, B: 1, C: 3, D: 6, E: 5 }
    it('implementation result is correct', () => {
        assert.deepEqual(result, dijkstra(graph3, source))
    })
})

describe('graph2 test', () => {
    const source = 'A'
    const graph4 = {
        'A': {}
    }
    const result = { A: 0 }
    it('implementation result is correct', () => {
        assert.deepEqual(result, dijkstra(graph4, source))
    })
})
