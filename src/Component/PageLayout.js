import { Breadcrumb, Layout as AntLayout } from "antd";
import Wrapper from "./Wrapper";
import "../style/component/PageLayout.scss"
import clsx from "clsx";

const Layout = ({sider, children, className,breadcrumb, ...rest})=> {
    console.log(className)
    const {Content, Sider} = AntLayout
    return (
        <Wrapper className={clsx(className)} {...rest}>
            {
                breadcrumb && <Breadcrumb className="mb-5 col-12">
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Product</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Chair</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Ergo</Breadcrumb.Item>
                </Breadcrumb>
            }
            <AntLayout className="row furniture_page-layout">
                {
                   sider && <Sider theme="light" className="p-4 mr-5">
                        {sider}
                    </Sider>
                }
                {
                    <Content className="p-5 ml-5">
                        {children}
                    </Content>
                }
            </AntLayout>
        </Wrapper>
        
    )

}

export default Layout;