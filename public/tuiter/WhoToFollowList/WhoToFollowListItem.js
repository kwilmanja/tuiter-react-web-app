const WhoToFollowListItem = (who) => {
    return(`

        <li class="list-group-item pt-2 pb-2">
        <div class="row">
            <div class="col">
                <img src="../../images/${who.avatarIcon}" class="d-inline-block wd-follow-images align-top">
                <div class="d-inline-block">
                    <span class="wd-font-12"> ${who.userName} <i class="fas fa-check-circle"></i></span>
                    <br>
                    <span class="wd-font-12">@${who.handle}</span>
                </div>
            </div>
            
            <div class="wd-follow-button-position d-inline-block align-middle">
                <button class="btn btn-primary wd-follow-button">
                    Follow
                </button>
            </div>
        </div>

        </li>
    `);
}
export default WhoToFollowListItem;