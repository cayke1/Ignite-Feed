export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.comment}</p>
    </div>
  );
}
