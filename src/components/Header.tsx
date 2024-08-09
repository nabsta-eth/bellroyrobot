import logo from "../assets/images/BellroyLogoTextLightTheme.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-slate-100 px-6 shadow-md shadow-slate-200 z-20">
      <img
        src={logo}
        className="object-contain w-24 h-full"
        alt="Bellroy Logo"
      />
    </header>
  );
};

export default Header;
