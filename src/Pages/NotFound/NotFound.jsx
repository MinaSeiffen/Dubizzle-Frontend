const NotFound = () => {
  return (
    <div className="container my-12 h-[50vh]">
      <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center items-center p-10">
        <div className="flex-1 mx-auto w-2/3">
          <div>
            <h1 className="text-[150px] font-extrabold text-black">Oops!</h1>
            <p className="text-[35px]">We can not seem to find that</p>
            <p className="text-[35px]">Try searching for it</p>
            <p>Error 404 Not Found</p>
          </div>
        </div>
        <div className=" max-md:justify-center items-center flex">
          <img
            src="/notfound.png"
            className="mx-auto w-[250px] h-[200px] ml-16"
            alt="Not Found Image"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
