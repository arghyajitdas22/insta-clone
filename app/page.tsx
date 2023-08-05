import getCurrentUser from "./actions/getCurrentUser";
import Main from "./components/Home Page/Main";
import Authentication from "./components/SignIn Page/Authentication";

export default async function Home() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <Authentication />;
  }

  return <Main />;
}
