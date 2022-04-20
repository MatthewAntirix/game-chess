
////////////////////////////////////////////////////////////////////////////////////////////////////
// Units
////////////////////////////////////////////////////////////////////////////////////////////////////

// Units constructor

class unit {
    constructor(name, movement) {
        this.name = name
        this.movement = movement
    }
}


// Create units
    const max_movement = rows
        let unit_name
        
        const pawn = new unit(`Pawn`, 1)
        const knight = new unit(`Knight`, 0)
        const rook = new unit(`Rook`, max_movement)
        const bishop = new unit(`Bishop`, max_movement)
        const queen = new unit(`Queen`, max_movement)
        const king = new unit(`King`, 1)


// Define all movements variables
    let select
        let move_row, move_column
            let move_up, move_down
            let move_left, move_left_up, move_left_down
            let move_right, move_right_down, move_right_up

            let move_knight_1, move_knight_2, move_knight_3, move_knight_4, move_knight_5, move_knight_6, move_knight_7, move_knight_8



////////////////////////////////////////////////////////////////////////////////////////////////////
// Movements setup
////////////////////////////////////////////////////////////////////////////////////////////////////

function select_unit(tile_row_id, tile_column_id, unit_name, move_row, move_column) {
select = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).style.setProperty(`background-color`, unit_select_color)


    // Row movement
    if(unit_name == `king` || unit_name == `queen` || unit_name == `rook` || unit_name == `pawn`) {
        for(let i = 1; i <= move_row; i++) {

            // Player 1 - Pawn first movement corrector
            if(unit_name == `pawn` && tile_row_id == (rows-1)) {
                if(tile_row_id - i >= 1) {
                    move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                    move_up = document.getElementById(`tile_${tile_row_id - (2*i)}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                } // END Player 1 - Pawn first movement corrector


            }else if(tile_row_id - i >= 1) {
            move_left = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
            }
                

            // Player 1 - Pawn movement corrector
            if(unit_name != `pawn`) {
                if(tile_row_id + i <= rows) {
                move_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                } 
            } // END Player 1 - Pawn movement corrector

        } // END for
        
    } // END row movement
        


    // Column movement
    if(unit_name == `king` || unit_name == `queen` || unit_name == `rook`) {
        for(let i = 1; i <= move_column; i++) {  

            if(tile_column_id - i >= 1) {
            move_left = document.getElementById(`tile_${tile_row_id}_${tile_column_id - i}`).style.setProperty(`background-color`, unit_movement_color)
            }

            if(tile_column_id + i <= columns) {
            move_right = document.getElementById(`tile_${tile_row_id}_${tile_column_id + i}`).style.setProperty(`background-color`, unit_movement_color)
            }

        } // END for 

    } // END column movement



    // Diagonal left-up movement
    if(unit_name == `king` || unit_name == `queen` || unit_name == `bishop`) {

        for(let i = 1; i <= move_column; i++) {  

            if(tile_column_id - i >= 1 && tile_row_id - i >= 1) {
            move_left_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`).style.setProperty(`background-color`, unit_movement_color)
            }

            if(tile_column_id + i <= columns && tile_row_id + i <= rows) {
            move_right_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`).style.setProperty(`background-color`, unit_movement_color)
            }

        } // END for

    } // END diagonal left-up movement



    // Diagonal right-up movement
    if(unit_name == `king` || unit_name == `queen` || unit_name == `bishop`) {
        for(let i = 1; i <= move_column; i++) {  

            if(tile_column_id + i <= columns && tile_row_id - i >= 1) {
            move_right_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`).style.setProperty(`background-color`, unit_movement_color)
            }

            if(tile_column_id - i >= 1 && tile_row_id + i <= rows) {
            move_left_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`).style.setProperty(`background-color`, unit_movement_color)
            }

        } // END for

    } // END diagonal right-up movement



    // Knight movement
    if(unit_name == `knight`) {

    // Movement up

        // Column -2, Row -1
            if(tile_column_id - 2 > 0 && tile_row_id - 1 > 0) {
                move_knight_1 = document.getElementById(`tile_${tile_row_id - 1}_${tile_column_id - 2}`).style.setProperty(`background-color`, unit_movement_color)
            }

        // Column -1, Row -2
            if(tile_column_id - 1 > 0 && tile_row_id - 2 > 0) {
                move_knight_2 = document.getElementById(`tile_${tile_row_id - 2}_${tile_column_id - 1}`).style.setProperty(`background-color`, unit_movement_color)
            }

        // Column +1, Row -2
            if(tile_column_id + 1 <= columns && tile_row_id - 2 > 0) {
                move_knight_3 = document.getElementById(`tile_${tile_row_id - 2}_${tile_column_id + 1}`).style.setProperty(`background-color`, unit_movement_color)
            }

        // Column +2, Row -1
            if(tile_column_id + 2 <= columns && tile_row_id - 1 > 0) {
                move_knight_4 = document.getElementById(`tile_${tile_row_id - 1}_${tile_column_id + 2}`).style.setProperty(`background-color`, unit_movement_color)
            }


    // Movement down

        // Column +2, Row +1
            if(tile_column_id + 2 <= columns && tile_row_id + 1 <= rows) {
                move_knight_5 = document.getElementById(`tile_${tile_row_id + 1}_${tile_column_id + 2}`).style.setProperty(`background-color`, unit_movement_color)
            }

        // Column +1, Row +2
            if(tile_column_id + 1 <= columns && tile_row_id + 2 <= rows) {
                move_knight_6 = document.getElementById(`tile_${tile_row_id + 2}_${tile_column_id + 1}`).style.setProperty(`background-color`, unit_movement_color)
            }

        // Column -1, Row +2
            if(tile_column_id - 1 > 0 && tile_row_id + 2 <= rows) {
                move_knight_7 = document.getElementById(`tile_${tile_row_id + 2}_${tile_column_id - 1}`).style.setProperty(`background-color`, unit_movement_color)
            }

        // Column -2, Row +1
            if(tile_column_id - 2 > 0 && tile_row_id + 1 <= rows) {
                move_knight_8 = document.getElementById(`tile_${tile_row_id + 1}_${tile_column_id - 2}`).style.setProperty(`background-color`, unit_movement_color)
            }

    } // END knight movement

} // END function select_unit



////////////////////////////////////////////////////////////////////////////////////////////////////
// Units setup
////////////////////////////////////////////////////////////////////////////////////////////////////

// Pawn
function unit_pawn(tile_row_id, tile_column_id) {
    select_unit(tile_row_id, tile_column_id, `pawn`, pawn.movement, pawn.movement)
}


// Knight
function unit_knight(tile_row_id, tile_column_id) {
    select_unit(tile_row_id, tile_column_id, `knight`, knight.movement, knight.movement)
}


// Rook
function unit_rook(tile_row_id, tile_column_id) {
    select_unit(tile_row_id, tile_column_id, `rook`, rook.movement, rook.movement)
}


// Bishop
function unit_bishop(tile_row_id, tile_column_id) {
    select_unit(tile_row_id, tile_column_id, `bishop`, bishop.movement, bishop.movement)
}


// Queen
function unit_queen(tile_row_id, tile_column_id) {
    select_unit(tile_row_id, tile_column_id, `queen`, queen.movement, queen.movement)
}


// King
function unit_king(tile_row_id, tile_column_id) {
    select_unit(tile_row_id, tile_column_id, `king`, king.movement, king.movement)
}



///////////////////////////////////////////

// testing unit
function create_test(){
document.getElementById(`tile_4_4`).innerHTML = `<img src="./images/test.png"></img>`
}