import React, { FC } from "react";
import styled from "styled-components";
import { BlogPreviewTileProps } from "./types";

const BlogPreviewTileContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  elevation: 4;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  display: inline;
`;

const Subtitle = styled.h2`
  display: inline;
`;

const BannerImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const BannerImageContainer = styled.div`
  height: 200px;
  width: 100%;
`;

const Author = styled.p`
  display: inline;
`;

const DateCreated = styled.p`
  display: inline;
`;

const Url = styled.a`
  display: inline;
`;

const TileFooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-flow: wrap;
`;
const BlogPreviewTile: FC<BlogPreviewTileProps> = ({ ...props }) => {
  return (
    <BlogPreviewTileContainer>
      <BannerImageContainer>
        <BannerImage src={props.bannerImage}></BannerImage>
      </BannerImageContainer>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      <TileFooterContainer>
        <Author>{props.author}</Author>
        <DateCreated>{props.dateCreated}</DateCreated>
        <Url href={props.url}>{props.url}</Url>
      </TileFooterContainer>
    </BlogPreviewTileContainer>
  );
};

BlogPreviewTile.defaultProps = {};

export default BlogPreviewTile;
