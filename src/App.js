import PostsList from "./features/postsList";
import AddPostForm from "./features/AddPostForm";
import "./assets/style/index.css";

const App = () => {
  return (
    <div>
      <AddPostForm />
      <PostsList />
    </div>
  );
};

export default App;
