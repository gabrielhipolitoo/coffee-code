interface Props {
  id: string;
  type: "text" | undefined;
  placeholder: string;
}

function Input(props: Props) {
  const { id, placeholder, type } = props;

  return <input type={type} id={id} placeholder={placeholder} />;
}

export default Input;
