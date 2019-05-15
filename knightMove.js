function computeKnightMoveFromPosition() {
  //array of objects which all possible knight moves. Objects stored x y chess table coordinates. X is symbol coordinate, y is number
  const allMoves = [{x: -1, y: 2}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 2,y: -1},
                    {x: 1, y: -2}, {x: -1, y: -2}, {x: -2, y: -1},
                    {x: -2, y: 1}];
  //Array to convert 1-8 symbols to A-H numbers
  const convertArray = [null, "A", "B", "C", "D", "E", "F", "G", "H"];
  let form = document.forms[0];
  let position = form.position.value;
  let coor = convertChessPositionToCoor(position);
  if (!coor){
    return false;
  }

  let resultString = "";
  for(let i=0; i < allMoves.length; i++){
    const newXCoor = coor.x + allMoves[i].x;
    const newYCoor = coor.y + allMoves[i].y;
    if((newXCoor >= 1 && newXCoor <= 8) && (newYCoor >= 1 && newYCoor <= 8)){
      resultString = resultString + convertArray[newXCoor] + newYCoor + " ";
    }
  }
  alert("Возможные варианты хода:\n\n\n" + resultString);
  return true;
}

function convertChessPositionToCoor(position) {
  //Object to convert A-H symbols to 1-8 numbers
  const convertDictionary = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8};
  let coor = {x: undefined,
              y: undefined};
  let xCoor = convertDictionary[position[0].toUpperCase()];
  let yCoor = parseInt(position[1]);

  if(typeof(xCoor) === typeof(undefined))
  {
    alert("Первая часть исходной позиции не входит в заданный промежуток: A-H");
    return 0;
  }else{
    coor.x = xCoor
  }

  if (isNaN(yCoor)) {
    alert("Вторая часть исходной позиции не является числом");
    return 0;
  }else{
    if (yCoor >= 1 && yCoor <= 8){
      coor.y = yCoor;
    }else{
      alert("Вторая часть исходной позиции не входит в заданный промежуток: 1-8");
      return 0;
    }
  }

  return coor;
}