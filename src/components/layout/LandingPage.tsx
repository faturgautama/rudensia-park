import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LandingPage({ children }: any) {
    return (
        <>
            <Navbar></Navbar>

            <main className="mb-5">
                {children}
            </main>

            <Footer></Footer>
        </>
    )
}