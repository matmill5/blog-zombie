import React from "react";
import { Story, Meta } from "@storybook/react";
import Blog from "./Blog";
import { BlogProps } from "./types";
import { blogPosts as testBlogPosts } from "../../../globalConstants";

// Blog.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/Blog",
  component: Blog,
};

// We create a “template” of how args map to rendering
const Template: Story<BlogProps> = (args) => <Blog {...args} />;

// Each story then reuses that template
export const BlogPrimary = Template.bind({});
BlogPrimary.args = { id: "blog page", blogPosts: testBlogPosts };

export const BlogSecondary = Template.bind({});
BlogSecondary.args = {
  ...BlogPrimary.args,
};
