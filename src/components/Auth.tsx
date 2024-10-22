import React from "react";
import { signIn } from "next-auth/react";
import { DialogAuth } from "react-mui-auth-page-br";
import { useSearchParams, useRouter } from "next/navigation";
import { Image, Nav } from "react-bootstrap";

const Auth = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [ status, setStatus ] = React.useState('');

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const toggle = () => setIsOpen(!isOpen);

  const handleSignIn = async ({ email, password }:any) => {
    try {
      const res = await signIn("credentials", { redirect: false, email: email, password: password, callbackUrl});
      if (!res?.error) router.push(callbackUrl);
      else setStatus('Email ou senha inválido');
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async ({ email, name, password }:any) => {
    try {
      const res = await fetch("/api/register", { method: "POST", body: JSON.stringify({ email, name, password }), headers: { "Content-Type": "application/json" }});
      if (!res.ok) {
        console.log((await res.json()).message);
        return;
      }
      handleSignIn({ email, password });
    } catch (error) {
      setStatus('Error, email já cadastrado');
    }
  };
  const handleForget = ({ email }:any) => {
    console.log({ email });
  };

  const handleSocial = {};

  const Logo = ()=>(
    <div className={'text-center mb-3'}>
      <Image src="/logo.jpeg" width={'auto'} height={'100%'} alt="logo" />
      <div>{status||' '}</div>
    </div>
    )

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
