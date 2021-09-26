import styled from 'styled-components'
import logo from '../images/navigation-logo.png'
import moment from 'moment'
import Linkify from 'react-linkify'

const Post = (props) => {

    const { author, pictureUrl, message, description, name, caption, sourceUrl, creationTime } = props;
    const addDefaultSrc = (ev) => {
        ev.target.onerror = null;
        ev.target.src = 'https://via.placeholder.com/800x300/?text=PageFreezer.com'
    }

    return (
        <Article>
            <Header>
                <img src={logo}  alt="Author"/>
                <PostMeta>
                    <Author>{author}</Author>
                    <DateEl>{moment.unix(creationTime).format('D MMMM YYYY, h:mmA')}</DateEl>
                </PostMeta>
            </Header>
            <Message>
                <Linkify>
                    {message}
                </Linkify>
            </Message>
            <a href={sourceUrl}>
                <Details>
                    <img src={pictureUrl} alt="Cover" onError={addDefaultSrc} />
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <span>{caption}</span>
                </Details>
            </a>
        </Article>
    )
}

export default Post;

const Article = styled.article`
    background: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
`;

const Header = styled.div`
    display:flex;
    align-items: center;
    width: auto;
    img {
        width: 25px;
        height: 25px;
        margin-right: 10px; 
    }
`;

const PostMeta = styled.div`
    display: flex;
    flex-direction: column;
`;

const Author = styled.h2`
    font-size: 14px;
    margin: 0;
`

const DateEl = styled.span`
    font-size: 12px;
`
const Message = styled.p`
    font-size: 12px;
`

const Details = styled.div`
    border:2px solid #e5e6e7;
    cursor: pointer;
    color: #333333;
    padding-bottom: 10px;
    h2, p, span {
        padding: 0 10px;
    }

`;