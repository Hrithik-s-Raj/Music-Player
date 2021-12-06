import { getProviders, signIn } from "next-auth/react";
function login({ providers }) {
  return (
    <div className="flex flex-col p-10 items-center">
      <img src="https://www.sheerid.com/shoppers/wp-content/uploads/sites/4/2020/05/spotify-deal-page-467x316.jpg" />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D860] text-white p-5  mt-10 rounded-full justify-center"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
