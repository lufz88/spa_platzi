const Header = () => {
	const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="/">
            Título
          </a>
        </h1>
        <div class="Header-nav">
          <a href="#/about/">
          About
          </a>
        </div>
      </div>
    </div>
  `;
	return view;
};

export default Header;