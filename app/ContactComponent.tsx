import React from "react";

export default function ContactComponent() {
  return (
    <section
      className="px-2 md:px-4 pb-20 space-y-6 text-center text-white md:mx-sidebarWidth"

      // className="px-2 md:px-4 max-w-screen-lg mx-auto text-white"
    >
      <h2>Get In Touch</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio tenetur,
        nesciunt beatae sed voluptate commodi.
      </p>
      <a href="mailto:johnrand380@gmail.com" className="inline-block border">
        Say Hello
      </a>
    </section>
  );
}
