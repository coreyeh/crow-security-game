
export const FormDivider = ({ label }: { label?: string }) => {
 return (
  <div className="flex items-center">
    <hr className="flex-1 border-dark" />
    {label && <span className="text-sm text-dark mx-1">{label}</span>}
    <hr className="flex-1 border-dark" />
  </div>
 );
}