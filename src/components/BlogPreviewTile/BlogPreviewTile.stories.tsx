import React from "react";
import { Story, Meta } from "@storybook/react";
import BlogPreviewTile from "./BlogPreviewTile";
import { BlogPreviewTileProps } from "./types";
import { blogPosts as testBlogPosts } from "../../../globalConstants";
import BlogPhotoPlaceholder from "../../assets/jpeg/blog-banner-image-placeholder.jpeg";

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
  title: "Say hello to Blog Zombie",
  subtitle: "A BMS that isn't scary. Easily add blogs to your SPA/CRA.",
  author: "Matthew E. Miller",
  dateCreated: "07/19/2021",
  bannerImage: BlogPhotoPlaceholder,
  url: "/",
};

export const BlogPreviewTileSecondary = Template.bind({});
BlogPreviewTileSecondary.args = {
  ...BlogPreviewTilePrimary.args,
};
