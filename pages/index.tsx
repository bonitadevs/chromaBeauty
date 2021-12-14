import Navbar from "../components/navbar/Navbar";
import Image from 'next/image';




export default function Home() {
	return (
    <>
    <div className="logo">
    <Image src="/chroma_beauty.png" alt="chroma beauty label" width="211" height="41" />
    </div>
    <Navbar />
    </>
	);
}