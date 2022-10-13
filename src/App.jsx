import "./styles/global.css";

import styles from "./styles/App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="John Doe"
            comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae magna sollicitudin, pharetra sapien a, venenatis arcu. Curabitur quis ipsum elit. Donec urna metus, sollicitudin eu dapibus nec, fermentum ac dolor. Curabitur porttitor imperdiet turpis, et ornare felis. Proin fermentum imperdiet rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
          />
        </main>
      </div>
    </div>
  );
}
