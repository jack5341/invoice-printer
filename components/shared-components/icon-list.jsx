export default function IconList(props) {
  return (
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
  );
}
