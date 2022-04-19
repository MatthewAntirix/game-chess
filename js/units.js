
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



////////////////////////////////////////////////////////////////////////////////////////////////////
    // Movements setup
////////////////////////////////////////////////////////////////////////////////////////////////////

function select_unit(tile_row_id, tile_column_id, move_row, move_column) {
    select = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).style.setProperty(`background-color`, tile_click_color)


    // Row movement
    for(let i = 1; i <= move_row; i++) {

        if(tile_row_id - i >= 1) {
        move_left = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`).style.setProperty(`background-color`, tile_click_color)
        }

        if(tile_row_id + i <= rows) {
        move_right = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`).style.setProperty(`background-color`, tile_click_color)
        }
    } // END row movement
        


    // Column movement
    for(let i = 1; i <= move_column; i++) {  

        if(tile_column_id - i >= 1) {
        move_up = document.getElementById(`tile_${tile_row_id}_${tile_column_id - i}`).style.setProperty(`background-color`, tile_click_color)
        }

        if(tile_column_id + i <= columns) {
        move_down = document.getElementById(`tile_${tile_row_id}_${tile_column_id + i}`).style.setProperty(`background-color`, tile_click_color)
        }
    } // END column movement



    // Diagonal left-up movement
    for(let i = 1; i <= move_column; i++) {  

        if(tile_column_id - i >= 1 && tile_row_id - i >= 1) {
        move_left_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`).style.setProperty(`background-color`, tile_click_color)
        }

        if(tile_column_id + i <= columns && tile_row_id + i <= rows) {
        move_right_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`).style.setProperty(`background-color`, tile_click_color)
        }
    } // END diagonal left-up movement



    // Diagonal right-up movement
    for(let i = 1; i <= move_column; i++) {  

        if(tile_column_id + i <= columns && tile_row_id - i >= 1) {
        move_right_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`).style.setProperty(`background-color`, tile_click_color)
        }

        if(tile_column_id - i >= 1 && tile_row_id + i <= rows) {
        move_left_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`).style.setProperty(`background-color`, tile_click_color)
        }
    } // END diagonal right-up movement

} // END function select_unit



////////////////////////////////////////////////////////////////////////////////////////////////////
    // Units setup
////////////////////////////////////////////////////////////////////////////////////////////////////

    // Pawn
    function unit_pawn(tile_row_id, tile_column_id) {
        select_unit(tile_row_id, tile_column_id, pawn.movement, pawn.movement)
    }


    // Knight
    function unit_knight(tile_row_id, tile_column_id) {
        select_unit(tile_row_id, tile_column_id, knight.movement, knight.movement)
    }


    // Rook
    function unit_rook(tile_row_id, tile_column_id) {
        select_unit(tile_row_id, tile_column_id, rook.movement, rook.movement)
    }


    // Bishop
    function unit_bishop(tile_row_id, tile_column_id) {
        select_unit(tile_row_id, tile_column_id, bishop.movement, bishop.movement)
    }


    // Queen
    function unit_queen(tile_row_id, tile_column_id) {
        select_unit(tile_row_id, tile_column_id, queen.movement, queen.movement)
    }


    // King
    function unit_king(tile_row_id, tile_column_id) {
        select_unit(tile_row_id, tile_column_id, king.movement, king.movement)
    }



///////////////////////////////////////////

// testing unit
function create_test(){
    document.getElementById(`tile_4_4`).innerHTML = `<img src="./images/test.png"></img>`
    }