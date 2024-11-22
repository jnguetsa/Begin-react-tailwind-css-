/* eslint-disable react/prop-types */
const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative md-6">
      <div className="absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-green-500"></Icon>
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2 bg-green-800 rounded-lg border border-grey-700 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-white placeholder:-gray-400 transition duration-200 "
      />
    </div>
  );
};

export default Input;
