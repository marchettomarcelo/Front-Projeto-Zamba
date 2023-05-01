export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>      
      <main className="flex flex-col items-center justify-center">
        <div className="mb-10 mt-4 flex w-11/12  flex-col items-center gap-4 lg:w-4/6">
          {children}
        </div>
      </main>
    </>
  );
}
