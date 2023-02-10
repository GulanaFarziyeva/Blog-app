const PostItem = ({ item }) => {
  return (
    <li className="border rounded mb-5 flex flex-col gap-5 py-6 px-10 cursor-pointer">
      <h3 className="text-2xl font-medium">{item.title}</h3>
      {item.body.length > 100 && (
        <p className="text-base italic tracking-wider">
          {item.body.substring(0, 100)}...
        </p>
      )}
      {item.body.length < 100 && (
        <p className="text-base italic tracking-wider">{item.body}</p>
      )}
    </li>
  );
};

export default PostItem;
