/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../Services/api";
import isEmpty from "lodash/isEmpty";
import { BackArrow } from "../Components/Icons";
import { ICampainResponse } from "../Types/ICampainResponse";

import "./detail.scss";

export default function Detail() {
  const navigation = useNavigate();
  const [detailData, setDetailData] = useState<ICampainResponse | undefined>();

  const { Id } = useParams();

  const getCampain = () => {
    api.get(`/promotions?Id=${Id}`).then(({ data }) => {
      setDetailData(data);
    });
  };

  useEffect(() => {
    getCampain();
  }, []);

  return (
    <>
      {!isEmpty(detailData) && (
        <div className="campainPage">
          <div
            onClick={() => {
              navigation("/");
            }}
            className="backButton flexCenter"
          >
            <BackArrow />
          </div>
          <div>
            <div className="campainImageWrapper">
              <img
                className="image"
                alt="dahadaha campain"
                src={detailData.ImageUrl}
              />
              <img
                className="brandIcon"
                alt="brand-icon"
                src={detailData.BrandIconUrl}
              />
            </div>
            <div className="contentWrapper">
              <div
                className="title"
                dangerouslySetInnerHTML={{ __html: detailData.Title }}
              />
              <div
                className="description"
                dangerouslySetInnerHTML={{ __html: detailData.Description }}
              />
            </div>

            <div className=" applyButtonWrapper gradientBg">
              <div
                className="flexCenter button"
                dangerouslySetInnerHTML={{
                  __html: detailData.BrandPromotionCardParticipationText,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
