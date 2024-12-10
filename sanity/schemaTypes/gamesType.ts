import { defineField, defineType } from "sanity";

export const gamesType = defineType({
  name: "games",
  title: "Games",
  type: "document",
  fields: [
    defineField({
      name: "poster",
      title: "Poster",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Poster image is required."),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error("Game image is required."),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required().error("Game name is required."),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule) => Rule.required().error("Slug is required."),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().error("Price is required."),
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "string",
      validation: (Rule) => Rule.required().error("Details are required."),
    }),
  ],
});
