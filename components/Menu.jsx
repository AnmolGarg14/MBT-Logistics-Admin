import { menu } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="h-screen pl-3 border-r-2 border-soft-bg pr-4">
      {menu.map((item) => (
        <div className="pb-5" key={item.id}>
          <div className="py-2">
            <span className="font-extralight text-xs text-soft-color">
              {item.title}
            </span>
          </div>
          {item.listItems.map((listItem) => (
            <a
              href={listItem.url}
              className="flex gap-4 py-3 px-4 hover:bg-soft-bg hover:rounded-lg"
              key={listItem.id}
            >
              <Image src={listItem.icon} width={20} height={20} alt="icon" />
              <span className="lg:flex hidden text-white">
                {listItem.title}
              </span>
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
