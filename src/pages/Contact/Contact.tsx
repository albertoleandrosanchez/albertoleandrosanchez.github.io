import PageContainer from "@/components/layout/PageContainer";
import emailjs from "@emailjs/browser";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ContactProps = {
  id: string;
  className: string;
};

const Contact = ({ id, className }: ContactProps) => {
  const form = React.useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5x7m3av",
        "template_bb1qgh6",
        form.current as HTMLFormElement,
        { publicKey: "RL-dCVaSO8E6qB_Wd" }
      )
      .then(
        () => {
          toast("Mensaje enviado", { type: "success" });
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <PageContainer id={id} className={`p-8 ${className}`}>
      <h1 className="text-4xl font-bold text-blue-700">Hablemos</h1>
      <p className="mt-4 text-lg">
        me puedes contactar enviandome un email a mi correo electronico
        <a
          href="mailto:albertoleandrosanchez@gmail.com"
          className="text-blue-800 text-base"
        >
          {" "}
          albertoleandrosanchez@gmail.com
        </a>
      </p>
      <p className="mt-4 text-lg">o llenando el siguiente formulario</p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="
        flex flex-col mt-4
        sm:w-1/2
        md:w-1/3
      "
      >
        <input
          type="text"
          placeholder="Nombre"
          name="from_name"
          className="mb-4 p-2 rounded-md"
        />
        <input
          type="email"
          name="reply_to"
          placeholder="Email"
          className="mb-4 p-2 rounded-md"
        />
        <textarea
          placeholder="Mensaje"
          name="message"
          className="
          mb-4
          h-32
          resize-none
          p-2
          rounded-md
        "
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          type="submit"
        >
          Enviar
        </button>
      </form>
      <ToastContainer />
    </PageContainer>
  );
};

export default Contact;
