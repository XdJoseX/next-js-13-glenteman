import './tailwind-global.scss';
import StyledComponentsRegistry from './lib/registry';
export const metadata = {
  title: 'Rick and Morty',
  description: 'Generated by Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head lang="es" />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
