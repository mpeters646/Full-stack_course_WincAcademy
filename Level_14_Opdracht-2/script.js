const paintingWalls = function (wallSide, color) {
  console.log("The " + wallSide + " wall has been painted " + color);
  // console.log(`The ${wallSide} wall has been painted ${color}`);
};

paintingWalls("left", "green");
paintingWalls("right", "yellow");
paintingWalls("back", "pink");
paintingWalls("north", "blue");
paintingWalls("south", "white");
paintingWalls("east", "black");

// 6. the order of the arguments does matter when calling the function
// 7. when you switch, your wall and color switching also
// 8. then the color and wall switching also
