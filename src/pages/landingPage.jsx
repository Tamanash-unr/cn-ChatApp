import { useNavigate } from "react-router-dom"
import CustomButton from "../Components/CustomButton";

function LandingPage() {
  const navigate = useNavigate();

  const doOnClick = () =>{
    return navigate("/sign-in")
  }

  return (
    <div className="flex bg-default h-screen w-screen text-white items-center">
        <div
         className="flex flex-col bg-black-200 flex w-[320px] h-[480px] md:w-[500px] md:h-[600px] items-center m-auto rounded-xl border-solid border-2 border-[#bcbcbc]"
        >
            <img src='/assets/AppLogo.png' className="w-[220px] mt-8 md:w-[350px]"/>
            <p className="text-3xl poppins-bold mt-4 md:text-4xl">
              Banter Box
            </p>
            <p className="poppins-medium-italic text-sm md:text-base">
              Where Every Message Counts
            </p>
            <p className="my-8 text-center text-sm md:text-base w-[92%]">
              BanterBox provides a fun, engaging platform for catching up with friends, meeting new people, and diving into interesting discussions.
            </p>
            <CustomButton 
              text="Log In to Continue"
              onClick={doOnClick}
            />
        </div>
    </div>
  )
}

export default LandingPage