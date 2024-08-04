
interface Props {
  id: string;
  textButton: string;
}

function Button(props: Props) {
  const { id, textButton } = props;
  return (
    <button type="submit" id={id}>
      {textButton}
    </button>
  );
}

export default Button;
