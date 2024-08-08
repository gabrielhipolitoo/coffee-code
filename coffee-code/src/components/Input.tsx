interface ComponetProps {
  id: string;
  name: string;
  type: "text" | undefined;
  placeholder: string;
}

function Input({ id, name, type, placeholder }: ComponetProps) {
  return <input type={type} name={name} id={id} placeholder={placeholder} />;
}

export default Input;
