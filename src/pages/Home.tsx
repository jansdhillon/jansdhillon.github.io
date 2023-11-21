const Home = () => {
  return (
    <div className=" grid grid-cols-2 h-screen items-center  p-48 mx-auto">
      <div className="grid grid-rows-3 h-full justify-self-end gap-10">
        <div className="bg-red-200 w-64 h-full rounded-xl grid items-center justify-items-center">Jan-Yaeger Dhillon</div>
        <div className="bg-blue-200 h-full w-64 rounded-xl grid items-center justify-items-center"> Education</div>
      </div>
      <div className="grid grid-rows-3 h-full gap-10 justify-self-start">
        <div className="bg-green-200 h-full w-64 rounded-xl grid items-center justify-items-center">Project</div>
        <div className="bg-green-200 h-full w-64 rounded-xl grid items-center justify-items-center">Project</div>
        <div className="bg-green-200 h-full w-64 rounded-xl  grid items-center justify-items-center">Project</div>
      </div>
    </div>
  );
};

export default Home;