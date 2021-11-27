import { useSelector } from 'react-redux';

const Stats = () => {
  const daysLeft = 56;

  let defaultStats = useSelector((state) => state.stats[0]);
  let { totalBacked, totalBackers } = defaultStats;

  localStorage.setItem('totalBacked', totalBacked);
  localStorage.setItem('totalBackers', totalBackers);

  return (
    <section className="py-6 px-10 bg-white w-6/7 sm:w-1/2 mx-auto -mt-6 rounded-xl">
      <div className="lg:flex lg:w-4/5">
        <article className="text-center my-6">
          <h2 className="text-4xl mb-3 font-bold text-black ">
            ${totalBacked}
          </h2>
          <p className="text-base text-darkGray">of $100,000 backed</p>
        </article>

        {/* demarcating line */}
        <div className="w-1/3 lg:w-px h-px lg:h-24 bg-lightishGray mx-auto"></div>

        <article className="text-center my-6">
          <h2 className="text-4xl mb-3 font-bold text-black">{totalBackers}</h2>
          <p className="text-base text-darkGray">total backers</p>
        </article>

        {/* demarcating line */}
        <div className="w-1/3 lg:w-px h-px lg:h-24 bg-lightishGray mx-auto"></div>

        <article className="text-center my-6">
          <h2 className="text-4xl mb-3 font-bold text-black">{daysLeft}</h2>
          <p className="text-base text-darkGray">days left</p>
        </article>
      </div>

      {/* progress bar */}
      <div className="w-full h-5 bg-lightishGray rounded-2xl">
        <div className="w-8/12 h-full bg-darkCyan rounded-2xl"></div>
      </div>
    </section>
  );
};

export default Stats;
