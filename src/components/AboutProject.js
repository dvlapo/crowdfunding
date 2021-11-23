import SelectReward from './SelectReward';

const AboutProject = () => {
  return (
    <main className="py-12 px-8 mb-30 bg-white w-6/7 sm:w-1/2 mx-auto mt-8 rounded-xl">
      <h2 className="text-2xl mb-8 font-bold">About this project</h2>
      <p className="text-base font-medium leading-7 text-darkGray">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
        <br />
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>

      {/* Select rewards */}

      <SelectReward
        heading="Bamboo Stand"
        pledgeAmount="25"
        text="You get an
    ergonomic stand made of natural bamboo. You've helped us launch our
    promotional campaign, and you’ll be added to a special Backer member list."
        amountLeft="101"
        buttonText="Select Reward"
      />
      <SelectReward
        heading="Black Edition Stand"
        pledgeAmount="75"
        text="You get a
    Black Special Edition computer stand and a personal thank you. You’ll be
    added to our Backer member list. Shipping is included."
        amountLeft="64"
        buttonText="Select Reward"
      />
      {/* Out of stock :/ */}
      <SelectReward
        heading="Mahogany Special Edition"
        pledgeAmount="200"
        text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
        personal thank you. You’ll be added to our Backer member list.
        Shipping is included."
        amountLeft="0"
        buttonText="Out of Stock"
      />
    </main>
  );
};

export default AboutProject;
