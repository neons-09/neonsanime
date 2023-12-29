const HeaderMenu = ({ title }) => {
  return (
    <>
      <div className="p-8">
        <div className="flex justify-center items-center text-2xl text-white">
          {title}
        </div>
      </div>
    </>
  );
};

export default HeaderMenu;
