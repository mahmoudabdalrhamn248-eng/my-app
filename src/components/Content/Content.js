import './Content.css';
import portrait from '../Menu/WhatsApp Image 2026-11-11 at 8.45.24 PM.jpeg';

function Content() {
    return (
        <main className="content" id="home">
            <div className="content-inner">
                <section className="content-hero" aria-labelledby="content-title">
                    <div className="content-copy">
                        <p className="content-kicker">PROGRAMMING PORTFOLIO</p>
                        <h1 id="content-title">
                            Mahmoud Abdelrahman Elshreif
                        </h1>
                        <p className="content-role">FRONT-END DEVELOPER</p>
                        <p className="content-description">
                            A Computers and Information graduate with around four years
                            of experience in programming. I keep growing through
                            hands-on practice, training, and continuous learning.
                        </p>
                        <a className="content-button" href="#skills">
                            Explore my skills
                        </a>
                    </div>

                    <div className="content-portrait-frame">
                        <img
                            className="content-portrait"
                            src={portrait}
                            alt="Mahmoud Abdelrahman Elshreif"
                        />
                    </div>
                </section>

                <section className="content-cards" aria-label="Profile highlights">
                    <article className="content-card" id="about">
                        <p className="content-card-number">01 / ABOUT</p>
                        <h2>Computer and Information</h2>
                        <p>
                            A graduate with a strong interest in programming and
                            building skills through ongoing practice.
                        </p>
                    </article>

                    <article className="content-card" id="experience">
                        <p className="content-card-number">02 / EXPERIENCE</p>
                        <h2>Around four years</h2>
                        <p>
                            Working in programming for about four years, while
                            continuing to train and learn.
                        </p>
                    </article>

                    <article className="content-card content-card-skills" id="skills">
                        <p className="content-card-number">03 / SKILLS</p>
                        <h2>Tools I work with</h2>
                        <ul className="content-skill-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React.js</li>
                            <li>English</li>
                            <li>Microsoft Excel</li>
                        </ul>
                    </article>
                </section>

                <section className="content-contact" id="contact" aria-labelledby="contact-title">
                    <div>
                        <p className="content-card-number">04 / CONTACT</p>
                        <h2 id="contact-title">Let&apos;s connect</h2>
                        <p className="content-contact-description">
                            Have a question or want to discuss a project? Reach me on WhatsApp,
                            or add me on one of these platforms.
                        </p>
                    </div>
                    <a
                        className="content-button content-whatsapp"
                        href="https://wa.me/201104587828"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        WhatsApp: 01104587828
                    </a>
                    <div className="content-social-placeholders" aria-label="Other contact links">
                        <a
                            className="content-social-placeholder"
                            href="https://www.facebook.com/share/1DvipAyvF8/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my Facebook profile"
                        >
                            <span className="content-social-name">Facebook</span>
                            <span className="content-social-status">Visit my profile</span>
                        </a>
                        <a
                            className="content-social-placeholder"
                            href="https://github.com/mahmoudabdalrhamn248-eng"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit my GitHub profile"
                        >
                            <span className="content-social-name">GitHub</span>
                            <span className="content-social-status">Visit my profile</span>
                        </a>
                        <a
                            className="content-social-placeholder"
                            href="mailto:mahmoudabdalrhamn248@gmail.com"
                            aria-label="Email me at mahmoudabdalrhamn248@gmail.com"
                        >
                            <span className="content-social-name">Gmail</span>
                            <span className="content-social-status">mahmoudabdalrhamn248@gmail.com</span>
                        </a>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Content;
