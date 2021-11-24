import { useState } from 'react';
import EnterPledge from './EnterPledge';

const Pledge = ({
  id,
  amountLeft,
  heading,
  minimumAmount,
  details,
  setIsModalOpen,
  setFinished,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const selectPledge = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div
      className={
        amountLeft === 0
          ? 'opacity-40 cursor-not-allowed pointer-events-none'
          : 'opacity-100 cursor-pointer'
      }
      // onClick={selectPledge}
    >
      <section
        // onClick={selectPledge}
        className={
          isSelected
            ? 'my-8 p-6 border-2 rounded-xl border-moderateCyan transform scale-99 transition-transform xl:grid xl:-gap-8 xl:grid-cols-9 xl:grid-rows-three xl:p-8'
            : 'my-8 p-6 border rounded-xl border-lightishGray  xl:grid xl:-gap-8 xl:grid-cols-9 xl:grid-rows-three xl:p-8'
        }
      >
        <div className="flex items-center xl:row-span-1" onClick={selectPledge}>
          <div className="p-3 w-6 h-6 flex items-center justify-center border-lightishGray border-2 rounded-full mr-4 xl:col-start-1 relative">
            {isSelected ? (
              <span className="w-2/3 h-2/3 rounded-full absolute flex items-center justify-center bg-moderateCyan text-moderateCyan">
                x
              </span>
            ) : (
              ''
            )}
          </div>

          <div className="text-md font-bold xl:col-start-2 xl:col-end-8 xl:min-w-max xl:flex  xl:pl-1">
            <h2
              className="text-black hover:text-moderateCyan xl:mr-5"
              onClick={selectPledge}
            >
              {heading}
            </h2>
            <h3 className=" text-moderateCyan" onClick={selectPledge}>
              {minimumAmount ? `Pledge $${minimumAmount} or more` : null}
            </h3>
          </div>
        </div>

        <p
          className="mt-6 text-md text-darkGray xl:col-start-1 xl:col-end-10 xl:row-start-2 xl:items-start xl:ml-0 font-medium xl:pl-12"
          onClick={selectPledge}
        >
          {details}
        </p>

        {amountLeft || amountLeft === 0 ? (
          <div
            className="flex items-center mt-6 xl:mt-0  xl:col-start-9 xl:-ml-4"
            onClick={selectPledge}
          >
            <h4 className="text-2xl xl:text-lg font-bold mr-2 ">
              {amountLeft}
            </h4>
            <p className="text-darkGray text-lg xl:text-lg font-medium ">
              left
            </p>
          </div>
        ) : null}

        {(amountLeft === null || amountLeft) && isSelected ? (
          <EnterPledge
            setFinished={setFinished}
            minimumAmount={minimumAmount}
            setIsModalOpen={setIsModalOpen}
          />
        ) : null}
      </section>
    </div>
  );
};

export default Pledge;
