import React from "react";
import { Story, Meta } from "@storybook/react";
import BlogPreviewTile from "./BlogPreviewTile";
import { BlogPreviewTileProps } from "./types";
import { blogPosts as testBlogPosts } from "../../../globalConstants";

// BlogPreviewTile.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

const aBlogPost = testBlogPosts[0];

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
BlogPreviewTilePrimary.args = {
  id: "blog preview tile",
  title: aBlogPost.blogPostMeta.title,
  subtitle: aBlogPost.blogPostMeta.subtitle,
  author: aBlogPost.blogPostMeta.author,
  dateCreated: aBlogPost.blogPostMeta.dateCreated,
  bannerImage: aBlogPost.blogPostMeta.bannerImage,
  url: aBlogPost.blogPostMeta.url,
};

export const BlogPreviewTileSecondary = Template.bind({});
BlogPreviewTileSecondary.args = {
  ...BlogPreviewTilePrimary.args,
};
