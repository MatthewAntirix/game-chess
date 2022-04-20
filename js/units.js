
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
        let move_row, move_column
            let move_up, move_down
            let move_left, move_left_up, move_left_down
            let move_right, move_right_down, move_right_up

            let move_knight_1, move_knight_2, move_knight_3, move_knight_4, move_knight_5, move_knight_6, move_knight_7, move_knight_8


// Define all attack variables
        let attack_row, attack_column
            let attack_up, attack_down
            let attack_left, attack_left_up, attack_left_down
            let attack_right, attack_right_down, attack_right_up

            let attack_knight_1, attack_knight_2, attack_knight_3, attack_knight_4, attack_knight_5, attack_knight_6, attack_knight_7, attack_knight_8



////////////////////////////////////////////////////////////////////////////////////////////////////
    // Movements setup
////////////////////////////////////////////////////////////////////////////////////////////////////

    function select_unit(tile_row_id, tile_column_id, unit_name, move_row, move_column) {

        // Column movement / attack
        if(unit_name == `king` || unit_name == `queen` || unit_name == `rook` || unit_name == `pawn`) {
            for(let i = 1; i <= move_row; i++) {



            // Movement up

                // Player 1 - Pawn first movement corrector
                if(unit_name == `pawn` && tile_row_id == (rows-1)) {
                    if(tile_row_id - i >= 1) {
                        move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                        move_up = document.getElementById(`tile_${tile_row_id - (2*i)}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                    } // END Player 1 - Pawn first movement corrector


                }else if(tile_row_id - i >= 1) {
                    move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`)
                    move_up.style.setProperty(`background-color`, unit_movement_color)
                }

            

            // Attack up

                if(tile_row_id - i >= 1) {

                    // Player 1 - Pawn attack corrector
                    if(unit_name == `pawn`) {
                        if(tile_column_id - i >= 1) {
                            attack_left_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`).style.setProperty(`background-color`, unit_attack_color)
                        }
                        if (tile_column_id + i <= columns) {
                            attack_right_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`).style.setProperty(`background-color`, unit_attack_color)
                        }
                    // END Player 1 - Pawn attack corrector

                    } else {
                        attack_up = move_up
                        attack_up.style.setProperty(`background-color`, unit_attack_color)
                    }
                }



            // Movement / attack down

                // Player 1 - Pawn movement corrector
                if(unit_name != `pawn`) {
                    if(tile_row_id + i <= rows) {
                        move_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`)
                        move_down.style.setProperty(`background-color`, unit_movement_color)

                        attack_down = move_down
                        attack_down.style.setProperty(`background-color`, unit_attack_color)
                    } 
                } // END Player 1 - Pawn movement corrector

            } // END for
            
        } // END row movement / attack
            


        // Row movement / attack
        if(unit_name == `king` || unit_name == `queen` || unit_name == `rook`) {
            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id - i >= 1) {
                    move_left = document.getElementById(`tile_${tile_row_id}_${tile_column_id - i}`)
                    move_left.style.setProperty(`background-color`, unit_movement_color)

                    attack_left = move_left
                    attack_left.style.setProperty(`background-color`, unit_attack_color)
                }

                if(tile_column_id + i <= columns) {
                    move_right = document.getElementById(`tile_${tile_row_id}_${tile_column_id + i}`)
                    move_right.style.setProperty(`background-color`, unit_movement_color)

                    attack_right = move_right
                    attack_right.style.setProperty(`background-color`, unit_attack_color)
                }

            } // END for 

        } // END column movement / attack



        // Diagonal left-up movement / attack
        if(unit_name == `king` || unit_name == `queen` || unit_name == `bishop`) {

            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id - i >= 1 && tile_row_id - i >= 1) {
                    move_left_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`)
                    move_left_up.style.setProperty(`background-color`, unit_movement_color)

                    attack_left_up = move_left_up
                    attack_left_up.style.setProperty(`background-color`, unit_attack_color)
                }

                if(tile_column_id + i <= columns && tile_row_id + i <= rows) {
                    move_right_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`)
                    move_right_down.style.setProperty(`background-color`, unit_movement_color)

                    attack_right_down = move_right_down
                    move_right_down.style.setProperty(`background-color`, unit_attack_color)
                }

            } // END for

        } // END diagonal left-up movement / attack



        // Diagonal right-up movement / attack
        if(unit_name == `king` || unit_name == `queen` || unit_name == `bishop`) {
            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id + i <= columns && tile_row_id - i >= 1) {
                    move_right_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`)
                    move_right_up.style.setProperty(`background-color`, unit_movement_color)

                    attack_right_up = move_right_up
                    attack_right_up.style.setProperty(`background-color`, unit_attack_color)
                }

                if(tile_column_id - i >= 1 && tile_row_id + i <= rows) {
                    move_left_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`)
                    move_left_down.style.setProperty(`background-color`, unit_movement_color)

                    attack_left_dow = move_left_down
                    attack_left_dow.style.setProperty(`background-color`, unit_attack_color)
                }

            } // END for

        } // END diagonal right-up movement / attack



        // Knight movement / attack
        if(unit_name == `knight`) {

        // Movement up

            // Column -2, Row -1
                if(tile_column_id - 2 > 0 && tile_row_id - 1 > 0) {
                    move_knight_1 = document.getElementById(`tile_${tile_row_id - 1}_${tile_column_id - 2}`)
                    move_knight_1.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_1 = move_knight_1
                    attack_knight_1.style.setProperty(`background-color`, unit_attack_color)
                }

            // Column -1, Row -2
                if(tile_column_id - 1 > 0 && tile_row_id - 2 > 0) {
                    move_knight_2 = document.getElementById(`tile_${tile_row_id - 2}_${tile_column_id - 1}`)
                    move_knight_2.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_2 = move_knight_2
                    attack_knight_2.style.setProperty(`background-color`, unit_attack_color)
                }

            // Column +1, Row -2
                if(tile_column_id + 1 <= columns && tile_row_id - 2 > 0) {
                    move_knight_3 = document.getElementById(`tile_${tile_row_id - 2}_${tile_column_id + 1}`)
                    move_knight_3.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_3 = move_knight_3
                    attack_knight_3.style.setProperty(`background-color`, unit_attack_color)
                }

            // Column +2, Row -1
                if(tile_column_id + 2 <= columns && tile_row_id - 1 > 0) {
                    move_knight_4 = document.getElementById(`tile_${tile_row_id - 1}_${tile_column_id + 2}`)
                    move_knight_4.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_4 = move_knight_1
                    attack_knight_4.style.setProperty(`background-color`, unit_attack_color)
                }


        // Movement down

            // Column +2, Row +1
                if(tile_column_id + 2 <= columns && tile_row_id + 1 <= rows) {
                    move_knight_5 = document.getElementById(`tile_${tile_row_id + 1}_${tile_column_id + 2}`)
                    move_knight_5.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_5 = move_knight_1
                    attack_knight_5.style.setProperty(`background-color`, unit_attack_color)
                }

            // Column +1, Row +2
                if(tile_column_id + 1 <= columns && tile_row_id + 2 <= rows) {
                    move_knight_6 = document.getElementById(`tile_${tile_row_id + 2}_${tile_column_id + 1}`)
                    move_knight_6.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_6 = move_knight_1
                    attack_knight_6.style.setProperty(`background-color`, unit_attack_color)
                }

            // Column -1, Row +2
                if(tile_column_id - 1 > 0 && tile_row_id + 2 <= rows) {
                    move_knight_7 = document.getElementById(`tile_${tile_row_id + 2}_${tile_column_id - 1}`)
                    move_knight_7.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_7 = move_knight_1
                    attack_knight_7.style.setProperty(`background-color`, unit_attack_color)
                }

            // Column -2, Row +1
                if(tile_column_id - 2 > 0 && tile_row_id + 1 <= rows) {
                    move_knight_8 = document.getElementById(`tile_${tile_row_id + 1}_${tile_column_id - 2}`)
                    move_knight_8.style.setProperty(`background-color`, unit_movement_color)

                    attack_knight_8 = move_knight_1
                    attack_knight_8.style.setProperty(`background-color`, unit_attack_color)
                }

        } // END knight movement / attack

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

// testing units

function create_test(){
document.getElementById(`tile_1_1`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
document.getElementById(`tile_1_2`).innerHTML = `<img src="./images/units/black_knight.png"></img>`
document.getElementById(`tile_1_3`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
document.getElementById(`tile_1_4`).innerHTML = `<img src="./images/units/black_queen.png"></img>`
document.getElementById(`tile_1_5`).innerHTML = `<img src="./images/units/black_king.png"></img>`
document.getElementById(`tile_1_6`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
document.getElementById(`tile_1_7`).innerHTML = `<img src="./images/units/black_knight.png"></img>`
document.getElementById(`tile_1_8`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
    document.getElementById(`tile_2_1`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
    document.getElementById(`tile_2_2`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
    document.getElementById(`tile_2_3`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
    document.getElementById(`tile_2_4`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
    document.getElementById(`tile_2_5`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
    document.getElementById(`tile_2_6`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
    document.getElementById(`tile_2_7`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
    document.getElementById(`tile_2_8`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`

document.getElementById(`tile_8_1`).innerHTML = `<img src="./images/units/white_rook.png"></img>`
document.getElementById(`tile_8_2`).innerHTML = `<img src="./images/units/white_knight.png"></img>`
document.getElementById(`tile_8_3`).innerHTML = `<img src="./images/units/white_bishop.png"></img>`
document.getElementById(`tile_8_4`).innerHTML = `<img src="./images/units/white_queen.png"></img>`
document.getElementById(`tile_8_5`).innerHTML = `<img src="./images/units/white_king.png"></img>`
document.getElementById(`tile_8_6`).innerHTML = `<img src="./images/units/white_bishop.png"></img>`
document.getElementById(`tile_8_7`).innerHTML = `<img src="./images/units/white_knight.png"></img>`
document.getElementById(`tile_8_8`).innerHTML = `<img src="./images/units/white_rook.png"></img>`
    document.getElementById(`tile_7_1`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
    document.getElementById(`tile_7_2`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
    document.getElementById(`tile_7_3`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
    document.getElementById(`tile_7_4`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
    document.getElementById(`tile_7_5`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
    document.getElementById(`tile_7_6`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
    document.getElementById(`tile_7_7`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
    document.getElementById(`tile_7_8`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`

}