import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">🧑🏻‍🍳</div>

      <div>
        <p className="header__eyebrow">AI Recipe Assistant</p>
        <h1 className='header__title'>ProChef AI</h1>
        <p className="header__tagline">
            Cook like a Pro. Create with confidence.
        </p>
      </div>
    </header>
  );
};

export default Header;
