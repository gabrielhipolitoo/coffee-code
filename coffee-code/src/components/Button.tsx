type ComponetProps = {
  id: string;
  textButton: string;
};

function Button({ id, textButton }: ComponetProps) {
  return (
    <button type="submit" id={id}>
      {textButton}
    </button>
  );
}

export default Button;
