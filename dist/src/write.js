"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GraphWriter_1 = require("./GraphWriter");
function checkArray(graph) {
    if (!Array.isArray(graph)) {
        throw new Error(`Not an array: ${String(graph) || "<empty>"}`);
    }
}
function checkGraph(graph) {
    if (graph.length < 2 || graph.slice(0, 2).some(element => !(element instanceof Set))) {
        throw new Error(`Not a graph: [${graph.join(", ")}]`);
    }
}
function checkVertexSet(graph) {
    if (Array.from(graph[0]).some(vertex => typeof vertex !== "object")) {
        throw new Error("Invalid vertex set.");
    }
}
function checkArcSet(graph) {
    if (Array.from(graph[1]).some(arc => !Array.isArray(arc) || arc.length < 3 || typeof arc[0] !== "object" || typeof arc[1] !== "object" || typeof arc[2] !== "number")) {
        throw new Error("Invalid arc set.");
    }
}
function write(graph) {
    checkArray(graph);
    checkGraph(graph);
    checkVertexSet(graph);
    checkArcSet(graph);
    return new GraphWriter_1.default(graph).write();
}
exports.write = write;
