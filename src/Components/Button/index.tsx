import React from "react";

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  return (
    <button
      style={{
        border: "none",
        display: "flex",
        borderRadius: "20px",
        backgroundColor: "#F40000",
        padding: "10px 20px",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    >
      <span
        style={{
          color: "white",
          fontWeight: "700",
          fontSize: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
