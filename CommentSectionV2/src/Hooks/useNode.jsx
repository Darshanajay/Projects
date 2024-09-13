const useNode = () => {
  const addNode = (tree, commentId, item) => {
    if (tree.id === commentId) {
      tree.items.push({
        id: new Date().getTime(),
        name: item,
        items: [],
      });
      return tree;
    }

    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return addNode(ob, commentId, item);
    });
    return { ...tree, items: latestNode };
  };
  const editNode = (tree, commentId, value) => {};
  const deleteNode = (tree, id) => {
    if (tree.id === id) {
      return tree.items.filter((ele) => ele.id !== id);
    }
    const latestNode = tree.items.map((ele) => deleteNode(ele, id));
    return { ...tree, items: latestNode };
  };

  return { addNode, editNode, deleteNode };
};

export default useNode;
