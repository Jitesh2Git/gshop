export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    {
      name: "categories",
      title: "Categories",
      type: "string",
    },
    {
      name: "cat_name",
      title: "Category Names",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "top_games",
      title: "Top Games",
      type: "string",
    },
    {
      name: "support",
      title: "Support",
      type: "string",
    },
    {
      name: "support_name",
      title: "Support Names",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "copy",
      title: "Copy",
      type: "string",
    },
    {
      name: "desc",
      title: "Desc",
      type: "string",
    },
  ],
};
