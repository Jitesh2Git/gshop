import { defineField, defineType } from "sanity";

export const footerType = defineType({
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    defineField({
      name: "categories",
      title: "Categories",
      type: "string",
      validation: (Rule) => Rule.required().error("Categories are required."),
    }),
    defineField({
      name: "cat_name",
      title: "Category Names",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().error("Category names are required."),
    }),
    defineField({
      name: "top_games",
      title: "Top Games",
      type: "string",
      validation: (Rule) => Rule.required().error("Top games are required."),
    }),
    defineField({
      name: "support",
      title: "Support",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Support information is required."),
    }),
    defineField({
      name: "support_name",
      title: "Support Names",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) =>
        Rule.required().error("Support names are required."),
    }),
    defineField({
      name: "copy",
      title: "Copy",
      type: "string",
      validation: (Rule) =>
        Rule.required().error("Copy information is required."),
    }),
    defineField({
      name: "desc",
      title: "Desc",
      type: "string",
      validation: (Rule) => Rule.required().error("Description is required."),
    }),
  ],
});
