const State = ({ item_name, item_number }) => {
  return (
    <div className="flex p-1">
      <div>{item_name}</div>
      <div className=" mx-2 px-1 w-auto h-5 rounded-full bg-yellow-600 text-white">
        {item_number}
      </div>
    </div>
  );
};

export default State;
