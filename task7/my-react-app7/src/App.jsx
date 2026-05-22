import { useRef, useState } from "react";
import "./App.css";

function App() {
  const fileInputRef = useRef(null);

  const [profileImage, setProfileImage] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  }

  function handleLike() {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }

    setLiked(!liked);
  }

  function handleAddComment() {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  }

  return (
    <div className="app">
      <div className="profile-card">
        <h1>Profile Upload</h1>

        <div className="image-container">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="profile-image" />
          ) : (
            <div className="placeholder">
              No Profile Image
            </div>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageUpload}
          hidden
        />

        <button
          className="upload-btn"
          onClick={() => fileInputRef.current.click()}
        >
          Upload Image
        </button>

        <div className="like-section">
          <button
            className={liked ? "like-btn liked" : "like-btn"}
            onClick={handleLike}
          >
            ❤️ Like
          </button>

          <p>{likes} Likes</p>
        </div>

        <div className="comment-section">
          <h2>Comments</h2>

          <div className="comment-input">
            <input
              type="text"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <button onClick={handleAddComment}>
              Add Comment
            </button>
          </div>

          <div className="comments-list">
            {comments.map((item, index) => (
              <div className="comment-card" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;