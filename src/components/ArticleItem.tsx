import { Typography, Card } from "antd";
import { Divider } from "antd";
import Title from "antd/es/typography/Title";
import "../styles/ArticleItem.css";

const { Paragraph } = Typography;

const ArticleItem = (props) => {
  const article = props.content?.substring(0, 150) + "...";

  return (
    <>
      <Card
        type="inner"
        className="article-item"
        onClick={() => props.loadContent()}
        style={{ borderRadius: 20 }}
        size="small"
      >
        <Title level={3}>{props.title}</Title>
        <Paragraph
          ellipsis={{
            rows: 2,
          }}
          title={`${article} See more`}
          style={{ width: "100%", textAlign: "justify" }}
        >
          {article}
          {/* <Link onClick={() => props.loadContent()}> See more</Link> */}
        </Paragraph>
      </Card>
      <Divider />
    </>
  );
};

export default ArticleItem;
