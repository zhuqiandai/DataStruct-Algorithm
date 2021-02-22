/**
 *  1. 向图中添加一个新顶点
 *  2. 添加顶点的边
 */

class Graph {
  private isDirected // 是否有向图
  private vertices: string[] = [] // 顶点
  private adjList = new Map() // 邻接表

  constructor(isDirected = false) {
    this.isDirected = isDirected
  }

  addVertex(v: string) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }

  addEdge(v: string, w: string) {
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    this.adjList.get(v).push(w) // 从 v 到 w
    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }

  getVertices() {
    return this.vertices
  }

  getAdjList() {
    return this.adjList
  }
  toString() {
    let s = ''
    for (let i = 0; i < this.vertices.length; i++) {
      s += this.vertices[i] + ' -> '
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += neighbors[j] + ' '
      }
      s += '\n'
    }
    return s
  }
}

const graph = new Graph()
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']

myVertices.forEach((item: string) => {
  graph.addVertex(item)
})

graph.addEdge('A', 'C')

console.log(graph.toString())
