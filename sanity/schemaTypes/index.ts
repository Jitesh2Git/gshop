import { type SchemaTypeDefinition } from "sanity";
import { bannerType } from "./bannerType";
import { gamesType } from "./gamesType";
import { footerType } from "./footerType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [bannerType, gamesType, footerType],
};
