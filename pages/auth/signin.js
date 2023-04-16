
import { getProviders, signIn } from "next-auth/react"
import Image from 'next/image'
import instaheader from '@/components/images/insta-header.png'


function Signin({ providers }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen -mt-20 px-8 text-center">
        <div>
          <Image src={instaheader} alt="header-image"/>
        </div>

        <div className="mt-14">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button onClick={() => signIn(provider.id, {callbackUrl: '/'})} className="bg-blue-500 rounded-lg text-white p-2">
                Sign in with {provider.name}
              </button>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  
  return {
    props: { 
        providers,
    },
  };
}

export default Signin;