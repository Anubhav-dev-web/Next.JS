function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

export default function ProductDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured products</h2>
    </>
  );
}
