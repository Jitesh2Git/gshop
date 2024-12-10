import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Image is required."),
    }),
    defineField({
      name: "overlay",
      title: "Overlay Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Overlay image is required."),
    }),
    defineField({
      name: "largeText",
      title: "LargeText",
      type: "string",
      validation: (Rule) => Rule.required().error("Large text is required."),
    }),
    defineField({
      name: "smallText",
      title: "SmallText",
      type: "string",
      validation: (Rule) => Rule.required().error("Small text is required."),
    }),
  ],
});
