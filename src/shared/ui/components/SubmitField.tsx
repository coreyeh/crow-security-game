import type { ButtonHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa6";

type SubmitFieldProps = {
  label: string;
  isSubmitting?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const SubmitField = ({ label, isSubmitting=false, ...props }: SubmitFieldProps) => {
  return (
    <button 
      {...props}
      type="submit" 
      className="form:submit" 
      disabled={isSubmitting}
    >
      {isSubmitting ? <FaSpinner className="text-lg animate-spin" /> : label}
    </button>
  );
}