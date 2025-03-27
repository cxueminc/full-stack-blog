import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
    return (
        // Navbar height is 20 = 80px
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <SignUp signInUrl="/login" />
        </div>
    );
}

export default RegisterPage;