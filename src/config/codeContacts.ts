export const codeContacts = (
  name: string,
  email: string,
  message: string,
  short: boolean = false
) => {
  if (short) {
    return `const [form, setForm] = useState({
  name: "${name}",
  email: "${email}",
  message: "${message}",
});`;
  } else {
    return `const [form, setForm] = useState({
  name: "${name}",
  email: "${email}",
  message: "${message}",
});

const changeHandler = (
  event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
) => {
  setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
};

const submitHandler = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()
};`;
  }
};
