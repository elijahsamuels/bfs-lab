function bfs(rootNode, vertices, edges) {
    rootNode.distance = 0;
    let discovered = [rootNode];
    let queue = [rootNode];

    while (discovered.length > 0) {
        let currentNode = discovered.shift();
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges);
        queue = queue.concat(adjacentNodes);
        markDistanceAndPredecessor(currentNode, adjacentNodes);
        queue = queue.concat(adjacentNodes);
    }
    return queue;
}

function findAdjacent(nodeName, vertices, edges) {
    let queue = [];
    console.log("nodeName: ", nodeName);
    console.log("vertices: ", vertices);
    // console.log("edges: ", edges);

    if (vertices.distance === 0) {
        queue.push(vertices);
    }

    // while (node.length > 0) {
    //     queue.push(node);
    // }

    // // console.log("node[0].name: ", node[0].name)
    // // console.log("node[0].distance: ", node[0].distance)
    // // console.log("node[0].predecessor: ", node[0].predecessor)

    // // if (node !== null) {
    // // 	queue.push(node)
    // // }

    console.log("Queue returning: ", queue);
    return queue;
}
