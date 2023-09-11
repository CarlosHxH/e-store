import { signIn } from "next-auth/react";
import React from "react";
import { DialogAuth } from "react-mui-auth-page-br";
import { useSearchParams, useRouter } from "next/navigation";
import { Nav } from "react-bootstrap";

const Auth = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = async ({ email, password }: any) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: email,
        password: password,
        callbackUrl
      });
      console.log(res);

      if (!res?.error) router.push(callbackUrl);
      else console.log("invalid email or password");
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleSignUp = async ({ email, name, password }: any) => {
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({ email, name, password }),
        headers: { "Content-Type": "application/json" }
      });      //
      if (!res.ok) {
        console.log((await res.json()).message);
        return;
      }
      //signIn(undefined, { callbackUrl: "/" });
      handleSignIn({ email, password });
    } catch (error: any) {
      console.log(error);
    }
  };
  const handleForget = ({ email }: any) => {
    console.log({ email });
  };

  const handleSocial = {
    Google: () => {}
  };

  return (
    <>
      <Nav>
        <Nav.Link onClick={toggle}>Login | Register</Nav.Link>
      </Nav>
      <DialogAuth
        open={isOpen}
        textFieldVariant="outlined"
        onClose={toggle}
        handleSignUp={handleSignUp}
        handleForget={handleForget}
        handleSignIn={handleSignIn}
        handleSocial={handleSocial}
      />
    </>
  );
};

export default Auth;
