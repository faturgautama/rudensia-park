import Footer from "./Footer";
import Navbar from "./Navbar";

export default function LandingPage({ children }: any) {
    return (
        <>
            <Navbar></Navbar>

            <main className="md:mb-5 mb-1">
                {children}
            </main>

            <Footer></Footer>
        </>
    )
}