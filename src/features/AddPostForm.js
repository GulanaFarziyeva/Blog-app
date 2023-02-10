import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";

import { addedPost } from "./postsSlice";

const AddPostForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const title = document.querySelector(".title");
    const text = document.querySelector(".text");

    if (data.title && data.text) {
      dispatch(
        addedPost({
          id: nanoid(),
          title: data.title,
          body: data.text,
        })
      );
      title.value = "";
      text.value = "";
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-[40%] mx-auto my-10"
    >
      <input
        type="text"
        className="title border py-2 px-4 rounded mb-5"
        placeholder="Title"
        {...register("title", { required: true })}
      />
      <textarea
        placeholder="Text"
        className="text border py-2 px-4 rounded mb-5"
        {...register("text", { required: true })}
      />

      <button className="bg-blue-500 text-white py-2 px-6 rounded uppercase tracking-widest font-medium text-base">
        Add Post
      </button>
    </form>
  );
};

export default AddPostForm;
