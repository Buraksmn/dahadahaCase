import React, { useState } from "react";
import useUser from "../../Hooks/useUser";
import Button from "../Button";
import { DahaLogo, User } from "../Icons";

export default function Header() {
  const { login, user, logout } = useUser();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <DahaLogo />
      <div
        style={{
          display: "flex",
          gap: "5px",
        }}
      >
        {!user && <Button onClick={() => login()}>Giriş Yap</Button>}
        <div
          onClick={() => logout()}
          style={{
            backgroundColor: user ? "red" : "black",
            height: "40px",
            width: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
          }}
        >
          <User />
        </div>
      </div>
    </div>
  );
}
