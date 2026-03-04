import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Nicolò Torreggiani",
  description: "Enterprise Architect - Cloud Native Transformation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200 background-grid">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 
w-[600px] h-[600px]
bg-blue-600/20
blur-[120px]
rounded-full
- z-10"
/>

        <Navbar />
        {children}

      </body>
    </html>
  );
}