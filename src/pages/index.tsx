import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <header className="w-full py-5 text-center">
        <h1 className="text-3xl font-bold">Welcome to SmartUp</h1>
      </header>

      <main className="mt-10 flex flex-col items-center rounded-lg bg-[#D32D441A] p-10 shadow-lg">
        <h2 className="mb-6 text-2xl font-semibold">Home</h2>
        <p className="mb-4">Please log in to access your dashboard</p>
        <Link href={"/login"}>
          <button
            className="rounded-lg bg-[#D32D44] px-4 py-2 text-white transition hover:bg-blue-600"
            onClick={() => console.log("clicked")}
          >
            Login Here
          </button>
        </Link>
      </main>

      <footer className="mt-auto w-full bg-gray-200 py-4 text-center">
        <p className="text-sm">&copy; 2024 SmartUp. All rights reserved.</p>
      </footer>
    </div>
  );
}
