import styled from 'styled-components';
import Post from './Post';
import { useInfiniteQuery } from 'react-query';
import { useRef } from 'react';
import useIntersectionObserver from "../hooks/useIntersectionObserver"
import ReactLoading from 'react-loading';


const perPage= 5;

const fetchPosts = async ({ pageParam = 1 }) => {
    const res = await fetch(`/api?page=${pageParam}&per_page=${perPage}`);
    return res.json();
}

const Timeline = () => {

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isFetching,
      } = useInfiniteQuery(
        "posts",
        fetchPosts, 
        {
           getNextPageParam: lastPage => {
               if(lastPage.page === lastPage.total_pages) return false;
               return lastPage.page + 1
           }
        })


    const loadMoreRef = useRef()

    useIntersectionObserver({
        target: loadMoreRef,
        onIntersect: fetchNextPage,
        enabled: hasNextPage,
    });

    return ( 
            <Container>
                 {data?.pages?.map((page, i) => 
                    page?.data?.map((post, j) => {
                        let sourceUrl;
                    
                        let message = post?.etc?.message;
                            message = message.replace(/__PF:[a-z0-9]+/g, (url) => {
                                sourceUrl = post?.urls_mapping?.[url]?.source_url;
                                return ' ' + sourceUrl + ' ';         
                            }               
                        );
    
                        return <Post 
                            key={post?.creation_ts}
                            author={post?.etc?.author_name} 
                            pictureUrl={post?.etc?.from?.picture?.data?.url} 
                            message={message} 
                            description={post?.etc?.description} 
                            name={post?.etc?.name} 
                            caption={post?.etc?.caption} 
                            creationTime={post?.creation_ts}
                            sourceUrl = {sourceUrl}
                        />
                     })
                    )
                }
           <div>{!isFetching && !error && !hasNextPage ? 'No more posts to load': null}</div>
           <div ref={loadMoreRef}>{isFetching || isFetchingNextPage ?  <ReactLoading type='bubbles' color='#69cff5' height={80} width={80} />: null}</div>
           <Error>{error  ? 'There was an error Loading the posts, please check your network!' : null}</Error>
          
        </Container>
    )
    
}

export default Timeline;

const Container = styled.div`
    width: 600px;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 30px;
    @media (max-width: 1020px) {
        width: 500px;
    }
    @media (max-width: 875px) {
       width: 100%;
    }
`;

const Error = styled.div`
    color: #D70000;
    padding: 10px;
`