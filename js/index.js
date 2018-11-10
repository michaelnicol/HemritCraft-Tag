$(document).ready(function() {
  let id = 0;
  let check = 0;
  let arr;
  let backup = "Error 404, backup not found";
let tags = {
   1: ["Grain tagging Docm77", "Grian Ep.", "https://youtu.be/-_ZLXKB8Njg" ,"Docm77 Ep.", "https://www.youtube.com/watch?v=7SHFXtvB-KI&feature=youtu.be"],
   2: ["Docm77 tagging Mumbo", "Docm77 Ep.", "https://youtu.be/fvEcoNvD-Zg?t=15m22s","Mumbo Ep.", "https://youtu.be/eiHToIo4xkk"],
   3: ["Mumbo tagging Grian", "Grian Ep.", "https://youtu.be/ArxIbTnQL8o?t=1m59s" ,"Mumbo Ep.", "https://youtu.be/KRBf4hsd7MA"],
   4: ["Grain tagging iskall85", "Grian Ep.", "https://youtu.be/MVT1PtIbZQI" ,"iskall85 Ep.", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
   5: ["iskall85 tagging Cub", "iskall85 Ep.", "https://youtu.be/2YeIRBDrgMk" ,"Cub Ep.", "https://youtu.be/wCYwIrI4lfM?t=15s"],
   6: ["Cub tagging Scar", "Cub Ep.", "https://www.youtube.com/watch?v=dQw4w9WgXcQ" ,"Scar Ep.", "https://www.twitch.tv/videos/293487539?t=00h21m52s"],
   7: ["Scar tagging Impluse", "Scar Ep.", "https://www.twitch.tv/videos/293487539?t=01h52m37s" ,"Impluse Ep.", "https://youtu.be/pVKsgE0YtN4?t=1s"],
   8: ["Impluse tagging Zedaph", "Impluse Ep.", "https://youtu.be/pVKsgE0YtN4" ,"Tango Ep.", "https://youtu.be/zwg_0wTKmec?t=9m3s"],
   9: ["Zedaph tagging Tango", "Zedaph Ep.", "https://youtu.be/DSrXC0L4mZs?t=29m8s" ,"Docm77 Ep.", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
   10: ["Tango tagging Cub", "Tango Ep.", "https://youtu.be/LEBSFirM8Fw?t=16m43s" ,"Cub Ep.", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
   11: ["Cub tagging Xisuma", "Cub Ep. [none]", "" ,"Xisuma Ep.  [none]", ""],
   12: ["Xisuma tagging EvilX", "Xisuma Ep.  [none]", "" ,"EvilX Ep. [none]", ""],
   13: ["EvilX tagging iJevin", "EvilX Ep.  [none]", "" ,"iJevin Ep.  [none]", ""],
   14: ["iJevin tagging iskall85", "Grian Ep.  [none]", "" ,"Docm77 Ep.  [none]", ""],
   15: ["iskall85 Tagging Grian", "iskall85 Ep. [none]", "" ,"Grian Ep.  [none]", ""],
   16: ["Grian tagging False", "Grian Ep. [none]", "" ,"False Ep.  [none]", ""],
  17: ["False Tagging Biffa", "False Ep.  [none]", "" ,"Biffa Ep.  [none]", ""],
   18: ["Biffa tagging [...]", "Biffa Ep.  [none]", "" ,"Biffa Ep.  [none]", ""]
  }
let backupObj = {
}
$(document).on('click', '.player-card', function(event) {
  let id = event.currentTarget.id; 
  // ghukahr - if there's already a backupObj for this id we ignore
  // if the user clicks on the back button we also ignore, this is activate
  // because the back button is inside the `.player-card`
  if (backupObj[id] || $(event.target).hasClass('back')) {
    return; 
  }
     // ghukahr - use `html()` instead of `clone()`, we don't want a jquery object,
     // only what's currently inside the `player-card` is fine
     // read more - https://stackoverflow.com/questions/24943102/whats-the-difference-between-clone-and-html
  backupObj[id] = $("#"+id).html()
  arr = tags[id];
  // ghukahr - removed the outer `div.player-card` because we'll be setting only the html
  // instead of replacing everything, the way it was before was causing the html to have
  // two `player-card` wrapped
  $("#"+id).html(`
   <div class="player-card-video-title">
          <p>${arr[0]}</p>
        </div>
    <a href="${arr[2]}" target="_blank">
    <div class="player-card-video-link">
          <p>${arr[1]}</p>
        </div>
    </a>
        <a href="${arr[4]}" target="_blank">

        <div class="player-card-video-link">
          <p>${arr[3]}</p>
        </div>
    </a>
    <button class="back">Back</button>`)
  // inserting the new html, notice the back button
});
  // ghukahr - add `event` argument
  $(document).on('click', '.back', function(event){
    // ghukahr - grab `id` from the parent element instead of using global `id`
    let id = $(event.currentTarget).parent('.player-card').attr('id');
    $("#"+id).html(backupObj[id])
    // ghukahr - remove our backupObj since we already used it
    delete backupObj[id];
  })
});

// Grian: 
// https://yt3.ggpht.com/a-/AN66SAydmXsqg9HEI2Ot18_r6VzmWQyffBszaG1-qg=s900-mo-c-c0xffffffff-rj-k-no
// ZombieCleo: 
// https://yt3.ggpht.com/a-/AN66SAyJ8hcT9D8ZMJLpYZ2Gd3CEYdHlVY8348yr7A=s900-mo-c-c0xffffffff-rj-k-no
// Zedaph: 
// https://yt3.ggpht.com/a-/AN66SAz0wIGMH4dr_2bnZ_ooPrMEj4G1fVMefffT3Q=s900-mo-c-c0xffffffff-rj-k-no
// Xisuma:
// https://yt3.ggpht.com/a-/AN66SAzqsByrUZGdZ9EJUG2iL_QGu1FpnZLxoOzOxQ=s900-mo-c-c0xffffffff-rj-k-no
// xBCrafted:
// https://d24h4out7wreu3.cloudfront.net/product_images/p/925132.f56.d6eb9S7ay1Cm2MjUAAA-650x650-b-p.jpg
// Welsknight: 
// https://yt3.ggpht.com/a-/AN66SAw2flSfJWpAGLXGq4XLr8R4EgcRC3Zyho3-ig=s900-mo-c-c0xffffffff-rj-k-no
// Tin:
// https://pbs.twimg.com/profile_images/967067028459872256/64VL4xqT.jpg
// Tango: 
// https://yt3.ggpht.com/a-/AN66SAwI4mZ-MPnotq7GwXvTZi7p5zF4CfMeQP-1kg=s900-mo-c-c0xffffffff-rj-k-no
// Stress: Not found
// Scar: 
// https://pbs.twimg.com/profile_images/856978348630654977/mk1ZpSJ9_400x400.jpg
// Rendog: 
// https://yt3.ggpht.com/a-/AN66SAzgV1i76Nu8ltD9zpXMLgtIh6vouQH8ctGUEQ=s900-mo-c-c0xffffffff-rj-k-no
// PythonMC: 
// https://yt3.ggpht.com/a-/AN66SAznwfJvTgSTreGPql4JKHTeddLlpVTM2go8lw=s900-mo-c-c0xffffffff-rj-k-no
// Mumbo Jumbo you are AFK: 
// https://yt3.ggpht.com/a-/AN66SAwggRKT6OvTko-mDH4VD2vkGiqbHuXa-hQhkw=s900-mo-c-c0xffffffff-rj-k-no
// JoeHills: 
// https://pbs.twimg.com/profile_images/78731088/Joe_decent2-small_400x400.jpg
// Jevin: 
// https://yt3.ggpht.com/a-/AN66SAw1-bniZkbnpIZsLrxM3mSKIR9Z4b2P2cp8DA=s900-mo-c-c0xffffffff-rj-k-no
// Jessassin: Not found 
// iskall85: 
// https://yt3.ggpht.com/a-/AN66SAy-gwqPwr7WK4Z1KLC5H1wM0rhMYdSp_m-vkg=s900-mo-c-c0xffffffff-rj-k-no
// Impulse: 
// https://yt3.ggpht.com/a-/AN66SAwBT6vbtqKbaIAW7ZsbjjIfFVRts2BDUktVbQ=s900-mo-c-c0xffffffff-rj-k-no
// FalseSem: 
// https://static-cdn.jtvnw.net/jtv_user_pictures/falsesymmetry-profile_image-cbd662ce0d0e23f1-300x300.png
// Doc: 
// https://yt3.ggpht.com/a-/AN66SAxhZKieBfGww7P1jYRt784Zw98-eRHWAFzuJg=s900-mo-c-c0xffffffff-rj-k-no
// Cub: 
// https://pbs.twimg.com/profile_images/611097494433312768/RgddhICo_400x400.jpg
// biffa: 
// https://yt3.ggpht.com/a-/AN66SAy-8hj7cb1HPLy4ZO_UFg3ut9hRSjy40NMr=s900-mo-c-c0xffffffff-rj-k-no