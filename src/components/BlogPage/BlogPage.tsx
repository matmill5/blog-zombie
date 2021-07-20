import React, { FC } from "react";
import { BlogPageProps } from "./types";
import styled from "styled-components";
import BlogPreviewTile from "../BlogPreviewTile";
import BlogPhotoPlaceholder from "../../assets/jpg/blog-banner-image-placeholder.jpg";

const BlogPageContainer = styled.div`
  width: 100%;
  padding: 30px;
`;

const BlogPage: FC<BlogPageProps> = ({ ...props }) => {
  return (
    <BlogPageContainer>
      {props.blogPosts.map((post) => {
        return (
          <>
            <BlogPreviewTile
              title={post.blogPostMeta.title}
              subtitle={post.blogPostMeta.subtitle}
              bannerImage={BlogPhotoPlaceholder}
              author={post.blogPostMeta.author}
              dateCreated={post.blogPostMeta.dateCreated}
              url={post.blogPostMeta.url}
            ></BlogPreviewTile>
          </>
        );
      })}
    </BlogPageContainer>
  );
};

BlogPage.defaultProps = {};

export default BlogPage;
