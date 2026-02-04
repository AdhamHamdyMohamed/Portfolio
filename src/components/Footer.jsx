export default function Footer() {
  return (
    <>
      <footer className="bg-zinc-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Adham Hamdy. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
