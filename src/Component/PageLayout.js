import { Breadcrumb, Layout as AntLayout, PageHeader } from "antd";
import Wrapper from "./Wrapper";
import "../style/component/PageLayout.scss"
import clsx from "clsx";
import { ROUTES } from "../Route/Routes";
import * as Func from "../Util/functions"
import { useState } from "react";
import { Link } from "react-router-dom";

const Layout = ({sider, children, className, breadcrumb, title, subTitle, ...rest})=> {
    const {Content, Sider, Header} = AntLayout;

    const getCurrentBreadCrumpPath = () => {
        let paths = [{
            href: "/",
            title: "Homepage"
        }];
        const path = (window.location.href || "").replace("http://localhost:3000/", "").split("/");
        Object.entries(ROUTES).forEach(route => {
            path.forEach(endpoint => {
                if(route[0].toUpperCase() === endpoint.toUpperCase()) {
                    paths.push({
                        href: route[1].path,
                        title: Func.capitalizeFirstLetter(endpoint)
                    });
                }
            });
        });
        return paths;
    }

    return (
        <Wrapper className={clsx(className, "mt-5 container mb-5")} {...rest}>
            {
                breadcrumb && <Breadcrumb className="mb-5 col-12">
                    {
                        getCurrentBreadCrumpPath().map((bread, index) => 
                            <Breadcrumb.Item key={index}>
                                {
                                    index === getCurrentBreadCrumpPath()[getCurrentBreadCrumpPath().length -1] 
                                        ? <span>{bread.title}</span> : <Link to={bread.href}>{bread.title}</Link>
                                }
                            </Breadcrumb.Item>    
                        )
                    }
                </Breadcrumb>
            }
            <AntLayout className="row furniture_page-layout p-5">
                    <Wrapper className="justify-content-center w-100 mb-5">
                        {
                            title && <span className={clsx(sider ? "ml-50" : "ml-40","h1 w-100 font-weight-bold furniture_page-layout__title")}>
                                {title}
                            </span>
                        }
                    </Wrapper>
                
                {
                   sider && <Sider theme="light" className="p-4 mr-5">
                        {sider}
                    </Sider>
                }
                {
                    <Content className="p-3 ml-5">
                        {children}
                    </Content>
                }
            </AntLayout>
        </Wrapper>
        
    )
}

export default Layout;