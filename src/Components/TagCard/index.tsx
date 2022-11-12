import React from "react";

interface ITagCardProps {
  iconURl: string;
  label: string;
  onClick: () => void;
}

const TagCard: React.FC<ITagCardProps> = ({ iconURl, label, onClick }) => {
  return (
    <div
      onClick={() => onClick()}
      style={{
        background: "#FFFFFF",
        border: " 1.5px solid #ECEEEF",
        borderRadius: "8px",
        padding: "8px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        minWidth: "fit-content",
        gap: 5,
      }}
    >
      <img width={21.6} height={21.6} src={iconURl} />
      <p>{label}</p>
    </div>
  );
};

export default TagCard;
