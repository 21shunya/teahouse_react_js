import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EventPhotoItem from './EventPhotoItem';

const StyledContainers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 30px;
`;

const SubContainers = styled.div<ISubCont>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  align-items: flex-start;
  padding: ${({ padding = '0px' }) => padding};
  gap: 30px;
`;

interface ISubCont {
  padding: string;
  direction: 'row' | 'column';
}

interface IEvent {
  id: number;
  title: string;
}

interface IContainer {
  pos: string;
  posts: Array<IEvent>;
  page: number;
}

interface IItemParams {
  height?: number;
  width: number;
  flex_grow: 0 | 1;
  stretch: 'stretch' | '';
}
const EventPhotoContainers: React.FC<IContainer> = ({ pos, posts, page }) => {
  const [paginatedPosts, setPaginatedPosts] = useState(posts);

  useEffect(() => {
    getPaginatedPosts();
  });

  const getPaginatedPosts = () => {
    if (page > 1) {
      const arr = [];
      let i = (page - 1) * 10 + 1;
      for (i; i <= page * 10; i++) {
        console.log('i:', i);
        arr.push(posts[i - 1]);
      }
      setPaginatedPosts(arr);
    } else {
      setPaginatedPosts(posts);
    }
  };

  const itemParams: Array<IItemParams> = [
    { width: 400, height: 430, flex_grow: 0, stretch: 'stretch' },
    { width: 200, height: 200, flex_grow: 0, stretch: '' },
    { width: 300, height: 660, flex_grow: 0, stretch: '' },
    { width: 250, height: 430, flex_grow: 0, stretch: 'stretch' },
    { width: 350, height: 200, flex_grow: 0, stretch: '' },
    { width: 350, height: 200, flex_grow: 0, stretch: '' },
    { width: 185, height: 200, flex_grow: 1, stretch: '' },
    { width: 185, height: 200, flex_grow: 1, stretch: '' },
    { width: 200, height: 430, flex_grow: 0, stretch: '' },
    { width: 300, height: 430, flex_grow: 0, stretch: '' },
  ];

  console.log(paginatedPosts);
  return pos === 'left' ? (
    <StyledContainers>
      {paginatedPosts.map(
        (postSub, indexSub) =>
          (indexSub === 0 || indexSub === 3 || indexSub === 6) && (
            <SubContainers direction={'row'} padding={'0'}>
              {paginatedPosts.map((post, index) =>
                index === indexSub || (indexSub === 6 && (index === 7 || index === 8)) ? (
                  <EventPhotoItem itemParams={itemParams[index]} post={post} />
                ) : indexSub === 0 && index === 1 ? (
                  <SubContainers direction={'column'} padding={'230px 0 0 0'}>
                    <EventPhotoItem itemParams={itemParams[index]} post={post} />
                  </SubContainers>
                ) : indexSub === 3 && index === 4 ? (
                  <SubContainers direction={'column'} padding={'0'}>
                    <EventPhotoItem itemParams={itemParams[index]} post={post} />
                    <EventPhotoItem
                      itemParams={itemParams[index + 1]}
                      post={paginatedPosts[index + 1]}
                    />
                  </SubContainers>
                ) : null,
              )}
            </SubContainers>
          ),
      )}
    </StyledContainers>
  ) : (
    <StyledContainers>
      <EventPhotoItem itemParams={itemParams[2]} post={paginatedPosts[2]} />
      <EventPhotoItem itemParams={itemParams[9]} post={paginatedPosts[9]} />
    </StyledContainers>
  );
};

export default EventPhotoContainers;
