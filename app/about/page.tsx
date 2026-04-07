import Footer from "../components/footer";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center p-10">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-10">
        The merch&#39;s a merch&#39;s a&#39;merch.
      </p>
      <img
        src="/img/surfin-bird.jpg"
        alt="surfin bird"
      />
      <Footer />
    </div>
  );
}
