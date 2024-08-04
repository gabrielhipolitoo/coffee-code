interface Props {
  id: string;
}

function LengthEmailsSubscribe(props: Props) {
  const { id } = props;

  return (
    <>
      <p id={id}>
        Junte-se com os <strong>2500</strong> inscritos{" "}
      </p>
    </>
  );
}

export default LengthEmailsSubscribe;
