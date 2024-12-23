const ListItem = ({ title, members, followers, icon, users }) => {
  return (
    <div className="flex justify-between items-center py-4 border-b dark:border-gray-700 border-gray-300">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <div className={`p-2 rounded-lg ${icon.bgColor}`}>{icon.element}</div>
        </div>
        <div>
          <h4 className=" font-bold">{title}</h4>
          <p className="text-gray-500 text-sm">{members} members</p>
          <p className="text-gray-400 text-xs">
            {followers} followers including {users}
          </p>
        </div>
      </div>
      <button className=" dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-200 transition rounded-full px-3 py-1">
        +
      </button>
    </div>
  );
};
const DiscoverNewLists = () => {
  const lists = [
    {
      title: "Kultur Sanat",
      members: "52",
      followers: "6.4K",
      icon: {
        element: <svg className="text-yellow-500 w-6 h-6" />,
        bgColor: "bg-yellow-100",
      },
      users: "@BuketUzuner",
    },
    {
      title: "Kültür Sanat Haberleri",
      members: "110",
      followers: "771",
      icon: {
        element: <svg className="text-green-500 w-6 h-6" />,
        bgColor: "bg-green-100",
      },
      users: "@HelunFirat",
    },
    {
      title: "Siyaset/Politika",
      members: "33",
      followers: "3.4K",
      icon: {
        element: <svg className="text-pink-500 w-6 h-6" />,
        bgColor: "bg-pink-100",
      },
      users: "@av_barandogan",
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Discover new Lists</h2>
      {lists.map((list, index) => (
        <ListItem key={index} {...list} />
      ))}
      <p className="text-blue-400 mt-4 cursor-pointer">Show more</p>
    </div>
  );
};
export default DiscoverNewLists;
