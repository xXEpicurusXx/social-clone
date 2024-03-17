import Topbar from "@/components/shared/Topbar";
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <>
      <Topbar />
      <div className="flex flex-col mt-20">
         <SignUp />
      </div>
     
    </>
  );
}