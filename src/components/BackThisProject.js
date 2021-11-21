import masterCraftLogo from '../assets/logo-mastercraft.svg';
import { useState } from 'react';

const BackThisProject = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const bookmark = () => {
    setBookmarked(true);
  };

  return (
    <section className="relative bottom-14 sm:bottom-20 pb-10 bg-white w-11/12 sm:w-1/2 mx-auto sm:-mb-12 rounded-xl border border-solid border-lightGray">
      <img src={masterCraftLogo} alt="" className="mx-auto relative bottom-8" />
      <div>
        <h1 className="px-12 text-2xl sm:text-3xl text-center font-bold">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className=" px-4 text-base text-center text-darkGray my-6 font-medium sm:mb-9">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex justify-between w-10/12 mx-auto">
          <button className="py-4 font-medium w-3/4 sm-w-1/3 md:w-5/12 rounded-5xl text-white bg-darkCyan">
            Back this project
          </button>

          <button
            className="flex items-center xl:bg-lightishGray rounded-5xl xl:w-1/3"
            onClick={bookmark}
          >
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle
                  fill={bookmarked ? 'hsl(176, 72%, 28%)' : '#2f2f2f'}
                  cx="28"
                  cy="28"
                  r="28"
                />
                <path
                  fill={bookmarked ? '#fff' : '#b1b1b1'}
                  d="M23 19v18l5-5.058L33 37V19z"
                />
              </g>
            </svg>
            <span
              className={
                bookmarked
                  ? 'hidden xl:block text-darkCyan font-medium ml-6'
                  : 'hidden xl:block text-darkGray font-medium ml-6'
              }
            >
              {bookmarked ? 'Bookmarked!' : 'Bookmark'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BackThisProject;
