import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import PromotionCard from "../Components/PromotionCard/PromotionCard";
import TagCard from "../Components/TagCard";
import api from "../Services/api";

import "./home.scss";

import { IPromotionResponse } from "../Types/IPromotionResponse";
import { ITagResponse } from "../Types/ITagResponse";

export default function Home() {
  const [tags, setTags] = useState<ITagResponse[]>([]);
  const [promotions, setPromotions] = useState<IPromotionResponse[]>([]);
  const [selectedTag, setSelectedTag] = useState<{ id: number | undefined }>();

  const getTags = () => {
    api.get("/tags/list").then(({ data }) => {
      setTags(data);
    });
  };

  const getPromotions = () => {
    api
      .get("/promotions/list?Channel=PWA", {
        params: {
          TagId: selectedTag?.id,
        },
      })
      .then(({ data }) => {
        setPromotions(data);
      });
  };

  useEffect(() => {
    getTags();
    getPromotions();
  }, []);

  useEffect(() => {
    getPromotions();
  }, [selectedTag]);

  return (
    <>
      <main className="homePage">
        <Header />

        <div className="tagList">
          {tags.map((item) => (
            <TagCard
              onClick={() => {
                setSelectedTag({ id: item.Id });
              }}
              iconURl={item.IconUrl}
              label={item.Name}
            />
          ))}
        </div>

        <div className="promotionList">
          {promotions.map((item) => (
            <PromotionCard {...item} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
