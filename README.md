[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12550619&assignment_repo_type=AssignmentRepo)
# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function. I have not provided any test code, but you can base
yours on test code from other exercises.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one!

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

## Runtime Analysis of my implementation

The complexity of my implementation would be $\Theta(n^3)$ where $n$ is the number of nodes in the given graph. I found the complexity from the fact that the first for loop in the graph will loop $n$ times as it must add a distance for each node, the while loop will also run $n$ times as it runs until every node has been marked. So far this gives us $n + n$ complexity. The while loop has nested for loops that will run $n$ to $(n-k)$ times as each node can only be connected to at most $n$ nodes (all nodes plus itself) or $(n-k)$, $k$ being the number of edges the given node has. This gives us a complexity of $n + (n*(n-k)*(n-k))$ or $n + n^3$. Thus the overall complexity of this implementation is $\Theta(n^3)$
