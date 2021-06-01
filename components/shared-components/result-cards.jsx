export default function Card(props) {
  return (
    <div className="result-card-body">
      <p className="text-gray-400 text-xs mt-1 block-lg">id: {props.id} </p>
      <p className="text-sm md:text-lg mt-0 md:mt-1 border-b"> {props.company} </p>
      <p className="block-lg"> {props.phone} </p>
      <p className="block-lg" style={{ maxWidth: "12rem" }}>
        {props.mail}
      </p>
      <p> {props.price} {props.currency} </p>
    </div>
  );
}
