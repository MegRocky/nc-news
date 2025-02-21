import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer>
      <p>by Meg Rocky-Stanley</p>
      <FontAwesomeIcon icon={faGithub} size="xl" />
      <a href="https://github.com/MegRocky">See more of my work here</a>
    </footer>
  );
}

export default Footer;
