import React from "react";
import { useNavigate } from "react-router-dom";
import { IPromotionResponse } from "../../Types/IPromotionResponse";

import "./promotionCard.scss";
const PromotionCard: React.FC<IPromotionResponse> = ({
  ImageUrl,
  Title,
  SeoName,
  Id,
  PromotionCardColor,
  BrandIconUrl,
}) => {
  const navigation = useNavigate();
  return (
    <div className="promotionCard">
      <div>
        <div className="promotionCardImage">
          <img className="image" alt="campaint" src={ImageUrl} />
          <img className="brandIcon" alt="brandIcon" src={BrandIconUrl} />
          <div>
            <div
              className="title"
              dangerouslySetInnerHTML={{ __html: Title }}
            />
          </div>
          <div>
            <div
              className="textButton"
              onClick={() => {
                navigation(`campaign/${SeoName}/${Id}`);
              }}
              style={{
                color: PromotionCardColor,
              }}
            >
              DAHA DAHA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionCard;
