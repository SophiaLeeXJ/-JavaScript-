//Created By Elizabeth on 2017/12/24

$(function(){
    /*$(".wrap ul li").each(function(){
        $(this).mouseenter(function(){
            $(this).addClass("active");
        });
        $(this).mouseleave(function(){
            $(this).removeClass("active");
        });
    });*/

    var sub = $("#submenu");
    var activeRow;
    var activeMenu;

    $('#list')
        .on('mouseenter',function(e){
        sub.removeClass('hide');
    })
        .on('mouseleave',function(e){//鼠标移动到一级菜单时，一级菜单的显示隐藏
        sub.addClass('hide');

        if(activeRow){ //有选中的行时，去掉上个元素的选中效果
            activeRow.removeClass('active');
            activeRow = null;
        }

        if(activeMenu){ //有显示的二级菜单时，隐藏上个二级菜单的显示效果
            activeMenu.addClass('hide');
            activeMenu = null;
        }
    })
        //事件代理：当鼠标移动到菜单列表时，其效果变换
        .on('mouseenter','li', function(e){
        if(!activeRow){ //当一级菜单列表中没有被选中的行时，选中的行添加active效果，该行对应的二级菜单显示
            activeRow = $(e.target).addClass('active');
            activeMenu = $('#' + activeRow.data('id'));//选中和它对应的二级菜单
            activeMenu.removeClass('hide');
            return;
        }

        activeRow.removeClass('active');
        activeMenu.addClass('hide');

        activeRow = $(e.target);
        activeRow.addClass('active');
        activeMenu = $('#' + activeRow.data('id'));
        activeMenu.removeClass('hide');
    });


});
