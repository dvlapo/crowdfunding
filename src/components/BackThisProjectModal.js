import Pledge from './Pledge';
import reactDom from 'react-dom';

const BackThisProjectModal = ({ setIsModalOpen, setFinished }) => {
  return reactDom.createPortal(
    // overlay
    <>
      <div
        className="w-screen h-screen bg-black opacity-70 z-20 fixed inset-0"
        onClick={() => setIsModalOpen(false)}
      ></div>
      {/* modal */}(
      <div className="bg-white py-8 px-5  mb-30 rounded-xl w-6/7 mx-auto absolute top-28 lg:top-48 left-1/2 tranform -translate-x-1/2 -translate-y-2 z-30 sm:w-1/2 sm:py-10 sm:px-9 transition-transform scale-95">
        <div className="flex justify-between items-center">
          <h1 className=" text-xl text-black font-bold">Back this project</h1>
          <svg
            width="15"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer hover:opacity-100"
            onClick={() => setIsModalOpen(false)}
          >
            <path
              d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
              fill="#000"
              fill-rule="evenodd"
              opacity=".4"
            />
          </svg>
        </div>
        <p className="text-darkGray mt-6 lg:mt-4 font-normal ">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        {/* pledges */}

        <Pledge
          id={1}
          heading="Pledge with no reward"
          details="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          setFinished={setFinished}
          setIsModalOpen={setIsModalOpen}
          amountLeft={null}
        />

        <Pledge
          id={2}
          heading="Bamboo Stand"
          minimumAmount={25}
          details="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          amountLeft={101}
          setIsModalOpen={setIsModalOpen}
          setFinished={setFinished}
        />

        <Pledge
          id={3}
          heading="Black Edition Stand"
          minimumAmount={75}
          details="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          amountLeft={64}
          setIsModalOpen={setIsModalOpen}
          setFinished={setFinished}
        />

        <Pledge
          id={4}
          heading="Mahogany Special Edition"
          minimumAmount={200}
          details="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          amountLeft={0}
          setFinished={setFinished}
        />
      </div>
      )
    </>,
    document.getElementById('portal')
  );
};

export default BackThisProjectModal;
