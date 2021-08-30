export default interface Props {
  autofocus?: boolean;
  buttonStyle?:
    | "simple"
    | "outline"
    | "pill"
    | "bordered"
    | "disabled"
    | "3d"
    | "elevated"
    | "icon";
  buttonText?: string;
  children?: JSX.Element;
  className?: string;
  classNameOverride?: string;
  customColor?: string;
  disabled?: boolean;
  form?: string; // form id string -> Specifies which form the button belongs to.
  formEncType?:
    | "application/x-www-form-urlencoded"
    | "multipart/form-data"
    | "text/plain"; // Specifies how form-data should be encoded before sending it to a server. Only for type="submit"
  formMethod?: "get" | "post"; //
  formNoValidate?: boolean;
  formTarget?: "_blank" | "_self" | "_parent" | "_top" | string;
  icon?: any;
  name?: string;
  onClick?: Function;
  type?: "button" | "reset" | "submit";
  value?: string;
}
