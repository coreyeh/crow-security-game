import { Link } from "react-router-dom";

export const FormHeader = ({ title }: { title?: string }) => {
  return (
    <header className="flex flex-col items-center gap-4">
      <Link to="/" className="hover:opacity-70">
        <img src="/brandmark.svg" alt="Brandmark" className="w-12 h-auto" /> 
      </Link>
      {title && <h3 className="font-header text-2xl">{title}</h3>}
    </header>
  );
}