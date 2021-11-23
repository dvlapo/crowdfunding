const SelectReward = ({
  heading,
  pledgeAmount,
  text,
  amountLeft,
  buttonText,
}) => {
  return (
    // eslint-disable-next-line eqeqeq
    <div className={amountLeft == 0 ? 'opacity-40' : 'opacity-100'}>
      <section className="my-8 p-6 lg:p-8 border-2 rounded-xl border-lightishGray">
        <div className="lg:flex lg:mb-5 justify-between items-center">
          <h2 className="mb-3 lg:mb-0 text-black text-lg font-bold">
            {heading}
          </h2>
          <h3 className="mb-8 lg:mb-0 text-md text-moderateCyan font-bold">
            Pledge ${pledgeAmount} or more
          </h3>
        </div>

        <p className="mb-6 leading-7 text-darkGray font-medium">{text}</p>

        <div className="lg:flex items-center justify-between">
          <div className="flex items-center">
            <h4 className="text-4xl font-bold mr-2">{amountLeft}</h4>
            <p className="text-darkGray font-medium">left</p>
          </div>

          <button
            className={
              // eslint-disable-next-line eqeqeq
              amountLeft == 0
                ? 'rounded-6xl text-white bg-darkGray p-3 mt-6 lg:mt-0 lg:w-1/3 w-3/4 font-medium'
                : 'rounded-6xl text-white bg-moderateCyan p-3 mt-6 lg:mt-0 lg:w-1/3 w-3/4 font-medium'
            }
          >
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};

export default SelectReward;
