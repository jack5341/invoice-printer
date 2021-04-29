export default function Hero(props) {
  return (
    <>
      <div className="hero">
        <p className="subject">Invoice Printer</p>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ipsa.
        </p>
        <div className="input-box">
          Upload your file
        </div>
        <input type="file" className="hidden file-input"></input>
        <ul className="icon-list">
          {props.links
            ? props.links.map((e, index) => (
                <li key={index}>
                  <a href={e.href} target="_blank">
                    <img src={e.src} alt={e.name} />
                  </a>
                </li>
              ))
            : null}
        </ul>
      </div>
    </>
  );
}
