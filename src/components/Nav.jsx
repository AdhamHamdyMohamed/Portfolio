import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-scroll";

export default function Nav() {
  const menuItems = ["Projects", "Contact"];

  useEffect(() => {
    Aos.init({ once: true });
  });

  return (
    <nav
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="max-w-2xl mx-auto mt-4 px-4 sm:sticky sm:top-1 z-10 "
    >
      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-4
                      rounded-3xl bg-zinc-100 shadow-lg px-6 py-4 "
      >
        <Link
          to="/"
          className="gravitas-one-regular text-2xl md:text-3xl font-bold
                     text-zinc-900 bg-zinc-300 px-5 py-2 rounded-full
                     hover:bg-zinc-400 transition duration-400 asap-condensed-bold"
        >
          Adham Hamdy
        </Link>

        <ul className="flex gap-6 text-zinc-600 font-medium">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item}
                smooth={true}
                duration={1000}
                className="hover:text-zinc-900 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
