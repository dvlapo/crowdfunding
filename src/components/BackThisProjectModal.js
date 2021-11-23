import ReactDOM from 'react-dom';
import { useState } from 'react';
import closeModalBtn from '../assets/icon-close-modal.svg';
import EnterPledge from './EnterPledge';
import Thanks from './Thanks';
import { pledges } from '../data/pledges';

const BackThisProjectModal = ({ setIsModalOpen }) => {
  // eslint-disable-next-line no-unused-vars
  const [isSelected, setIsSelected] = useState(false);

  const [finished, setFinished] = useState(false);

  const selectPledge = (e) => {
    console.log(e.target.key);
  };

  return ReactDOM.createPortal(
    // overlay
    <>
      <div
        className="w-screen h-screen bg-black opacity-70 z-20 fixed inset-0"
        onClick={() => setIsModalOpen(false)}
      ></div>
      {/* modal */}
      {finished ? (
        <Thanks setFinished={setFinished} setIsModalOpen={setIsModalOpen} />
      ) : (
        <div className="bg-white py-8 px-5  mb-30 rounded-xl w-6/7 mx-auto absolute top-28 lg:top-48 left-1/2 tranform -translate-x-1/2 -translate-y-2 z-30 sm:w-1/2 sm:py-10 sm:px-9">
          <div className="flex justify-between items-center">
            <h1 className=" text-xl text-black font-bold">Back this project</h1>
            <img
              src={closeModalBtn}
              alt=""
              className="w-4 h-4 cursor-pointer hover:text-black"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <p className="text-darkGray mt-6 lg:mt-4 font-normal ">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>

          {/* pledges */}

          {pledges.map((pledge) => {
            return (
              <div
                className={
                  pledge.amountLeft === 0 ? 'opacity-40' : 'opacity-100'
                }
                onClick={selectPledge}
                key={pledge[0]}
              >
                <section
                  className={
                    isSelected
                      ? 'my-8 p-6 border-2 rounded-xl border-moderateCyan xl:grid xl:-gap-8 xl:grid-cols-9 xl:grid-rows-3 xl:p-8 xl:pt-1'
                      : 'my-8 p-6 border rounded-xl border-lightishGray xl:grid xl:-gap-8 xl:grid-cols-9 xl:grid-rows-3 xl:p-8 xl:pt-1'
                  }
                >
                  <div className="flex items-center xl:row-span-1 ">
                    <div className="p-3 w-6 h-6 flex items-center justify-center border-lightishGray border-2 rounded-full mr-4 xl:col-start-1 ">
                      <div className="w-full flex items-center justify-center bg-darkCyan rounded-full z-30"></div>
                    </div>

                    <div className="text-md font-bold xl:col-start-2 xl:col-end-8 xl:min-w-max xl:flex xl:row-start-2 xl:pl-1 -xl:mb-6">
                      <h2 className="text-black hover:text-moderateCyan xl:mr-5">
                        {pledge.heading}
                      </h2>
                      <h3 className=" text-moderateCyan">
                        {pledge.pledgeAmount}
                      </h3>
                    </div>
                  </div>

                  <p className="mt-6 text-md text-darkGray xl:col-start-1 xl: col-end-10 xl:row-start-2 xl:items-start -xl:my-6 xl:ml-0 font-medium xl:pl-12">
                    {pledge.details}
                  </p>

                  {pledge.amountLeft || pledge.amountLeft === 0 ? (
                    <div className="flex items-center mt-6 xl:mt-0  xl:col-start-9 xl:col-end-9">
                      <h4 className="text-2xl xl:text-lg font-bold mr-2">
                        {pledge.amountLeft}
                      </h4>
                      <p className="text-darkGray text-lg xl:text-lg font-medium ">
                        left
                      </p>
                    </div>
                  ) : null}

                  {pledge.amountLeft && isSelected ? (
                    <EnterPledge setFinished={setFinished} />
                  ) : null}
                </section>
              </div>
            );
          })}
        </div>
      )}
    </>,

    document.getElementById('portal')
  );
};

export default BackThisProjectModal;
