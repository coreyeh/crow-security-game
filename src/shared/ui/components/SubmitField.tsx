import { FaSpinner } from "react-icons/fa6";

type SubmitFieldProps = {
  label: string;
  isSubmitting?: boolean;
}

export const SubmitField = ({ label, isSubmitting=false }: SubmitFieldProps) => {
  return (
    <button 
      type="submit" 
      className="form:submit" 
      disabled={isSubmitting}
    >
      {isSubmitting ? <FaSpinner className="text-lg animate-spin" /> : label}
    </button>
  );
}