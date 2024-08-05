import "../assets/styles/_subscribe.scss";
import { CoffeeCode } from "../assets/svgs/coffee-code-icon";
import Button from "../components/Button";
import Input from "../components/Input";
import LengthEmailsSubscribe from "../components/LengthEmailsSubscribe";

function Subscribe() {
  return (
    <>
      <section className="section-subscribe">
        <div className="section-subscribe-container">
          <h1 id="title-page">Coffe-code {<CoffeeCode />}</h1>
          <h2 id="sub-title-page">
            Inscreva-se no Coffee Code para Receber as Últimas Notícias de
            Tecnologia!
          </h2>
          <p id="description-page">
            Fique atualizado com as últimas tendências e inovações do mundo da
            tecnologia! Inscreva-se no Coffee Code e receba diretamente no seu
            e-mail as notícias mais quentes, análises de especialistas e muito
            mais. Não perca nenhuma atualização importante — é rápido, fácil e
            gratuito.
          </p>
          <form className="form-subscribe">
            <Input
              id="input-email"
              type="text"
              placeholder="Digite seu email"
            />
            <Button id="button-submit" textButton="Inscreva-se" />
          </form>
          <LengthEmailsSubscribe id="lengthEmails" />
        </div>
      </section>
    </>
  );
}

export default Subscribe;
