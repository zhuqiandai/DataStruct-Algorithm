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

  getNodes(vertice: string) {
    return this.adjList.get(vertice)
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
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F']

myVertices.forEach((item: string) => {
  graph.addVertex(item)
})

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')

/**
 *
 * @param graph 遍历的图
 * @param startVertex 开始节点
 */
const BFS = (graph: Graph, startVertex: string) => {
  // 队列存储 BFS 数据
  const queue = []
  queue.push(startVertex)

  // 使用 hashmap 存储父节点
  const parent = new Map()
  parent.set(startVertex, null) // 默认起始节点没有父节点

  // 使用 hashmap 存储遍历过的数据
  const seen = new Map()
  seen.set(startVertex, startVertex)

  while (queue.length > 0) {
    const vertex = queue.shift()
    const nodes = graph.getNodes(vertex!)
    nodes.forEach((edge: string) => {
      if (!seen.get(edge)) {
        queue.push(edge)
        seen.set(edge, edge)
      }

      if (!parent.get(edge) && edge !== startVertex) {
        parent.set(edge, vertex)
      }
    })
  }

  return parent
}

const par = BFS(graph, 'E')

// 计算从 B 到 E 的最短路径
let start = 'B'
while (start !== null) {
  console.log(start)
  start = par.get(start)
}

const DFS = (graph: Graph, startVertex: string) => {
  // 栈存储 BFS 数据
  const queue = []
  queue.push(startVertex)

  // 使用 hashmap 存储遍历过的数据
  const seen = new Map()
  seen.set(startVertex, startVertex)

  while (queue.length > 0) {
    const vertex = queue.pop()
    const nodes = graph.getNodes(vertex)
    nodes.forEach((edge: string) => {
      if (!seen.get(edge)) {
        queue.push(edge)
        seen.set(edge, edge)
      }
    })
    console.log(vertex)
  }
}
