import { FontSize } from "@/types/fontSize/index.d";
import { Space } from "@/types/space/index.d";

export interface IText extends FontSize, Space {
  color?: string;
}
