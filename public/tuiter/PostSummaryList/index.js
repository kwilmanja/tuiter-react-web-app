import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";


const PostSummaryList = () => {
    return(`
       <ul class="list-group">       
    ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
       </ul>
   `);
}
export default PostSummaryList;

const init = () => {
    $('#wd-post-summary').append(`
   <div class="container">
       ${PostSummaryList()}
   </div>
`);
}
$(init);