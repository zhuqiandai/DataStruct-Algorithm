/**
 *  1. 向图中添加一个新顶点
 *  2. 添加顶点的边
 */
var Graph = /** @class */ (function () {
    function Graph(isDirected) {
        if (isDirected === void 0) { isDirected = false; }
        this.vertices = []; // 顶点
        this.adjList = new Map(); // 邻接表
        this.isDirected = isDirected;
    }
    Graph.prototype.addVertex = function (v) {
        if (!this.vertices.includes(v)) {
            this.vertices.push(v);
            this.adjList.set(v, []);
        }
    };
    Graph.prototype.addEdge = function (v, w) {
        if (!this.adjList.get(v)) {
            this.addVertex(v);
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w);
        }
        this.adjList.get(v).push(w); // 从 v 到 w
        if (!this.isDirected) {
            this.adjList.get(w).push(v);
        }
    };
    Graph.prototype.getVertices = function () {
        return this.vertices;
    };
    Graph.prototype.getAdjList = function () {
        return this.adjList;
    };
    Graph.prototype.toString = function () {
        var s = '';
        for (var i = 0; i < this.vertices.length; i++) {
            s += this.vertices[i] + ' -> ';
            var neighbors = this.adjList.get(this.vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    };
    return Graph;
}());
var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
myVertices.forEach(function (item) {
    graph.addVertex(item);
});
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'A');
graph.addEdge('B', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'A');
graph.addEdge('C', 'B');
graph.addEdge('C', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'B');
graph.addEdge('D', 'C');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'C');
graph.addEdge('E', 'D');
graph.addEdge('F', 'D');
console.log(graph.toString());
