import { LoginContext } from "@/context/loginContext";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

function Logout() {
  const { logout } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
      logout()
      router.push('/connect');
  }, []);

  return (
    <></>
  );
}

export default Logout;
