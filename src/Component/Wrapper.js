import clsx from "clsx";
import "../style/component/Wrapper.scss"

const Wrapper = ({children, hoverable, className, shadow, ...rest}) => {
    return (
        <div {...rest}
            className={clsx(className, hoverable && "furniture-wrapper--hover",
                shadow && "furniture-wrapper--shadow")}>
            {children}
        </div>
    )   
}

export default Wrapper; 