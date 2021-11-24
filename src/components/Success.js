import ReactDOM from 'react-dom';
import checkIcon from '../assets/icon-check.svg';

const Success = ({ setFinished, setIsModalOpen }) => {
  return ReactDOM.createPortal(
    <>
      <div className="w-screen h-screen bg-black opacity-70 z-20 fixed inset-0"></div>
      <div className="p-8 text-center w-4/5 sm:w-9/12 md:w-3/7 bg-white rounded-xl z-30 absolute top-44 left-1/2 tranform -translate-x-1/2 -translate-y-2">
        <img src={checkIcon} alt="" className="mx-auto mb-5" />
        <h1 className="text-xl font-bold text-black mb-6">
          Thanks for your support!
        </h1>
        <p className="text-md font-medium text-darkGray my-8">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          className="bg-moderateCyan rounded-4xl py-4 w-1/2 text-white font-medium"
          //   clear all modals
          onClick={() => {
            setFinished(false);
            setIsModalOpen(false);
          }}
        >
          Got it!
        </button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Success;
