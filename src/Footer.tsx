import "./styles/footer.css";
import opensea from "./assets/link1.png";
import twitter from "./assets/link2.png";

export default function Door() {
  return (
    <footer>
      <div className="footer-left">
        <img src={opensea} alt="opensea" width="40" height="40"></img>
        <img src={twitter} alt="twitter" width="40" height="40"></img>
      </div>
      <div className="footer-right">
        <span>V 0.1</span>
      </div>
    </footer>
  );
}
