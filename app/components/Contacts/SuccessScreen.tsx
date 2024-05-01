import { ReactElement } from "react";

const SuccessScreen = (): ReactElement => {
  return (
    <div className="pt-12 md:pt-28 pb-16 md:pb-32">
      <p className="mx-auto w-fit text-xl md:text-2xl border-solid border-l-8 pl-2 border-yellow-500">
        Your message has been successfully sent. 🎉
        <br />
        {`I'll get back to you as soon as possible. Your interest means a lot to me!`}
      </p>
    </div>
  );
};

export default SuccessScreen;
