import "../sections/nav.css";

const NavLinks = ({ navToggle }) => {
  return (
    <div className={navToggle ? "nav-mobil" : "nav-mobil-hidden nav-mobil"}>
      <p>
        <a className="nav-link-mobil" href="#home">
          Home
        </a>
      </p>
      <p>
        <a className="nav-link-mobil" href="#wig3">
          What is GPT3?
        </a>
      </p>
      <p>
        <a className="nav-link-mobil" href="#open">
          Open AI
        </a>
      </p>
      <p>
        <a className="nav-link-mobil" href="#case">
          Case Studies
        </a>
      </p>
      <p>
        <a className="nav-link-mobil" href="#library">
          Library
        </a>
      </p>
    </div>
  );
};
export default NavLinks;
