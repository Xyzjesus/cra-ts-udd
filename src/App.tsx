import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <div className="connect">
          <ConnectWallet />
        </div>
      </main>
    </div>
  );
}
