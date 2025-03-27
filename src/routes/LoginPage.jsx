import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
    return (
        // Navbar height is 20 = 80px
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
            <SignIn signUpUrl="/register"/>
        </div>
    );
}

export default LoginPage;