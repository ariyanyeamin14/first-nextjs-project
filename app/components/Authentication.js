"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function AuthButton() {
    const { isAuthenticated, isLoading } = useKindeBrowserClient();

    if (isLoading) return <div>Loading...</div>;

    return isAuthenticated ? (
        <LogoutLink>Sign out</LogoutLink>
    ) : (
        <LoginLink>Sign in</LoginLink>
    );
}