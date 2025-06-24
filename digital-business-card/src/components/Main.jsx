export default function Main() {
  return (
    <main className="main-page">
      <div className="bio">
        <h1>Laura Smith</h1>
        <h5>Frontend Developer</h5>
        <h6>laurasmith.website</h6>
      </div>

      <div className="contact">
        <button className="email">✉️ Email</button>
        <button className="linkedin">Linkedin</button>
      </div>

      <section className="about">
        <div className="sections">
          <h1 className="h1-header">About</h1>
          <p className="p--pargraph">
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>

        <div className="sections">
          <h1 className="h1-header">Interests</h1>
          <p className="p--pargraph">
            Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
            Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
          </p>
        </div>
      </section>
    </main>
  );
}
