import { useState } from "react";

const ThemeChanger = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [headerColor, setHeaderColor] = useState("black");
  const changeTheme = () => {
    if (darkTheme) {
      document.body.classList.value = "";
    } else {
      document.body.classList.value = "dark";
    }
    setDarkTheme(!darkTheme);
  };
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: headerColor,
        width: "100vw",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <label
          htmlFor="headerColor"
          style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}
        >
          Change Header Color
        </label>
        <input type="color" onChange={(e) => setHeaderColor(e.target.value)} />
      </div>
      <div
        onClick={changeTheme}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          cursor: "pointer",
          paddingRight: "50px",
        }}
      >
        {darkTheme ? (
          <span style={{ color: "white" }}>&#127774;</span>
        ) : (
          <span>&#127771;</span>
        )}
      </div>
    </div>
  );
};

export default ThemeChanger;
