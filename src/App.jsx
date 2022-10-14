import "./styles/global.css";

import styles from "./styles/App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/cayke1.png",
      name: "Cayke D.",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project to my portfolio. It is a project that I did at NLW Return, Rocketseat event. The project name is DoctorCare 🚀",
      },
      { type: "link", content: "👉 example.domain/doctorcare" },
    ],
    publishedAt: new Date("2022-10-13 20:00:00"),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://purr.objects-us-east-1.dream.io/i/SDcfu.jpg",
      name: "Sleeping Cat",
      role: "Just a cat",
    },
    content: [
      { type: "paragraph", content: "Hey guys 👋" },
      {
        type: "paragraph",
        content:
          "I just uploaded another project to my portfolio. It is a project that I did at NLW Return, Rocketseat event. The project name is DoctorCare 🚀",
      },
      { type: "link", content: "👉 example.domain/doctorcare" },
    ],
    publishedAt: new Date("2022-10-12 20:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
