import { Tag } from "antd";
import { Fragment, useEffect, useState } from "react";
import Wrapper from "../../../Component/Wrapper";
import TAG_DEFINE from "../../../constant/define";
import ProductItem from "./ProductItem";

const ProductList = props => {
    const [filterResult, setFilterResult] = useState([]);

    useEffect(() => {
        setFilterResult(props.filterResult);
    }, [props.filterResult])
    console.log(filterResult);
    return (
        <Wrapper className="row"> 
            {
                filterResult.tag && <Wrapper className="col-12 mb-5">
                    <span className="h4 mb-5">Kết quả tìm kiếm: </span>
                    <Tag color="green" className="h4">
                        {
                            filterResult.tag
                        }
                    </Tag> 
                </Wrapper>
            }
            {
                [1,2,3,4,5,2,2,2,2].map((item, index) => 
                    <ProductItem key={index} className="col-3 mr-5 mb-5"/>
                )
            }
        </Wrapper>
    )
}

export default ProductList;