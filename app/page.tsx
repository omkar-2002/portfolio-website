import "./styles.css";
import SideBar from "./components/SideBar";

const profile = require("../public/my-avatar.png");

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <SideBar />
    </main>
  );
}
