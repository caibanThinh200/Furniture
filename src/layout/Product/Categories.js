import { Divider, Dropdown } from "antd";
import Wrapper from "../../Component/Wrapper";
import TAG_DEFINE from "../../constant/define";
import {Dummy} from "../../constant/dummy";
import "../../style/categories.scss"
import Collapse from "../../Component/Collapse";
import Tree from "../../Component/Tree";
import { useState } from "react";

const Categories = props => {
    const [selectedCate ,setSelectedCate] = useState([]);

    const onCateSelected = e => {
        // setSelectedCate([...selectedCate, ...e]);
        props.onFilterChange(e);
    }

    const onExpanding = e => {
        props.onExpandChange(e);
    }
    
    return (
        <Wrapper className="furniture_product__filter mt-4">
            <Wrapper className="mt-3">
                <h2 className="text-center furniture_categories__title">
                    {
                        TAG_DEFINE.CATEGORIES.title
                    }
                </h2>
            </Wrapper>
            <Wrapper className="furniture_product__filter__item">
                {/* {
                    TAG_DEFINE.PAGE.HOMEPAGE.CATEGORIES_BOX.length > 0 && TAG_DEFINE.PAGE.HOMEPAGE.CATEGORIES_BOX.map(item => 
                        <div></div>
                    )
                } */}
                <Tree 
                    data={Dummy.categories} 
                    onSelectors={onCateSelected} 
                    onExpanding={onExpanding}
                />
            </Wrapper>
        </Wrapper>
    )
}

export default Categories;