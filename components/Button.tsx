import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};
const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${variant} flex justify-center items-center active:scale-95 transition-all duration-200 ease-linear `}
    >
      <span>
        {icon && <Image src={icon} height={24} width={24} alt={title} />}{" "}
      </span>
      <span> {title}</span>
    </button>
  );
};

export default Button;
