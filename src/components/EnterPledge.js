const EnterPledge = ({ setFinished }) => {
  return (
    <div className="xl:row-start-3 xl:col-span-full xl:mt-0">
      <div className="h-px w-full  bg-lightishGray my-8 "></div>
      <div className="flex justify-between items-center mt-8 ">
        <p className="hidden xl:block font-medium text-darkGray">
          Enter your pledge
        </p>
        <div className="flex w-full xl:w-1/2 gap-4">
          <div className="w-3/7 border-2 border-lightishGray appearance-none rounded-3xl  items-center py-3">
            <div className="w-1/2 mx-auto flex gap-2">
              <span className="font-medium text-darkGray">$</span>
              <input
                type="number"
                className="w-10 font-bold focus:outline-none"
              />
            </div>
          </div>
          <button
            className="bg-moderateCyan rounded-3xl text-white p-3 w-1/2 "
            onClick={() => {
              setFinished(true);
              window.scrollTo(0, 0);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnterPledge;
