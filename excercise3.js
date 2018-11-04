
/**
 * 算法练习3  广度优先 记忆搜索 遍历矩阵
 *
 */

/**
*从左上到右下，每次只能右移，或下移，直到右下角
*求一条路径，
*此路径上的数字和最多
*/


/**
 * 广度优先  + 记忆搜索
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





class SearchList extends Array{

    constructor(n=0){

        super(n);
    }

    add(item){

        for(let i=0;i<this.length;i++){

            if( item.equal(this[i]) ){

                if(item.sum>this[i].sum){

                    this.splice(i,1,item)
                }
                return
            }
        }

        this.push(item);
    }

}

let count = 0;

let cur_col=0,cur_row=0;


let bestPoint = null;

class SearchItem{

    constructor(direct,point,sum,pre=null){

        this.direct= direct;
        this.point= point;
        this.sum = sum;
        this.pre = pre
    },

    equal(searchitem){ //两个搜索点是否在同一位置

        return this.point.join()==searchitem.point.join()
    },

    isRowEnd(){ //是否在矩阵的行边界

        return this.point[0] == matrix.row_end
    },

    isColEnd(){  //是否在矩阵的列边界

        return this.point[1] == matrix.col_end
    }

    isEndPoint(){  //是否是矩阵的终点

        return this.isRowEnd()&&this.isColEnd()

    }
}

function search(){

    searchlist.push( new SearchItem(null,[0 ,0],matrix(0 ,0) ) )


    while(searchlist.length){

        let  preitem = searchlist.shift();


        if(preitem.isEndPoint() ){



        }

    }


}