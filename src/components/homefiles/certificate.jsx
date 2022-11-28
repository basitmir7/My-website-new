const Certificate = ({ name, logo, provider, credid, link, date }) => {
  return (
    <div className="certificate">
      <h4>
        <img src={logo} />
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
