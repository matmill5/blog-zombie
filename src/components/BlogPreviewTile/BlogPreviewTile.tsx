import React, { FC } from "react";
import styled from "styled-components";
import { BlogPreviewTileProps } from "./types";

const BlogPreviewTileContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1``;

const Subtitle = styled.h2``;

const BannerImage = styled.img``;

const Author = styled.p``;

const DateCreated = styled.p``;

const Url = styled.a``;

const BlogPreviewTile: FC<BlogPreviewTileProps> = ({ ...props }) => {
  return (
    <BlogPreviewTileContainer>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <BannerImage src={props.bannerImage}></BannerImage>
      <Author>{props.author}</Author>
      <DateCreated>{props.dateCreated}</DateCreated>
      <Url href={props.url}>{props.url}</Url>
    </BlogPreviewTileContainer>
  );
};

BlogPreviewTile.defaultProps = {};

export default BlogPreviewTile;
