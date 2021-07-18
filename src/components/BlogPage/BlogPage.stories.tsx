import React from "react";
import { Story, Meta } from "@storybook/react";
import BlogPage from "./BlogPage";
import { BlogPageProps } from "./types";

// BlogPage.stories.tsx
//https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Components/BlogPage",
  component: BlogPage,
};

// We create a “template” of how args map to rendering
const Template: Story<BlogPageProps> = (args) => <BlogPage {...args} />;

// Each story then reuses that template
export const BlogPagePrimary = Template.bind({});
BlogPagePrimary.args = { id: "blog page" };

export const BlogPageSecondary = Template.bind({});
BlogPageSecondary.args = {
  ...BlogPagePrimary.args,
};
