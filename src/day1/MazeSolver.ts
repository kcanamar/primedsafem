const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
]


function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]) :boolean {

    // 1. Base Case Off the map
    /**
     * This code is checking if the current x,y coordinates (represented by curr) are out of bounds of the maze array.
     * Specifically, it is checking:
     *      If curr.x is less than 0 - this means it is to the left of the start of the maze array
     *      If curr.x is greater than or equal to maze[0].length - this checks if it is past the end of the first row of the maze array (assuming all rows are the same length)
     *      If curr.y is less than 0 - this means it is above the top of the maze array
     *      If curr.y is greater than or equal to maze.length - this checks if it is past the end of the maze array
     *      If any of these conditions are true, it means the current x,y coordinates are outside the valid bounds of the maze and it returns false.
     * This is a common check in maze traversal algorithms to make sure you don't try to access positions that don't exist in the maze array.
     */
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y >= maze.length) {
            return false;
        }
    
    // 2. Base Case On a Wall
    /**
     * This code is checking if the current x,y coordinates (represented by curr) are on a wall.
     */
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // 3. Base Case At the End
    /**
     * This code is checking if the current x,y coordinates (represented by curr) are at the end.
     */
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true;
    }

    // 4. Base Case Is seen
    /** 
     * This code is checking if the current x,y coordinates (represented by curr) have already been seen.
    */
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 Stages of recursion 
    // pre
    /**
     * This code is setting the current x,y coordinates (represented by curr) to seen.
     */
    seen[curr.y][curr.x] = true;
    /**
     * This code is pushing the current x,y coordinates (represented by curr) to the path array.
     */
    path.push(curr);

    /**
     * Memoizing the directions array to avoid re-creating it every time the walk function is called.
     */
    const len = dir.length;
    // recurse
    /**
     * This code is iterating through each direction in the directions array using the inner for loop.
     */
    for ( let i = 0; i < len; ++i) {

        const [x, y] = dir[i];
        if (walk(maze, wall, {
            x: curr.x + x, 
            y: curr.y + y
        }, end, seen, path)) {
            return true;
        }
    }

    // post
    /**
     * This code is popping the current x,y coordinates (represented by curr) from the path array.
     */
    path.pop();
     
    /**
     * If no path was found.
     */
    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    /**
     * @description This code is iterating through each row in the maze 2D array using the outer for loop.
     * Inside the loop, it is creating a new array with length equal to the number of columns in the maze (maze[0].length).
     * The Array.fill(false) call fills the new array with all false values.
     * The seen array is being populated with an array for each row, filled with false to track which cells have been visited in the maze.
     * This allows the seen array to match the 2D structure of the maze, so seen[i][j] can track if the cell at maze[i][j] has been visited.
     * The seen array will be used to avoid visiting the same cell multiple times while traversing the maze.
     */
    for (let i = 0; i < maze.length; ++i) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}