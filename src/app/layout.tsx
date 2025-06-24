import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Suportte Laser',
  description:
    'Especializada em brindes personalizados e gravações a laser em produtos exclusivos. Dê um toque único aos seus presentes e promova sua marca com qualidade e elegância.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
