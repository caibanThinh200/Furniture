export const NavigateWithPath = (code = "", query = "", history) => {};

export const generateDataToTree = (data, isRoot) => {
  const newTree = data.map((item) => {
    return {
      key: item.key || 0,
      title: item.title || "",
      childNode: (item.select && item.select.length > 0 && generateDataToTree(item.select, false)) || []
    };
  });
  return newTree;
};

export const getNodePath = async (keys) => {
  let path = "";
  if (keys) {
    keys.map((i, k) => {
      if(i.title) {
        if (k < keys.length - 1) {
        path += `${i.title} -> `;
        } else {
          path += i.title;
        }
      }
    });
  }
  return path;
};

export function hasPath(root, selectNode, arr, founded = false) {
  if (!root) {
    return false;
  } else {
    if (root) {
      if (root.key !== 0) {
        arr.push({
          key: root.key,
          title: root.title,
        });
      }
      if (selectNode.key === root.key) {
        founded = true;
        return true;
      }
      if (root.children.length > 0 && !founded) {
        root.children.forEach((node) => {
          hasPath(node, selectNode, arr, founded);
        });
      } else if (!founded) {
        arr.pop();
      }
      // console.log(founded,root.key,founded && getNodePath(arr))
      return founded && getNodePath(arr);
    }
  }
}

export function* generateChildrenNodes(node, r = []) {
  if(node) {
    if (node.children.length === 0) yield [...r, { key: node.key || 0, title: node.title || "" }];
    else {
      for (const q of node.children) yield* generateChildrenNodes(q, [...r, { key: node.key || 0, title: node.title || "" }]);
    }
  }
}

export function* endingAt(t, loc) {
  for (const r of generateChildrenNodes(t)) {
      if (r[r.length - 1].key === loc) {
      yield getNodePath(r);
    }
  }
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}