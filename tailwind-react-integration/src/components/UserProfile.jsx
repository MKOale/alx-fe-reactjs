export default function UserProfile() {
  return (
    <div className="bg-gray-100 my-20 rounded-lg shadow-lg sm:p-4 md:p-8 sm:max-w-xs md:max-w-sm mx-auto text-center">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="rounded-full mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 object-cover 
                   transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2 className="mt-4 font-bold sm:text-lg md:text-xl text-blue-800 transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h2>
      <p className="text-gray-600 sm:text-sm md:text-base transition-shadow duration-300 ease-in-out hover:shadow-xl">
        Frontend Developer
      </p>
    </div>
  );
}
