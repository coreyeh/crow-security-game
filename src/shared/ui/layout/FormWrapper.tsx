
export const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid place-items-center h-full">
      <main className="space-y-6 max-w-80 w-full">
        {children}
      </main>
    </div>
  );
}