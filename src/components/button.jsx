const Button = ({ text }) => {
  return (
    <button
      style={{
        backgroundColor: "#3555ff",
        color: "#ffffff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
