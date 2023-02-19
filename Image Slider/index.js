var img = document.getElementById('img');

var slides=['https://moneyinc.com/wp-content/uploads/2020/08/Marvel.jpg',
'https://www.pngitem.com/pimgs/m/2-22224_ironman-png-marvel-logo-iron-man-png-transparent.png', 
'https://www.syfy.com/sites/syfy/files/styles/blog-post-embedded--mobile/public/2021/04/film-review-thor-2011.jpg',
'https://cdn.vox-cdn.com/thumbor/kA7zzWfG178T-VdEmQI9u4W3tMM=/0x0:2100x1181/1400x933/filters:focal(882x423:1218x759):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/67426100/welcome_to_a_day.0.jpg',
'https://images.herzindagi.info/image/2022/Nov/black-panther-wakanda-forever-twitter-reactions.jpg',
'https://oyster.ignimgs.com/wordpress/stg.ign.com/2021/02/wanda.jpg?width=1280&fit=bounds&height=720&quality=20&dpr=0.05'
];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">";
   
}
setInterval(slider,2000);
