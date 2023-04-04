import React, { useEffect, useState } from "react";
import { Card } from "antd";
import Title from "antd/es/typography/Title";
import ArticleItem from "./ArticleItem";
import "../styles/ArticleList.css";
import { ArticleType } from "../types/types";

interface ArticleListProps {
  loadContent: (article: ArticleType) => void;
}

const ArticleList: React.FC<ArticleListProps> = (props: ArticleListProps) => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<Boolean>(false);
  const [list, setList] = useState<ArticleType[]>([]);

  useEffect(() => {
    loadList();
  }, []);

  const loadList = (page: number = 1): void => {
    if (page === 1) {
      setLoading(true);
    }
    fetch(
      `${
        import.meta.env.VITE_BASE_URL
      }/everything?q=apple&from=2023-03-30&to=2023-03-30&sortBy=popularity&pageSize=4&page=${page}&apiKey=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setList((prevList: ArticleType[]) => [
          ...(page === 1 ? [] : prevList),
          ...response.articles,
        ]);
        if (page === 1) {
          props.loadContent(response.articles[0]);
        }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const handleScrolling = (event: React.UIEvent<HTMLDivElement>): void => {
    if (
      event.currentTarget.scrollHeight - event.currentTarget.scrollTop ===
      event.currentTarget.clientHeight
    ) {
      setPage((prevPage) => prevPage + 1);
      loadList(page + 1);
    }
  };

  const loadItem = (item: ArticleType): void => {
    props.loadContent(item);
  };

  if (loading) {
    return (
      <Card type="inner" onScroll={handleScrolling} className="list">
        <Title level={2}>Loading...</Title>;
      </Card>
    );
  }

  return (
    <Card type="inner" onScroll={handleScrolling} className="list">
      {list.map((item, index) => (
        <ArticleItem
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          loadContent={() => loadItem(item)}
        />
      ))}
    </Card>
  );
};

export default ArticleList;
