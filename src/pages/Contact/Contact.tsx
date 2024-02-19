import PageContainer from "@/components/layout/PageContainer";
import emailjs from "@emailjs/browser";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contact } from "@/lang/es";

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
        {contact.subtitle}
        <a
          href="mailto:albertoleandrosanchez@gmail.com"
          className="text-blue-800 text-base"
        >
          {" " + contact.content.contact_info.email}
        </a>
      </p>
      <p className="mt-4 text-lg">{contact.content.form.description}</p>
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
          placeholder={contact.content.form.name}
          name="from_name"
          className="mb-4 p-2 rounded-md"
        />
        <input
          type="email"
          name="reply_to"
          placeholder={contact.content.form.email}
          className="mb-4 p-2 rounded-md"
        />
        <textarea
          placeholder={contact.content.form.message}
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
          {contact.content.form.submit}
        </button>
      </form>
      <ToastContainer />
    </PageContainer>
  );
};

export default Contact;
