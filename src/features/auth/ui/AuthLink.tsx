import { Link, type LinkProps } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

type AuthLinkProps = {
  label: string;
  call: string;
} & LinkProps

export const AuthLink = ({ label, call, ...props}: AuthLinkProps) => {
  return (
    <div className="flex items-center justify-center gap-2 text-mid text-sm">
      {label}
      <Link {...props} className="flex items-center gap-1 text-lightest hover:text-light">
        {call}
        <FaArrowRightLong className="text-sm" />
      </Link>
    </div>
  );
}