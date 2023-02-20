import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";


const WhoToFollowList = () => {
       return(`
       <ul class="list-group">
       <li class="list-group-item">
             Who to follow
       </li>
       
    ${
           who.map(account => {
                  return(WhoToFollowListItem(account));
           }).join('')
       }

       </ul>
   `);
}
export default WhoToFollowList;

const init = () => {
       $('#wd-who-to-follow').append(`
   <div class="container">
       ${WhoToFollowList()}
   </div>
`);
}
$(init);