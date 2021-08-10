export const NavigateWithPath = (code = "", query = "", history) => {
    
}

export const generateDataToTree = (data, isRoot) => {
    const newTree = data.map(item => {
        return {
            key: item.key,
            title: item.title,
            childNode: item.select && item.select.length > 0 && generateDataToTree(item.select, false) || []
        }
    })
    return newTree
}

export const hasPath = (root, selectNode, arr) => {
    if(!root) {
        return;
    }
    if(root) {
        console.log(root);
        arr.push({
            key: root.key || 0,
            title: root.title || ""
        });
    }
    console.log(arr);
    if(root.key === selectNode.key) {
        return true;
    } 
    if(root.childNode) {
        root.childNode.forEach(node => {
            hasPath(node, selectNode, arr);
            return true;
        });
    } else {
        arr.pop();
        return false;
    }
    return getNodePath(arr);
}
       
export const getNodePath = async (keys) => {
    let path = "";
    if(keys) {
        keys.map((i, k) => {
            if(k <= keys.length) {
                path += `${i.title} -> `;
            } else {
                path += i.title
            }
        })
    }
    return path;
}