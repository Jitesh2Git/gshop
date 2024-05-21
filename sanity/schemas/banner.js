export default {
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "largeText",
      title: "LargeText",
      type: "string",
    },
    {
      name: "smallText",
      title: "SmallText",
      type: "string",
    },
  ],
};
