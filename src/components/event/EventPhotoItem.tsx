import React from 'react';
import styled from 'styled-components';

const PhotoItem = styled.div<IPhotoItem>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  align-self: ${({ stretch }) => stretch};
  flex-grow: ${({ flex_grow }) => flex_grow};
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-self: stretch;
`;

const StyledImg = styled.div<IPhoto>`
  display: flex;
  order: 1;
  align-self: stretch;
  flex-grow: 1;
  //background: #271749;
  border-radius: 12px;
  background-image: url(${({ imgUrl }) => imgUrl});
`;

interface IPhotoItem {
  height?: number;
  width: number;
  flex_grow: 0 | 1;
  stretch: 'stretch' | '';
}

interface IPhoto {
  imgUrl: string;
}

interface IEvent {
  id: number;
  title: string;
}

interface IEventPhotoItem {
  post: IEvent;
  itemParams: IPhotoItem;
}

const EventPhotoItem: React.FC<IEventPhotoItem> = ({ itemParams, post }) => {
  const imgUrl = `https://loremflickr.com/${itemParams.width}/${itemParams.height}`;

  return (
    <PhotoItem
      height={itemParams.height}
      width={itemParams.width}
      flex_grow={itemParams.flex_grow}
      stretch={itemParams.stretch}
    >
      <StyledText>
        {post.id}. {post.title}
      </StyledText>
      <StyledImg imgUrl={imgUrl}>{}</StyledImg>
    </PhotoItem>
  );
};

export default EventPhotoItem;
