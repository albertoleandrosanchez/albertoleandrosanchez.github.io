import { networks } from "@/lang/network";

export interface Network {
  name: string;
  url: string;
  icon: string;
}
export type NetworkKeys = typeof networks;
