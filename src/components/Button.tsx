import { IconBaseProps } from "react-icons";

interface ButtonProps {
  label: string;
  classes?: string;
  outline?: boolean;
  fill?: boolean;
  small?: boolean;
  Icon?: React.ReactElement;
}

const Button: React.FC<ButtonProps> = ({
  label,
  Icon,
  classes,
  outline,
  fill,
  small,
}) => {
  return (
    <button
      className={` rounded-xl flex items-center  space-x-4 border-2 font-medium text-base   hover:opacity-80 duration-300
      ${outline && "border-tart-orange text-tart-orange"}
      ${fill && "bg-tart-orange text-Pure-White "}
      ${small ? "" : "px-6 py-2"}
      ${classes && classes}`}
    >
      {label}
      {Icon && Icon}
    </button>
  );
};

export default Button;
