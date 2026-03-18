

export const metadata = {
  title: 'NextLevel Page',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
