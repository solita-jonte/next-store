import Link from 'next/link';
import Footer from "../components/footer";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="mt-10">
        Lårum kontakt <Link href="mailto:me@me.me">me</Link>.
      </p>
      <p className="mt-4">
        Head office<br />
        Headoffice 45<br />
        443322 Head<br />
        OFFICE
      </p>
      <Footer />
    </div>
  );
}
