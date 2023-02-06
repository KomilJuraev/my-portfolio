import React from "react";
import TypeWriter from "typewriter-effect";

function Header() {

    return (
        <section id="header">
            <div className="header-txt">
                <span>I'm </span>
                <span><TypeWriter
                    options={{
                        strings: ['Komil Juraev', 'Web Developer and Automation Tester'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </span>
            </div>
        </section>
    )
}

export default Header;