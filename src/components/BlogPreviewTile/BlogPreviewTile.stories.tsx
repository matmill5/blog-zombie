import React from "react";
import { Story, Meta } from "@storybook/react";
import BlogPreviewTile from "./BlogPreviewTile";
import { BlogPreviewTileProps } from "./types";

// BlogPreviewTile.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/BlogPreviewTile",
  component: BlogPreviewTile,
};

// We create a “template” of how args map to rendering
const Template: Story<BlogPreviewTileProps> = (args) => (
  <BlogPreviewTile {...args} />
);

// Each story then reuses that template
export const BlogPreviewTilePrimary = Template.bind({});
BlogPreviewTilePrimary.args = { id: "blog preview tile" };

export const BlogPreviewTileSecondary = Template.bind({});
BlogPreviewTileSecondary.args = {
  ...BlogPreviewTilePrimary.args,
};
