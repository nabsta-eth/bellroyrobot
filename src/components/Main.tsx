import Grid from "./Grid";

const Main = () => {
  return (
    <main>
      <div className="grid grid-cols-1 xl:grid-cols-[225px_1fr] overflow-y-auto">
        <div className="hidden md:block"></div>
        <div className="pt-24 xl:pt-28 pb-[166px] xl:pb-8 px-4 xl:px-8 mx-auto h-fit min-h-screen ">
          <Grid />
        </div>
      </div>
    </main>
  );
};

export default Main;
