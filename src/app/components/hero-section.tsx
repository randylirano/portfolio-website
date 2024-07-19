import React, { ReactElement } from "react";
import Image from "next/image";

function HeroSection(): ReactElement {
  return (
    <section>
      <h1 className="text-white">{"Hello, I'm Randy"}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Image
        src="/images/profile-picture.jpg"
        alt="Profile Picture"
        width={300}
        height={300}
      />
    </section>
  );
}

export default HeroSection;
