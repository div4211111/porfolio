import cn from "classnames";
import styles from "./ContactsForm.module.scss";
import { ContactsFormProps } from "./ContactsForm.props";
import { Input } from "../Input/Input";
import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Textarea } from "../Textarea/Textarea";
import { FormType } from "@src/types/formTypes";

export const ContactsForm = ({
  form,
  setForm,
  className,
  ...props
}: ContactsFormProps): JSX.Element => {
  const [type, setType] = useState<FormType>(FormType.default);
  const changeHandler = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setType(FormType.loading);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          from_name: form.name,
          to_name: "Andrew",
          from_email: form.email,
          to_email: process.env.NEXT_PUBLIC_EMAIL,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );
      setType(FormType.success);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setType(FormType.error);
      console.log(error);
    }
  };

  if (type === FormType.default || type === FormType.loading) {
    return (
      <form
        onSubmit={(e) => submitHandler(e)}
        className={cn(styles.content, className)}
        {...props}
      >
        <div className={styles.content_item}>
          <div className={styles.content_item_label}>_name:</div>
          <div className={styles.content_item_input}>
            <Input value={form.name} setValue={changeHandler} name="name" />
          </div>
        </div>
        <div className={styles.content_item}>
          <div className={styles.content_item_label}>_email:</div>
          <div className={styles.content_item_input}>
            <Input value={form.email} setValue={changeHandler} name="email" />
          </div>
        </div>
        <div className={styles.content_item}>
          <div className={styles.content_item_label}>_message:</div>
          <div className={styles.content_item_input}>
            <Textarea
              value={form.message}
              setValue={changeHandler}
              name="message"
            />
          </div>
        </div>
        <button
          type="submit"
          className={styles.content_button}
          aria-label="submit-message"
          aria-expanded={type !== FormType.default && type !== FormType.loading}
        >
          {type === FormType.loading ? "Sending..." : "submit-message"}
        </button>
      </form>
    );
  } else {
    return (
      <div className={styles.response_message}>
        <div className={styles.response_message_title}>
          {type === FormType.success ? "Thank you! 👍" : "Ooops. Error!"}
        </div>
        <div className={styles.response_message_text}>
          {type === FormType.success
            ? "Your message has been accepted. You will recieve answer really soon!"
            : "Something went wrong!"}
        </div>
        <div className={styles.response_message_button}>
          <button
            className={styles.content_button}
            onClick={() => setType(FormType.default)}
            aria-label="send-new-message"
            aria-expanded={type !== FormType.success && type !== FormType.error}
          >
            send-new-message
          </button>
        </div>
      </div>
    );
  }
};
