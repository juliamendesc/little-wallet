import { useContext } from "react";


import SoftButton from "../SoftButton";
import { LoginContext } from "@/context/loginContext";
import { useRouter } from "next/router";

function SafeAuth({ }) {
  const { login, safeAuth } = useContext(LoginContext);
  const router = useRouter();
  
  const start = async () => {
    if (!safeAuth) return

    const signInInfo = await safeAuth.signIn()
    const userInfo = await safeAuth.getUserInfo()
    console.log('START >> ', signInInfo, userInfo)

    userInfo.address = signInInfo.eoa
    login(safeAuth.getProvider(), userInfo || undefined)
    router.push("/dashboard");
  };

  return (
      <SoftButton variant="gradient" color="dark" fullWidth onClick={start}>
        Start
      </SoftButton>
  );
}

export default SafeAuth;