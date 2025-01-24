import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Protected() {
    
    const { getUser, isAuthenticated } = getKindeServerSession();
    const user = await getUser();
    console.log(user)

    if (!(await isAuthenticated())) {
        redirect("/api/auth/login");
    }

    return (await isAuthenticated()) ? (
        <div className="my-20 text-center">
            <h1 className="text-4xl font-bold mb-10">Welcome to your profile!</h1>
            <h2 className="text-3xl font-bold">{user.given_name}</h2> 
        </div>
    ) : (
        <div className="my-20 text-center">
             <h1 className="text-4xl font-bold mb-10">This page is protected, please <LoginLink>Login</LoginLink> to view it</h1>
        </div>
    );
}