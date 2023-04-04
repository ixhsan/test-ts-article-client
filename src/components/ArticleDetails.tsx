import { Typography, Layout, Card, Space } from "antd";
import { Divider } from "antd";
import { Image } from "antd";
import { FC } from "react";
import { ArticleType } from "../types/types";
import Title from "antd/es/typography/Title";
import moment from "moment";
import "../styles/ArticleDetails.css";

const { Paragraph, Text, Link } = Typography;

interface ArticleDetailsProps {
  data: ArticleType;
}

const ArticleDetails: FC<ArticleDetailsProps> = (
  props: ArticleDetailsProps
) => {
  return (
    <>
      <Card type="inner" bordered={false}>
        <Layout className="detail">
          <Space direction="vertical" align="center">
            <Title level={3}>{props.data.title}</Title>
            <div>
              <Text>by {props.data.author ? props.data.author : "anonym"}</Text>
              <Text type="secondary">
                {" "}
                | Published on{" "}
                {moment(props.data.publishedAt).format("YYYY-MM-DD [at] hh:mm")}
              </Text>
            </div>
            <Image
              src={`${props.data.urlToImage}`}
              height="250px"
              preview={false}
              alt={props.data.source?.name}
              className="image"
            />
            <Divider />
            <Text strong>Description:</Text>
            <Paragraph style={{ width: "100%", textAlign: "justify" }}>
              {props.data.description}
            </Paragraph>
            <Link className="link" href={`${props.data.url}`} target="_blank">
              Read more on {props.data?.source?.name}
            </Link>
          </Space>
          <Divider />
        </Layout>
      </Card>
    </>
  );
};

export default ArticleDetails;
