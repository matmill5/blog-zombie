import React, { FC } from "react";
import { BlogPageProps } from "./types";
import styled from "styled-components";
import BlogPreviewTile from "../BlogPreviewTile";

const BlogPageContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const BlogPage: FC<BlogPageProps> = ({ ...props }) => {
  return (
    <BlogPageContainer>
      {props.blogPosts.map((post) => {
        <BlogPreviewTile
          title={post.blogPostMeta.title}
          subtitle={post.blogPostMeta.subtitle}
          bannerImage={post.blogPostMeta.bannerImage}
          author={post.blogPostMeta.author}
          dateCreated={post.blogPostMeta.dateCreated}
          url={post.blogPostMeta.url}
        ></BlogPreviewTile>;
      })}
    </BlogPageContainer>
  );
};

BlogPage.defaultProps = {};

export default BlogPage;
