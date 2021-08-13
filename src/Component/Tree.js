import { Tree as AntTree } from "antd";
import { useEffect, useState } from "react";
import {generateDataToTree, getNodePath, hasPath, endingAt} from "../Util/functions";

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
            children: generateDataToTree(data)
        })
    }, [data])
    
    const generateDataToTree = data => {
        const treeModel = data.length > 0 && data.map(item => 
            ({
                title: item.title,
                key: item.key,
                children: !!item.select && generateDataToTree(item.select) || []
            })
        );
        return treeModel;
    }

    const onSelect = async (selectedKeys, info) => {
        console.log(selectedKeys);
        const pathResult = await Promise.all([endingAt(currentTree, selectedKeys[0]).next().value]);
        return onSelectors({
            title: info.node.title,
            keys: selectedKeys,
            tabInfo: info,
            path: pathResult[0],
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
    console.log(dataTree);
    return (
        <AntTree {...rest} 
            onExpand={onExpand} 
            onSelect={(selectedKeys, info) => onSelect(selectedKeys, info)}
            treeData={dataTree}
        />
    )
}

export default Tree;