"use server";
import { Regions, TopVillas } from "@/types";
import supabase from "./supabase";

export async function FetchRegions(): Promise<
   Array<Regions> | null | undefined
> {
   try {
      const { data: regions, error } = await supabase
         .from("regions")
         .select("*");

      if (regions && !error) {
         return regions;
      }
   } catch (error: any) {
      console.error(error.message);
   }
}

// fetch top villas
export async function FetchTopvillas(
   params: string
): Promise<Array<TopVillas> | null | undefined> {
   try {
      const { data: topVillas, error } = await supabase
         .from("topvillas")
         .select(
            "bedrooms,id,name,images, price,address,location,guests,size,baths"
         )
         .eq("id", params);

      if (topVillas && !error) {
         return topVillas;
      }
   } catch (error: any) {
      console.error(error.message);
   }
}
