import { Collapse as AntCollapse } from "antd"
import { useEffect, useState } from "react";

const Collapse = ({children, data, ...rest}) => {
    const [dataPanel, setDataPanel] = useState(data);
    
    useEffect(() => {
        setDataPanel(data)
    }, [data]);
    
    return <AntCollapse {...rest}>
        {
            dataPanel.categories.map(item => 
                <AntCollapse.Panel header={item.title}>
                    {children}
                </AntCollapse.Panel>
            )
        }
    </AntCollapse>
}

export default Collapse;