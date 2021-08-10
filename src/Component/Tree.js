import { Tree as AntTree } from "antd";
import { useEffect, useState } from "react";
import {generateDataToTree, getNodePath, hasPath} from "../Util/functions";

const Tree = ({data, onSelectors, onExpanding, ...rest}) => {
    const [dataTree, setDataTree] = useState([]),
    [currentTree, setCurrentTree] = useState(null),
    [path , setPath] = useState("");

    useEffect(() => {
        let newData = generateDataToTree(data);
        
        setDataTree([...newData]);
    }, [data]);

    useEffect(() => {
        setCurrentTree({
            key: 0,
            childNode: generateDataToTree(data)
        })
    }, [data])
    
    useEffect(async () => {   
        new Promise((resolve, reject) => {
            resolve(hasPath(currentTree, {key: 1.11}, []));   
        })
    }, [currentTree])

    const generateDataToTree = data => {
        const treeModel = data.length > 0 && data.map(item => 
            ({
                title: item.title,
                key: item.key,
                children: !!item.select && generateDataToTree(item.select)
            })
        );
        return treeModel;
    }

    const onSelect = (selectedKeys, info) => {
        return onSelectors({
            title: info.node.title,
            keys: selectedKeys,
            tabInfo: info,
            treeDataModel: currentTree
        })
    }
    
    const onExpand = (expandKey, info)=> {
        return onExpanding({
            title: info.node.title,
            keys: expandKey,
            tabInfo: info,
            treeDataModel: currentTree
        })
    }

    return (
        <AntTree {...rest} 
            onExpand={onExpand} 
            onSelect={(selectedKeys, info) => onSelect(selectedKeys, info)}
            treeData={dataTree}
        />
    )
}

export default Tree;