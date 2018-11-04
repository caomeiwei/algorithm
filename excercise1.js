
/**
 * 算法练习1 深度优先遍历矩阵
 *
 */

/**
*从左上到右下，每次只能右移，或下移，直到右下角
*求一条路径，
*此路径上的数字和最多
*/


/**
 * 深度优先，这个相当于暴力遍历出所有情况
 */

var m1 =[
    [300,500,560,400,160],
    [1000,100,200,340,690],
    [600,500,500,460,320],
    [300,400,250,210,760]
];


var m2 = [
    [300, 500, 2560, 400],
    [1000, 100, 200, 340],
    [600, 500, 500, 460],
    [300, 400, 250, 210],
    [860, 690, 320, 760]
];



const matrix = (_matrix=>{

    var  fn=(row,col)=>_matrix[row][col];

    fn.col = _matrix[0].length;  //有多少列

    fn.row = _matrix.length;  //有多少行

    fn.col_end=_matrix[0].length-1;  //列的边界

    fn.row_end=_matrix.length-1;  //行的边界

    fn.end=[fn.row_end, fn.col_end];

    fn.show=()=>{

       return    _matrix.map(v=>'   '+v+'\n').reduce((prev,currv)=>prev+currv,'\n') ;

    }


    return fn;

})(m1)

const RIGHT = 0 ,DOWN =1;

/*
*先试试深度优先搜
*/


let maxvalue = 0  //最终值数组
let path= []  //最结束路径数组

let currpath = []       //当前路径

let currvalue=matrix(0,0);        //当前累加值

let currpoint=[0,0];  //当前坐标

let count = 0;

function bestPath(){

    return path.map(v=>v==RIGHT?'右':'下');
}


function next(direct){

    let [down,right] = currpoint;

    direct==RIGHT&&right++;

    direct==DOWN&&down++;


    currpoint=[down,right]; //更新当前位置点

    currpath.push(direct);  //路径数组添加一步

    currvalue+=matrix(down,right);  //当前累计值加1


}


function back(){

    let direct = currpath.pop(); //路径数组回退最新那一步

    let [down,right] = currpoint;  //获取当前点

    currvalue-=matrix(down,right); //累计值扣去当前的值

    direct==RIGHT&&right--;

    direct==DOWN&&down--;

    currpoint=[down,right]; //更新当前位置点
}




function search(){

    let [down,right] = currpoint;

    if(currpoint.join()== matrix.end.join()){  //到达结束点

        count++;

        if(currvalue>maxvalue){ //累计值大于当前的最大值,记录当前的累计值和路径

            maxvalue=currvalue;

            path= currpath.concat([]) ;
        }

    }


    if(right < matrix.col_end){

        next(RIGHT);
        search();

    }

    if(down < matrix.row_end ){

        next(DOWN);
        search();
    }

    back()

}