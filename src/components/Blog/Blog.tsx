import React, { FC } from "react";
import { BlogProps } from "./types";
import styled from "styled-components";
import BlogPreviewTile from "../BlogPreviewTile";

const BlogContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const Blog: FC<BlogProps> = ({ ...props }) => {
  return (
    <BlogContainer>
      {props.blogPosts.map((post) => {
        return (
          <BlogPreviewTile
            title={post.blogPostMeta.title}
            subtitle={post.blogPostMeta.subtitle}
            bannerImage={post.blogPostMeta.bannerImage}
            author={post.blogPostMeta.author}
            dateCreated={post.blogPostMeta.dateCreated}
            url={post.blogPostMeta.url}
          ></BlogPreviewTile>
        );
      })}
    </BlogContainer>
  );
};

Blog.defaultProps = {};

export default Blog;
