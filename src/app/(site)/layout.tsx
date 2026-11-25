import WhatsAppButton from '@/components/WhatsAppButton';
import FacebookPixel from "@/components/FacebookPixel";
import GoogleTag from "@/components/GoogleTag";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleTag />
      <FacebookPixel />
      {children}
      <WhatsAppButton />
    </>
  );
}
