import { FaStar } from "react-icons/fa";

const SingleComment = () => {
  return (
    <div className="flex my-12 ">
      {/* IMG */}
      <img
        src="./person.jpg"
        className="w-16 h-16 rounded-full flex-shrink-0"
        alt="User avatar"
      />
      <div className="flex ml-4">
        <div>
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold">Janice Miller</h1>
              <p className="font-semibold">April 06, 2023</p>
            </div>
            <div className="flex">
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
              <FaStar color="gold" />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-600 mt-2">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
