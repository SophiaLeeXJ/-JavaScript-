//Created By Elizabeth on 2018/03/07


$(function(){
    var imgs = [
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1588524565,1986827676&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3006621168,757399234&fm=27&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1763747894,1974478134&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2789093465,3774855831&fm=27&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2173483486,2207117056&fm=27&gp=0.jpg'
    ];

    var index = 0;
    var len = imgs.length;

    $('.btn').on('click', function(){
        if($(this).data('control') === 'prev'){ //上一张

            // index --;
            // if(index < 0){
            //     index = 0;
            // }

            index = Math.max(0, --index); //将index做--运算，然后再与0比较

        }else{ //下一张
            index = Math.min(len-1, ++index);
        }

        document.title = (index + 1) + '/' + len;
        $('#img').attr('src', imgs[index]);
    });

});