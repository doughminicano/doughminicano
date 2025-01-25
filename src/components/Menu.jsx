/* eslint-disable react/prop-types */
export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 w-28 h-auto"
      >
        <img src="/dLogo.png" alt="my_Logo" className="w-auto h-auto hover:animate-ping max-sm:size-24 max-sm:relative max-sm:start-12" />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col
        ${menuOpened ? "w-80 bg-black/85 rounded-lg" : "w-0"}`}
      >
        <div className="flex-1 text-blue-700 flex items-start justify-center flex-col gap-20 p-8 hover:animate-pulse hover:text-5xl">
          <MenuButton label="About" onClick={() => onSectionChange(0)} />
          <MenuButton label="Skills" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Certificates" onClick={() => onSectionChange(3)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(4)} />
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-4xl font-bold cursor-pointer hover:text-red-700 transition-colors"
    >
      {label}
    </button>
  );
};
