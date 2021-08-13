import Wrapper from "../../Component/Wrapper";
import PageLayout from "../../Component/PageLayout";
import { Fragment, useState } from "react";
import Categories from "./Categories";
import "../../style/product.scss"
import clsx from "clsx";
import ProductList from "./ProductList/ProductList";

const Product = props => {
    const [filterSelected, setFilterSelected] = useState({}),
    [tagResult, setTagResult] = useState({}),
    [currentBranch, setCurrentBranch] = useState([]);

    const onFilterChange = e => {
        setFilterSelected({
            tag: e.path
        });   
    }

    const onExpandChange = e => {
        if(tagResult.key) {
            if(tagResult.key.includes(e.keys[e.keys.lenght-1])) {
                setTagResult({
                    key: e.keys,
                    title: tagResult.title && `${tagResult.title} -> ${e.title}`
                });
            } else {
                setTagResult({
                    key: e.keys,
                    title: e.title
                });
            }
        } else {
            setTagResult({
                key: e.keys,
                title: e.title
            });
        }
        setCurrentBranch(e.tabInfo.node.children.map(item => ({
                    title: item.title,
                    key: item.key
                })
            )
        );
    }

    return (
        <Wrapper className={clsx("mt-5 container", props.className)}>
            <PageLayout
                className="ml-5 container"
                sider={<Categories 
                        onExpandChange={onExpandChange} 
                        onFilterChange={onFilterChange}
                    />}
                breadcrumb
            >
                <ProductList tagResult={tagResult} filterResult={filterSelected}/>
            </PageLayout>
        </Wrapper>
    )
}
 
export default Product;