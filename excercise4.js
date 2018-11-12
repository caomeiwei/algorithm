/**
 * 算法练习4  递推
 *
 */

/**
*从左上到右下，每次只能右移，或下移，直到右下角
*求一条路径，
*此路径上的数字和最多
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


function getBestMatrix(){

    let {row:row_length ,col:col_length} = matrix

    let bestMatrix = [] ;

    for(let i=0; i<row_length;i++){

        bestMatrix.push([])
    }

    for(let row=0;row<row_length;row++){

        for(let col=0;col<col_length;col++){

            if(row==0&&col==0){

                bestMatrix[row][col]=matrix(row,col);

            }else if(row==0){

                bestMatrix[row][col]=bestMatrix[row][col-1]+matrix(row,col);

            }else if(col==0){

                bestMatrix[row][col]=bestMatrix[row-1][col]+matrix(row,col);

            }else{

                bestMatrix[row][col]=Math.max(bestMatrix[row-1][col],bestMatrix[row][col-1])+matrix(row,col);
            }

        }


    }

    return bestMatrix

}


let bestMatrix = getBestMatrix()

let maxvalue = bestMatrix[matrix.row_end][matrix.col_end];


function getBestPath(){


    let {row_end:row ,col_end:col } = matrix;


    let path = [];


    while(row||col){ //二者皆不为0

        if(row&&col){

            if(bestMatrix[row-1][col]>bestMatrix[row][col-1]){ //上边是否大于左边

                path.push('下')  //是则从上边来的

                row--

            }else{

                path.push('右')  //否则从左边来的

                col--
            }

        }else if(row==0){

            path.push('右')  //从左边来的

            col--

        }else if(col==0){

            path.push('下')  //从左边来的

            row--
        }

    }

    return path.reverse();


}