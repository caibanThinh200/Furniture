import { HomeOutlined, DeleteOutlined } from "@ant-design/icons"

const Icon = props => {
    switch (props.type) {
        case "logo" : {
            return (
                <HomeOutlined {...props}/>
            )
        }
        case "delete" : {
            return ( 
                <DeleteOutlined {...props}/>
            )
        }
    }
}

export default Icon;