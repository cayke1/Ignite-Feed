import { ThumbsUp, Trash } from "phosphor-react";
import styles from "../styles/Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/cayke1.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cayke D.</strong>
              <time
                title="October 13 at 8:30 am"
                dateTime="2022-10-13 08:13:30"
              >
                About 2h ago
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Applaud <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
