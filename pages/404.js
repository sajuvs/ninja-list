import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.go(-1)
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not.found">
      <h1>Ooooops</h1>
      <p>The page you are looking is not found</p>
      <a>Get back to home page</a>
    </div>
  );
};

export default NotFound;
