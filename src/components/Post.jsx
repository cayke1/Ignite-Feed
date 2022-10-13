import styles from "../styles/Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/cayke1.png"
            alt=""
          />
          <div className={styles.authorInfo}>
            <strong>Cayke D.</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="October 13 at 8:30 am" dateTime="2022-10-13 08:13:30">
          Published 1h ago
        </time>
      </header>

      <div className={styles.content}>
        <p>Hey guys 👋 </p>
        <p>
          I just uploaded another project to my portfolio. It is a project that
          I did at NLW Return, Rocketseat event. The project name is DoctorCare
          🚀
        </p>
        <p>
          👉 <a href="#">example.domain/doctorcare</a>
        </p>
        <p>
          {" "}
          <a href="#">#novoprojeto</a> <a href="#">#nlw</a>{" "}
          <a href="#">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea placeholder="Leave a comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>
    </article>
  );
}
