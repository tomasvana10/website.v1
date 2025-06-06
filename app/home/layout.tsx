import { Metadata } from "next";
import Banner from "../components/layout/Banner";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import ParticleBackground from "../components/misc/ParticleBackground";
import { ContentWrapper } from "../components/layout/Wrappers";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main>
      <Banner />
      <ParticleBackground />
      <Navbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </main>
  );
}
