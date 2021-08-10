import { HomeOutlined } from "@ant-design/icons"

const Icon = props => {
    switch (props.type) {
        case "logo" : {
            return (
                <HomeOutlined {...props}/>
            )
        }
    }
}

export default Icon;