import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div id="about" className="about">
      <h1 className="about__heading">About Donation Hub</h1>
      <p className="about__description">
        Donation Hub is a platform to bring different non-profit organizations
        and donors together. It is a common issue that donations are not
        efficiently distributed and used. On Donation Hub, any non-profit can
        easily create posts for surplus donations or items that are needed. By
        sharing surplus donations, non-profits can efficiently share and
        distribute their resources while limiting or preventing food waste.
        Donation Hub can also help donors find what to donate and match them
        with organizations in need. I hope you will enjoy Donation Hub and find
        it useful. Happy sharing and happy donating!
      </p>
    </div>
  );
};

export default About;
