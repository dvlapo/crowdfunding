import ReactDOM from 'react-dom';
import closeModalBtn from '../assets/icon-close-modal.svg';

const BackThisProjectModal = ({ setIsModalOpen }) => {
  const pledges = [
    {
      heading: 'Pledge with no reward',
      details:
        'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    },
    {
      heading: 'Bamboo Stand',
      pledgeAmount: 'Pledge $25 or more',
      details:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      amountLeft: 101,
    },
    {
      heading: 'Black Edition Stand',
      pledgeAmount: 'Pledge $75 or more',
      details:
        'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included',
      amountLeft: 64,
    },
    {
      heading: 'Mahogany Special Edition',
      pledgeAmount: 'Pledge $200 or more',
      details:
        'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.',
      amountLeft: 0,
    },
  ];

  return ReactDOM.createPortal(
    // overlay
    <>
      <div
        className="w-screen h-screen bg-black opacity-70 z-20 fixed inset-0"
        onClick={() => setIsModalOpen(false)}
      ></div>
      {/* modal */}
      <div className="bg-white py-8 px-5  mb-30 rounded-xl w-6/7 mx-auto absolute top-28 lg:top-48 left-1/2 tranform -translate-x-1/2 -translate-y-2 z-30 sm:w-1/2 sm:py-10 sm:px-9">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl text-black font-bold">Back this project</h1>
          <img
            src={closeModalBtn}
            alt=""
            className="w-4 h-4 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
        <p className="text-darkGray mt-6 lg:mt-4 font-normal ">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        {/* pledges */}

        {pledges.map((pledge) => {
          return (
            <div
              className={pledge.amountLeft === 0 ? 'opacity-40' : 'opacity-100'}
            >
              <section className="my-8 p-6 lg:p-8 border rounded-xl border-lightishGray">
                <div className="flex items-center">
                  <span className="p-3 w-6 h-6 flex items-center justify-center border-lightishGray border-2 rounded-full mr-4"></span>
                  <div className="text-md font-medium">
                    <h2 className="text-black">{pledge.heading}</h2>
                    <h3 className=" text-moderateCyan">
                      {pledge.pledgeAmount}
                    </h3>
                  </div>
                </div>
                <p className="mt-6 text-sm text-darkGray">{pledge.details}</p>

                {pledge.amountLeft || pledge.amountLeft === 0 ? (
                  <div className="flex items-center mt-6">
                    <h4 className="text-2xl font-bold mr-2">
                      {pledge.amountLeft}
                    </h4>
                    <p className="text-darkGray text-lg ">left</p>
                  </div>
                ) : null}
              </section>
            </div>
          );
        })}
      </div>
    </>,

    document.getElementById('portal')
  );
};

export default BackThisProjectModal;
