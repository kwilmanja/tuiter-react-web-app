import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row ms-2 me-1">
            <div class="col row wd-search-bar wd-border wd-white-background">
                <div class="col-auto wd-adjust-position-down-10">
                    <i class="fas fa-search"></i>
                </div>
                <div class="col">
                    <input class="wd-search-box wd-white-background wd-adjust-position-down-10" type="text" placeholder="Search Tuiter">
                </div>
            </div>
            <div class="col-1 ms-2">
                <a href="explore-settings.html"><i class="fas fa-cog fa-2x" style="color: blue"></i></a>
            </div>
        </div>
        <br>
        <div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
       </div>
           <!-- image with overlaid text -->
           
       <div class="wd-border wd-main-container">
            <img class="wd-main-image" src="../../images/rocket.jpg">
            <h2 class="wd-main-text "><b>SpaceX's Starship</b></h2>
       </div>
           
           ${PostSummaryList()}
       <br>
       <br>
    `);
}
export default ExploreComponent;
