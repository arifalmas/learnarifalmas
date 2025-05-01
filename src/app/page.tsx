import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-[32px] sm:text-[48px] font-bold text-center sm:text-left">
          Hello, Welcome to Learn with Arif Almas
        </h1>
        <Image
          className="dark:invert center justify-center"
          src="/learnarifalmas.png"
          alt="learnarifalmas"
          width={180}
          height={38}
          priority
        />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://arifalmas.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to arifalmas.com →
        </a>
      </footer>
    </div>
  );
}
