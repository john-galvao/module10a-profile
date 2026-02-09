import { useState } from "react";

function Profile(props) {
  const { name, occupation, funFact, detail } = props;

  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div
      style={{
        maxWidth: "420px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "white",
      }}
    >
      <h1>{name}</h1>

      <p style={{ color: "#555" }}>{occupation}</p>

      <p>
        <strong>Fun fact:</strong> {funFact}
      </p>

      <button
        onClick={toggleDetail}
        style={{
          padding: "8px 14px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#007BFF",
          color: "white",
        }}
      >
        {showDetail ? "Hide Spotlight" : "Show Spotlight"}
      </button>

      {showDetail && <p style={{ marginTop: "16px" }}>{detail}</p>}
    </div>
  );
}

export default Profile;