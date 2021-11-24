import { useState } from 'react';
import { connect } from 'react-redux';
import { setStats } from '../redux/actions/pledgeActions';
// import { useDispatch, useSelector } from 'react-redux';

const EnterPledge = ({
  setFinished,
  minimumAmount,
  setIsModalOpen,
  setStats,
}) => {
  const [amount, setAmount] = useState(minimumAmount);

  return (
    <div className="xl:row-start-3 xl:-mt-3 xl:col-span-full">
      <div className="h-px w-full bg-lightishGray my-6 xl-mt-8"></div>
      <div className="xl:flex justify-between items-center">
        <p className="text-center my-5 font-medium text-darkGray">
          Enter your pledge
        </p>
        <div className="flex w-full xl:w-1/2 gap-4">
          <div className="w-3/7 border-2 border-lightishGray appearance-none rounded-3xl  items-center py-3 hover:border-moderateCyan focus:border-moderateCyan">
            <div className="w-1/2 mx-auto flex gap-2">
              <span className="font-medium text-darkGray">$</span>
              <input
                type="number"
                className="w-2/3 font-bold focus:outline-none "
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <button
            className="bg-moderateCyan rounded-3xl text-white p-3 w-1/2 "
            onClick={() => {
              // setStats();
              setFinished(true);
              setIsModalOpen(false);
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

const mapStateTopProps = (state) => {
  return {
    stats: state.stats,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStats: dispatch(setStats()),
  };
};

export default connect(mapStateTopProps, mapDispatchToProps)(EnterPledge);
