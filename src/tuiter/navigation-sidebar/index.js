import React from "react";


const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div>
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a className={`list-group-item
                    ${active === 'home'?'active':''}`}>

                <span className="d-none d-xl-block"><i className="fas fa-home"></i> Home</span>
                <span className="d-xl-none"> <i className="fas fa-home"></i></span>

            </a>
            <a className={`list-group-item
                    ${active === 'explore'?'active':''}`}>

                <span className="d-none d-xl-block"><i
                    className="fas fa-hashtag"></i>  Explore</span>
                <span className="d-xl-none"> <i className="fas fa-hashtag"></i></span>

            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>

                <span className="d-none d-xl-block"><i
                    className="fas fa-bell"></i> Notifications</span>
                <span className="d-xl-none"> <i className="fas fa-bell"></i></span>

            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>

                <span className="d-none d-xl-block"><i
                    className="fas fa-envelope"></i> Messages</span>
                <span className="d-xl-none"> <i className="fas fa-envelope"></i></span>

            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>

                <span className="d-none d-xl-block"><i
                    className="fas fa-bookmark"></i> Bookmarks</span>
                <span className="d-xl-none"> <i className="fas fa-bookmark"></i></span>

            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>

                <span className="d-none d-xl-block"><i className="fas fa-list"></i> Lists</span>
                <span className="d-xl-none"> <i className="fas fa-list"></i></span>

            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>

                <span className="d-none d-xl-block"><i className="fas fa-user"></i> Profile</span>
                <span className="d-xl-none"> <i className="fas fa-user"></i></span>

            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>

                <span className="d-none d-xl-block"><i
                    className="fas fa-ellipsis-h"></i> More</span>
                <span className="d-xl-none"> <i className="fas fa-ellipsis-h"></i></span>

            </a>
        </div>

            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>

        </div>


    );
};
export default NavigationSidebar;