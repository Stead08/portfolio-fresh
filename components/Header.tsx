type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Works", href: "#works" },
    { name: "Skills", href: "#skills" },
  ];

  return (
    <div className="bg-white justify-center w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div className="flex items-center flex-1">
        <div className="text-2xl  ml-1 font-bold">
          Stead08 Portfolio
        </div>
      </div>
      <ul className="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              className={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
