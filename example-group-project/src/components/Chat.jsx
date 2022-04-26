import { useState, useEffect } from "react";
import { postReq, getReq } from "../utils/api";

const Chat = () => {
  const [commentsList, setCommentsList] = useState([]);
  const [newMessageToPost, setNewMessageToPost] = useState("");

  useEffect(() => {
    getReq(`/api/messages`).then((res) => {
      console.log(res);
      setCommentsList(res);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let dataToPost = { username: "developer_f", body: newMessageToPost };
    setCommentsList((currCommentsList) => {
      return [
        ...currCommentsList,
        {
          username: "developer_f",
          body: newMessageToPost,
          comment_id: `new_${(Math.random() * 100).toString()}`,
        },
      ];
    });
    postReq(`/api/messages`, dataToPost)
      .then((res) => {
        return getReq(`/api/messages`);
      })
      .then((res) => {
        setCommentsList(res);
      });
    setNewMessageToPost("");
  };

  return (
    <div>
      <ul>
        {commentsList.map((comment, index) => {
          if (index === 0) console.log("new request");
          console.log(comment.comment_id);
          return (
            <li key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>{comment.username}</p>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          value={newMessageToPost}
          onChange={(e) => setNewMessageToPost(e.target.value)}
        ></input>
        <button>Send</button>
      </form>
    </div>
  );
};

export default Chat;
