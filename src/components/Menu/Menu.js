import './Menu.css';
function Menu() {
    return (
        <header className="menu">
            <h1><a href="#home">MA7MOUD</a></h1>
            <nav aria-label="Main navigation">
                <ul>
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#experience">EXPERIENCE</a></li>
                    <li><a href="#skills">SKILLS</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Menu;