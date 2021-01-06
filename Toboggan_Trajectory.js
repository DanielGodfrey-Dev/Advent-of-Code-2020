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
  
  let answer = findTrees(dataSet, 3, 1);
  
  console.log(`We hit ${answer} trees!`);