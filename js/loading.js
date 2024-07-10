console.log("HELP");
$(function(){
  $("#git_photo").on({ mouseenter: function(){
    $(this).attr('src','img/yours_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/yours.png');
  }
  });



  $("#soul_photo").on({ mouseenter: function(){
    $(this).attr('src','img/bash_o.png');
  },
  mouseleave: function(){
    $(this).attr('src','img/bash.png');
  }
  });
  
});