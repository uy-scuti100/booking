import AboutUs from "@/components/AboutUs";
import BecomeHost from "@/components/BecomeHost";
import HeroSection from "@/components/HeroSection";
import Regions from "@/components/Regions";
import Specialities from "@/components/Specialities";
import TopVillas from "@/components/TopVillas";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<TopVillas />
			<Regions />
			<Specialities />
			<BecomeHost />
			<AboutUs />
		</main>
	);
}
