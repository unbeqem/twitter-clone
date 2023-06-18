import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModals";

export default function Banner() {
    return (
        <div className="flex sm:space-x-[50px] xl:space-x-[200px] justify-center items-center fixed w-full h-[80px] bg-[#1d9bf0] bottom-0">
            <div className="hidden xl:inline">

                <h1 className="text-2xl font-bold">Don't miss what's happening</h1>
                <span className="text-[18px] font-normal">People on Twitter are the first to know.</span>

            </div>

                <LoginModal />
                <SignupModal />
        </div>

    )
}