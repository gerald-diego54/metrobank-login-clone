import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const protectedRoutes = ["/dashboard"];

    const onAuthenticate = () => {
        const token = localStorage.getItem("accessToken");
        if (token === null) return false;
        if (token !== null) return token;
    };

    const routeGuard = async () => {
        const { pathname } = router;
        const auth = onAuthenticate();
        if (protectedRoutes.includes(pathname) && !auth) {
            router.push("/");
            if (pathname === "/") setLoading(false);
        } else setLoading(false);
    };

    useEffect(() => {
        routeGuard();
    }, [router]);

    if (loading) return null;
    if (!loading) return <Component {...pageProps} />;
}
