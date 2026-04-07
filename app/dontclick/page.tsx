import Link from 'next/link';

export default function DontClick() {
  return (
    <div className="bounce-parent">
      <div className="random-bounce">
        <Link href="/">Back</Link>
      </div>
    </div>
  );
}
