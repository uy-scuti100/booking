import { FetchTopvillas } from "@/server/actions";
import VillaCarousel from "./VillaCarousel";
import {
	dehydrate,
	HydrationBoundary,
	QueryClient,
} from "@tanstack/react-query";
const storeId = "12345678iol";

export default async function TopVillas() {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: ["villas", storeId],
		queryFn: () => FetchTopvillas(storeId),
	});

	return (
		<section className="pt-20 md:pt-40 px-5 md:pb-[220px] pb-20">
			<h1 className=" text-center text-gray-900 md:text-6xl font-bold font-['Rufina'] capitalize md:leading-[72px] text-[44px] leading-[52px] tracking-wide pb-5 md:pb-10">
				Top pick villas
			</h1>
			<div className="md:text-center text-gray-900 text-base font-medium font-['Raleway'] leading-normal">
				Curabitur efficitur ante vel mi bibendum, et maximus nisl ultricies.
				Morbi nec tempus dui, sit amet facilisis nisl.{" "}
				<br className="hidden md:block" /> Ut vel urna quis urna tristique
				tempus. Etiam lobortis est at mauris eleifend, id tempor purus
				ultricies.
			</div>
			{/* carosuel of villas */}

			<HydrationBoundary state={dehydrate(queryClient)}>
				<VillaCarousel storeId={storeId} />
			</HydrationBoundary>
		</section>
	);
}
