const Certificate = ({ name, logo, provider, credid, link, date }) => {
  return (
    <div
      className="certificate"
      style={{
        display: "flex",
        flexDirection: "column",
        paddingBottom: "4rem",
      }}
    >
      <h4>
        <img
          src={logo}
          style={{ height: "45px", width: "45px", marginRight: "10px" }}
        />
        {name}
      </h4>
      <div style={{ marginLeft: "3.3rem" }}>
        {" "}
        <p>
          {provider} | {date}
        </p>
        <a href={link}>{credid}</a>
      </div>
    </div>
  );
};

export default Certificate;
