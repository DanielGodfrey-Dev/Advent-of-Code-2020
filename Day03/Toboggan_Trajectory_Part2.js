//designing function to allow for different movements other than the stated 3 right 1 down for the problem (as n right and m down) input for this function will be n=3 m=1

function findTrees(map, n, m) {
    let treeCount = 0;
    //starting position at map[0][0]
    let position = map[0][0];
   
    const rightMove = n;
    const downMove = m;
  
    const boundary = map[0].length;
  
    // identify element in map string at map[m][n] at each subsequent movement for '#'' or '.'
    while (m <= map.length - 1) {
      //increment treeCount if #
      position = map[m][n];
      if (position === '#') {
        treeCount++;
      }
      //next move for letting n = n*2 (mod boundary) to account for position wrapping
      n = (n + rightMove) % boundary;
      //continue until m > length of map
      m = m + downMove;
    }
    
    //return treeCount
    return treeCount;
  }
  
  
  const dataSet = [
    '..#..#......#..#.......#...#.#.',
  '...##.....##..#..#....#.##.##.#',
  '...#...#.##...##.....#.....#.#.',
  '..#....#.....#...##.##.###.#...',
  '.#.....#......#..#.##.#...###..',
  '#..#..#.#......#...........###.',
  '#......####.#....##........##..',
  '.#.......#.....#......#...#....',
  '...#...#.....#.......##.....##.',
  '#...##.........#.#..##..#..#.##',
  '#.#.##.........#.#..#.#.....###',
  '.##..##...#....##.....#..#.....',
  '........#.......###.#.#.....#.#',
  '...#.#....#.##..#...##..##..#..',
  '......#....#........######.#...',
  '.##...#.#...###......#.#.#..#.#',
  '........#.##...##.#...#..#...##',
  '.#..#.#..##....###..#.#.......#',
  '..#..##..#.#...#.##......#.....',
  '##.....#..##.#.#..#......##...#',
  '......................#..#..#..',
  '..#.##....####.........###.##..',
  '##..###..#...#....#..#.#...#...',
  '.##.#......#..#....#........#..',
  '.#.....#..#..#.#.#....#.....##.',
  '..........#..#....#..##...#..##',
  '.#...#.#....#.##..#.....#....#.',
  '#..............#.#.#..#..#....#',
  '...#.#...............##........',
  '#.#.##...#.##..##.....#........',
  '...#.......###..###..#...#..#..',
  '####..#.#..##.....##.#.#......#',
  '.#.#.......#..##.......#.......',
  '#....#...#.##.#.......#..#.....',
  '.#...##..#..#..##.......##...#.',
  '.#..#......#.........#.........',
  '#.##.#.....#....#..##..#.....#.',
  '#.#....#.#....#...#.#..#....#..',
  '#..#.....#.##..#.....#...##...#',
  '#....#...##.#.........#.#....##',
  '.......##.##......##.......##..',
  '#.....#..#........#........#...',
  '#....#.#..#.#........##.#...#..',
  '#.......#.#.#.#....#.......##.#',
  '...#..###..........#...#.#.###.',
  '....#..#....#...#....##.#.....#',
  '.#..##.....#..#....##..##...#.#',
  '#.........#....#.#..###...##...',
  '.#.#.........#.#.......#.#.#..#',
  '..........#........##..#.......',
  '.....#.......#...#.....#..##.##',
  '...#.........#.............####',
  '##..#...#..#.#......#...#......',
  '.#..###...#.#.#.#...#...#......',
  '....#..##.#....#..#.#..##..##.#',
  '..#.......#......#..#.......#..',
  '....###......#...##...#....#...',
  '..#..#.....#...#..###....#.#..#',
  '.........##..#.##....#..##..#..',
  '##...#...#.#.........##......#.',
  '###..#.#....#......##..##.#...#',
  '.##...##..#.#.#.#......#..#....',
  '###......#..#..#.....#..#....#.',
  '.#.#..##....##........##..#.#..',
  '###...####.#....#.......###....',
  '..#....###..#.#.#..#.......##..',
  '.......#.#...#.....#.#....##.#.',
  '......#......#.#....#..##..###.',
  '....####..........#.....#......',
  '.###.....#...#..#...##.#...###.',
  '...##....##....###....#.#..#.#.',
  '##.#..........##.........#.##..',
  '..#..#.#.###..##..#....##.....#',
  '..#....##.....#...##....###..##',
  '....#.......##..#..#..........#',
  '............#..#.###..#.#......',
  '...........##......#.#.#...#..#',
  '...##.##....#...##.##.....#.#..',
  '.####...#....###...#.....#....#',
  '.##........#..##..#.#.....#....',
  '..................#.....#..##..',
  '..###.....#.##..#..#....##...#.',
  '...#.##.#.####.#.###.#....#..##',
  '.#....##..##......####.#####...',
  '#...#.#....##.........##....#..',
  '..#.##.....##.............#.##.',
  '###.....#.#..#..#......#.##.#..',
  '...#..##.....#...##...#......#.',
  '.##.#...#......##.#..##....#...',
  '.....##.....#......#.#.........',
  '#.....#.....#........##........',
  '.#......##...#..#.#....###.#..#',
  '#.####...#....#.........#..#...',
  '#..##.#.....#.##.##.#....#...#.',
  '#########..#....#..#...#......#',
  '..##..##...###.######...##.##..',
  '##.......#.......#.#....###..#.',
  '.....#...#.######..#.....#.....',
  '.#......#..#.............#.##.#',
  '..###.#.#......##...###........',
  '.......####.#..##....#........#',
  '..#......#.##....##.##....#....',
  '....#......#.#....#..#.#.....##',
  '####.....#....#.#......#.#.#.##',
  '#...##....#.#.##.........#....#',
  '....#..###......#......#...#...',
  '.....##.#..#..#...#..#.#.#.....',
  '.##............#.....#.........',
  '##...#..#.....##.#..#..........',
  '#.....#####.......#..#....#.#..',
  '.........#..#.....###........#.',
  '#....#..#...###........#..#.#..',
  '...##...#..#...#.##..#.........',
  '.........#.#.....#.......#...#.',
  '.#.....#..####....#.##.......##',
  '...............##....##.##..##.',
  '............#....#....#...##.#.',
  '..#...#........#.......#..#....',
  '##....####....#.##...#..##..#.#',
  '.#.#.....#......#.#........#.#.',
  '....#......#.#....##..##.......',
  '.#..#.#..#..##.....#...........',
  '..#........#.##..#......##..#..',
  '...##.#...#...#..#........#....',
  '##..##....#......#...#..#.#.#.#',
  '......#.....#..#..#....#.......',
  '.....##......#..#.#.##...#.....',
  '...#.....#.#..........#..##...#',
  '.####.##....#...........#.....#',
  '.....###..##...#....##..#...#..',
  '..##...#.#...#..........#..#.#.',
  '...#..#..............#.##.#....',
  '##.#....#...#..#....#..........',
  '.##..........#..#........#.....',
  '#...#.#......#...#.....##..#...',
  '.##...#.#.#....###.####..#....#',
  '.#......#.#...#.#....#.#...#...',
  '#....##.###.............#.#....',
  '....#.###..##..##.##...##......',
  '##....#..###.##.##.....#......#',
  '..#..#..#......#..#..#.........',
  '#.##......#.#....#..#..#.......',
  '....#.#...#..###......##.......',
  '.###.......##.......#....###...',
  '..#..#.##..#.#....#..#.#.....#.',
  '.#..##.##..............#....#..',
  '#...#.#...#..#.##..##.#.#......',
  '#...#..#..##..##.###......#....',
  '.#..#.....#...#....#.....#...#.',
  '.....#....#..#.....###...#.####',
  '.#.....#......#...##...#..#....',
  '.#......#............#.#.......',
  '....##....#.#..#..#...#..#.#...',
  '#...#.....###...##...#.##.....#',
  '.......#.....#....#.......#...#',
  '#.......###.......#.#..........',
  '...#.#.###.#........#.###...#..',
  '....#............#....#..#.....',
  '#......#.##.#...##.......#..#.#',
  '.....#....#....#.#.#...###..#..',
  '.....#.#...#...#.#..#....#.#..#',
  '.#.......#.#..#...###.......##.',
  '.......#..#.##.........#.......',
  '.##.#........#.##...##....#....',
  '.#....#..#...#......####...#..#',
  '...#.....#..##.#..#.#....#....#',
  '...##....#........#.#........#.',
  '.....#....##..#.##..........#..',
  '#.....#.#.#......##....##.#..#.',
  '.#.#.##..#.#....##.#....##.....',
  '.....#.....#..#.#....#..#....##',
  '...#........#....#......###.#..',
  '.....##...#.....##.##.#.#.##...',
  '...#.....#####....##.#.#.###.#.',
  '.#..#.#..##...###.........#.#.#',
  '#...#...#.#..#...#...........#.',
  '.##..............#...#..#....#.',
  '....###.........#.#.#....#.....',
  '..#...##.#.#....##.#..#...#..#.',
  '..#.....#.#......#....#......#.',
  '.......##....#.#.##....#...#..#',
  '##.#.#...#..#......#..#..#....#',
  '...#.#......#............###.##',
  '..###..#..##..#...##........#..',
  '.#...#...##...#....#....##.#..#',
  '..##...####....#....#..#....#.#',
  '...#......##....#.........##.#.',
  '##.#.......#..#..#.............',
  '..#.#.#.#......#...#.#..##.....',
  '.#..##.....###...##.#..#......#',
  '##...#..........#.####....##...',
  '#..........#...#..##....#......',
  '....##...#....#..####...#.##.##',
  '.#.######...##...#..##.........',
  '....##.........#.......##.##...',
  '.#.....#.#..........##......#..',
  '...#..#.#.###..#........#.....#',
  '..##..#............##.......#..',
  '......##....##..#.##..#.......#',
  '.......##....#.......#..#...#.#',
  '#.#......#.###.....#.##........',
  '.#..##..........#..#.....#.##..',
  '..#.#...#....#.........#..##..#',
  '.#......#.......#...#..#..###..',
  '......#.##.....#.#......#....#.',
  '....#....#...#.......#...##.##.',
  '#....#...##...#..##........###.',
  '##......#.#..#.......#.......#.',
  '...##.##..#......#.###..#.#.##.',
  '.............#..#.............#',
  '..#.......##..#..#....##...#...',
  '...............##..##........#.',
  '##...#.##.......#....#.......##',
  '....##.##.#.#.....##.....##.##.',
  '#.#......#.......#..#.#..#.....',
  '....##....#.##........##.##.#..',
  '......##....#..##..#..##....##.',
  '.............#.....#.......#...',
  '.......###.......#..........#..',
  '......##.#..#.....#.#...#.#...#',
  '.#...#..#..###.###...#....##...',
  '#......#..#.#...#...#.....#..##',
  '.###.....#..#.#......##..#.##..',
  '.##.#.....#..#.#..#....##......',
  '#......#..............#.....#.#',
  '...#..#....#.....#.....##.#...#',
  '......#..##..##.....#...#......',
  '.....####..#..#.##.......#..#.#',
  '###.#.#........#.......#.....##',
  '..#.#.#.#...#...#........#....#',
  '....##.#.#..#...##.....#......#',
  '#..#.##....#..#.##..####.......',
  '...####.#...#......#......##..#',
  '#....#.#..###......#..#..##..#.',
  '...........#....#...#......#...',
  '......###.#.....#.#....#.#...#.',
  '.......#.##..............#..##.',
  '..##...........#..#.#...#.....#',
  '#..#............##.........#.#.',
  '.......###.#...#.#...#.#.#...#.',
  '..#...##.......#..#......#.#.##',
  '#.#...#.....#...##.#.#.......##',
  '.#.#.##...#..##.#......#.......',
  '#.......#.......#.#....#.....#.',
  '.....#..#..#.......#..#........',
  '##...##...##......#..##.###....',
  '..#...#.###.#.###..#.....###...',
  '.....####.......#.#.....##....#',
  '....#....#.#....#...#..#.#..#..',
  '..##.....#....#.#.#.###...#....',
  '......#.#....#.#..#....#.#..#..',
  '#...#...#....#.......#......#.#',
  '#..#.#......#..#...........#.##',
  '...............#....#.....#...#',
  '.#.#.#...#.##...#.#.#..#....#..',
  '...#.#.####..##.#...##.........',
  '##.........##.##.....##....#...',
  '................#...#.##.#.#..#',
  '.#..#....#...#..#..#..###.#..#.',
  '...#..#.##.#.####..........#..#',
  '........#....##......#..#.#....',
  '........##.........#..#..#..#.#',
  '#......#.#...#...#...##.....#..',
  '#...#.....#..#..##.#...#.#.#...',
  '....#..##...##.....#...#.#.....',
  '..#..##....#....#...#....#.....',
  '.#..#...##.......###...#...#...',
  '.#......#......#..##..#..##....',
  '....##....#..#.#....#.#..##....',
  '###......#...........#.....###.',
  '.....#...#..##.#..#..#.....#..#',
  '#.#....#...........#.##..#..###',
  '#....#...###.#...#..##..#.....#',
  '.#....#......##.#..#....#.#....',
  '....#.#....#..#.#....#..#..#...',
  '..#......#..#.#.#....#.........',
  '.#...#.#.....#........#.#...###',
  '....#..##.......#.###....##....',
  '#.#.......#......#.###........#',
  '#.........#.....####.##..#..#..',
  '.#.#..##...#.#.....##.#.#..#...',
  '.#..#..#..#.##..#...###.#...#..',
  '.....##..##..##..#.#.#.....###.',
  '.#..#...#..#......##.#.........',
  '....#..##....#.##.........#...#',
  '........#...#...###.........##.',
  '#.........#..##....#.#...#.....',
  '.......#.......#..#.......#....',
  '#......##......#.#.##..........',
  '.#..##..####...#.....####.....#',
  '........#.#....#..##..###.#...#',
  '.#...#...#.........###..#...#.#',
  '#.........#....##...#..........',
  '.#.#....#..........#...........',
  '.#.#..........#.##.....#.##....',
  '..#....#...##..###..........##.',
  '.#.#..#.##..#..#.##.##..##.....',
  '........#...#....#...#.#..##...',
  '......#......##..#..#.....#..#.',
  '.##.#....#...#....#...#..##..##',
  '##............#..........###...',
  '....#.......#.#..#.#####.....#.',
  '#......#.....#...#........#....',
  '..##.....###..#.#.#.#....#....#',
  '#...#...#.#..#..#....#..#......',
  '......#....#...#..#....#####...',
  '....#.......##....#....##......',
  '.....##...#.##.#.....##....#...',
  '.#....###.#..##...##.##.......#',
  '....#.#.#.##.............#..##.',
  '...........##......#...#.#.##..',
  '....##......#....#....##..##.#.',
  '.#.#...#.....##.....#.........#',
  '#.#..........#.......#.##...#..',
  '....#.##..#.#....#.....#...#...',
  '##.............##.......#.##.#.',
  '....#...#.....##...#..........#',
  '##..#...#...#.#.##...#.......##',
  '..#........#.....###...##..##.#',
  '.....#...##.#.#.##.....#...#...',
  '####.###...##..##...#..#..#..##',
  '......#..#..#.........#...#.#..',
  '....###.....##.##....#.##.....#',
  ]
  
  //in part 2, we need to check different slop trajectories, find each treeCount, and multiply all together to get the answer
  
  // Right 1, down 1.
  // Right 3, down 1. (This is the slope you already checked.)
  // Right 5, down 1.
  // Right 7, down 1.
  // Right 1, down 2.
  
  const answer1 = findTrees(dataSet, 1, 1);
  const answer2 = findTrees(dataSet, 3, 1);
  const answer3 = findTrees(dataSet, 5, 1);
  const answer4 = findTrees(dataSet, 7, 1);
  const answer5 = findTrees(dataSet, 1, 2);
  
  console.log(`We hit ${answer1} trees!...on first trajectory`);
  console.log(`We hit ${answer2} trees!...on second trajectory`);
  console.log(`We hit ${answer3} trees!...on third trajectory`);
  console.log(`We hit ${answer4} trees!...on fourth trajectory`);
  console.log(`We hit ${answer5} trees!...on fifth trajectory`);
  console.log('\n');
  
  const magicNum = answer1 * answer2 * answer3 * answer4 * answer5;
  
  console.log(`The magic number is ${magicNum}`);
  