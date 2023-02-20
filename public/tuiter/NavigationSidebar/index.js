


const NavigationSidebar = () => {

    console.log(screen.width);

    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       
       
     <a class="list-group-item" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-home"></i> Home</span>
        <span class="d-xl-none"> <i class="fas fa-home"></i></span>
        </a>
        
     <a class="list-group-item active" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-hashtag"></i>  Explore</span>
        <span class="d-xl-none"> <i class="fas fa-hashtag"></i></span>
        </a>

     <a class="list-group-item" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-bell"></i> Notifications</span>
        <span class="d-xl-none"> <i class="fas fa-bell"></i></span>
        </a>
        
     <a class="list-group-item" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-envelope"></i> Messages</span>
        <span class="d-xl-none"> <i class="fas fa-envelope"></i></span>
        </a>
 
     <a class="list-group-item" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-bookmark"></i> Bookmarks</span>
        <span class="d-xl-none"> <i class="fas fa-bookmark"></i></span>
        </a>
        
     <a class="list-group-item" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-list"></i> Lists</span>
        <span class="d-xl-none"> <i class="fas fa-list"></i></span>
        </a>
        
        
     <a class="list-group-item" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-user"></i> Profile</span>
        <span class="d-xl-none"> <i class="fas fa-user"></i></span>
        </a>
        
        
     <a class="list-group-item" href="/">
        <span class="d-none d-xl-block"><i class="fas fa-ellipsis-h"></i> More</span>
        <span class="d-xl-none"> <i class="fas fa-ellipsis-h"></i></span>
        </a>
        
        
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}



export default NavigationSidebar;

// const init = () => {
//     console.log('Hello world from jQuery');
//     /* do the rest of the lab work here */
//     const navSidebar = $('#wd-navigation-sidebar');
//     navSidebar.append(NavigationSidebar());
// }
// $(init);

