import { useEffect, useState } from "react";
import { getReq } from "../utils/api";

const Chat = () => {
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    getReq(`/api/messages`).then((res) => {
      console.log(res);
      setCommentsList(res);
    });
  }, []);

  return (
    <div>
      <ul>
        {commentsList.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>{comment.username}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Chat;
