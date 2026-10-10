enum Direction {
    Up,
    Down,
    Left,
    Right
}

function move(direction: Direction) {
    console.log(`Moving ${Direction[direction].toLowerCase()}`)
}

move(Direction.Left)
move(Direction.Right)
move(Direction.Up)
move(Direction.Down)