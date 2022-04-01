function navbar(){
    return `

     
    <div id="nav">
        <div id="nav1">
            
        <div style="margin-right: 1.5%; color: rgb(59, 58, 58);" >US-IN$</div>
        <div style="margin-right:1.5%; color: rgb(59, 58, 58);  " >Help</div>
        <div style="margin-right:1.5%;"><a href="sign.html">Sign in</a></div>
        <button onclick="window.location.href='login.html'" >Join</button>
    
        <div>
            <i class="fa-solid fa-cart-shopping fa-2x"  onclick="window.location.href='cart.html'"></i>
            <span id ="cart-count"></span>
        </div>
    </li>
    </div>
    
    <div id="search">
        
        <h1 style="margin-left: 2%;">LYST</h1>
        <h4 style="margin-left: 15px; margin-top: 2.75%;">WOMEN</h4>
    
        <h4 style="margin-left: 15px; margin-top: 2.75%;">MEN</h4>
        <i class='fa fa-search' style="width: 1.8%; margin-top: 2%; margin-left: 10%;" > </i>
       
        <input  id="searchbar" type="search" placeholder="search eg acene jeans">

    </div>
    
    </div>`
}

export default navbar