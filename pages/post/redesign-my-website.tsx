import { NextPage } from 'next'
import PostContainer from '../../components/post'

import { RedesignMyWebsite as post } from '../../markdown/registry'

const Post: NextPage = () => <PostContainer {...post} />
export default Post
