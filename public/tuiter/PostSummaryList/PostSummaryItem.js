const PostSummaryItem = (post) => {


    return(`

        <li class="list-group-item pt-2 pb-2">
        <div class="row">
            <div class="wd-explore-text d-inline-block col">
                <div class="d-inline-block">
                    ${post.topic ? '<span class="wd-text-grey">' : ''}
                    ${post.topic}
                    ${post.topic ? '</span><br>' : ''}
                    <span>${post.userName}</span>
                        <i class="fas fa-check-circle"></i>
                     <span class="wd-text-grey">- ${post.time}</span>
                    <br>
                    <span>${post.title}</span>

                </div>
            </div>
            <div class="wd-explore-photos d-inline-block">
                    <img src="../../images/${post.image}" class="wd-tuit-image">
            </div>
        </div>
        </li>
    `);
}
export default PostSummaryItem;