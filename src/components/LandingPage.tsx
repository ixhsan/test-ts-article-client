import ArticleList from "./ArticleList";
import ArticleDetails from "./ArticleDetails";
import { Layout, Card } from "antd";
import { Header, Content, Footer } from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import "../styles/LandingPage.css";
import { useState } from "react";
import Sider from "antd/es/layout/Sider";
import { ArticleType } from "../types/types";

const LandingPage = (): JSX.Element => {
  const [articleData, setArticleData] = useState<ArticleType>({});

  const loadContent = (data: ArticleType): void => {
    setArticleData({ ...data });
  };

  return (
    <Layout className="container">
      <Header className="header">
        <Title level={1} className="title" style={{ color: "white" }}>
          News Lite
        </Title>
      </Header>
      <Layout className="body">
        <Sider className="sidebar" width={400}>
          <ArticleList loadContent={loadContent} />
        </Sider>
        <Content className="content">
          <Card>
            <ArticleDetails data={articleData} />
          </Card>
        </Content>
      </Layout>
      <Footer className="footer">Copyright © Eigen Assessment 2023</Footer>
    </Layout>
  );
};

export default LandingPage;
