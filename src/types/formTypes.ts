export const FormType = {
  default: "default",
  loading: "loading",
  success: "success",
  error: "error",
} as const;
export type FormType = (typeof FormType)[keyof typeof FormType];
