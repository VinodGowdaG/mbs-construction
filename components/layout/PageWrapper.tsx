interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({
  children,
}: PageWrapperProps) {
  return (
    <main className="pt-24 lg:pt-28">
      {children}
    </main>
  );
}