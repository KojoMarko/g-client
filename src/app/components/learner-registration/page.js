import EmailResetPassword from "./EmailResetPassword";
import LoginClient from "./LoginClient";
import OTPVerification from "./OTPVerification";
import ResetPassword from "./ResetPassword";

export default function Home() {
    return (
      <div>
        <OTPVerification />
      </div>
    );
  }