import React from "react";

const AboutSection = () => {
    document.title = "About Ghs Julian | Read And Know More About Myself";
    return (
        <>
            <section id="about">
                <div className="hero-text">
                    <h2>About Myself</h2>
                    <h2>Thanks For Reading Myself !</h2>
                    <article>
                        Hello I am Ghs Julian . A professional web developer and
                        web desginer. I am from Bangladesh . I live with my
                        parents in a village of Bangladesh. coding and web
                        development is my passion and hobby. Though I am not a
                        student but i have learn the web technologies from
                        online recorses and i made so many projects. Currently i
                        am studying in Honourse 2nd flore department of English.
                        Actully i am doing a graduation in English.
                    </article>
                </div>
                <div className="hero-img">
                    <img
                        style={{ border: "none" }}
                        id="hero-logo"
                        src="/images/ghsjulian--4.png"
                    />
                </div>
            </section>
            <section className="article">
                <article>
                    I like to create differnt kinda websites , web applications
                    , databse desgin , api integration , and many more. In my
                    free time i browse internet use AI. to learn new thing , i
                    solve coding problems . i also like to debug others code
                    building new projects and make them dynamic i really like
                    such thing. I learn everything from we3schools,
                    Tutuorialspoint, JavaTpoint etc. You can also visit my
                    skills section that you can verify i am really a web
                    developer.Currently i am learning MERN STACK ando making
                    some projects using MERN STACK technologies. If you are
                    looking a really proffessional web developer you can dirctly
                    contact with me or simply press hire me button on the top
                    right corner.
                </article>
            </section>
        </>
    );
};

export default AboutSection;
