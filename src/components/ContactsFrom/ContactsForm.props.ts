import { IContactsForm } from "@src/types/contactFrom.interface";
import {
  DetailedHTMLProps,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";

export interface ContactsFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  form: IContactsForm;
  setForm: Dispatch<SetStateAction<IContactsForm>>;
}
