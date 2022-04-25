
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
        let unit_name_log
        
        const pawn = new unit(`Pawn`, 1)
        const knight = new unit(`Knight`, 0)
        const rook = new unit(`Rook`, max_movement)
        const bishop = new unit(`Bishop`, max_movement)
        const queen = new unit(`Queen`, max_movement)
        const king = new unit(`King`, 1)


    // Units promotion
        let promotion_display_on = false
        let player_color
        let select_unit_promote = 0


    // Define players
        const player_1 = "white"
        const player_2 = "black"

            let active_player
            let active_player_toggle = true


    // Define all movements variables
        let selected_unit
        let clicked_tile
        let target_tile
        let moved_unit

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

    function select_unit(name_inner, tile_row_id, tile_column_id, unit_name, move_row, move_column) {



////////////////////////////////////////////////////////////////////////////////////////////////////


        if(unit_name == `pawn`) {
        // Player_1 pawn movement / attack


            // Up movement / attack
            for(let i = 1; i <= move_row; i++) {
                move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`)
                    
                // Player_1 - Pawn attack / movement corrector 
                if(tile_row_id - i >= 1 && unit_name == `pawn` && name_inner.includes('white')) {

                    // Void corrector for first and last column
                        attack_left_up = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)
                        attack_right_up = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)
                    // END void corrector
                    
                    if(tile_column_id - i >= 1) {
                        attack_left_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`)
                        if (name_inner.includes(player_1) && !attack_left_up.innerHTML.includes(player_1) && !attack_left_up.innerHTML.includes('void') || 
                            name_inner.includes(player_2) && !attack_left_up.innerHTML.includes(player_2) && !attack_left_up.innerHTML.includes('void')) {
                            attack_left_up.style.setProperty(`background-color`, unit_attack_color)
                        }
                    }

                    if (tile_column_id + i <= columns) {
                        attack_right_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`)
                        if (name_inner.includes(player_1) && !attack_right_up.innerHTML.includes(player_1) && !attack_right_up.innerHTML.includes('void') || 
                            name_inner.includes(player_2) && !attack_right_up.innerHTML.includes(player_2) && !attack_right_up.innerHTML.includes('void')) {
                            attack_right_up.style.setProperty(`background-color`, unit_attack_color)
                        }
                    } 

                    if((!attack_left_up.innerHTML.includes("black")) && !attack_right_up.innerHTML.includes("black") && move_up.innerHTML.includes("void")) {
                   
                        if (!name_inner.includes('black') && tile_row_id - i >= 1) {

                            // Player_1 - Pawn first movement corrector
                            if(name_inner.includes('white') && unit_name == `pawn` && tile_row_id == (rows-1)) {
                                if(tile_row_id - i >= 1 && name_inner.includes('white')) {                             
                                    move_up = document.getElementById(`tile_${tile_row_id - (2*i)}_${tile_column_id}`)
                                    
                                    if (move_up.innerHTML.includes("void")) {
                                        move_up.style.setProperty(`background-color`, unit_movement_color)
                                            move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`)
                                            move_up.style.setProperty(`background-color`, unit_movement_color)
                                    } else {
                                        move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`)

                                        if (move_up.innerHTML.includes("void")) {
                                            move_up.style.setProperty(`background-color`, unit_movement_color)
                                        }
                                    }
                                } // END Player_1 - Pawn first movement corrector
                            }

                            else {
                                move_up.style.setProperty(`background-color`, unit_movement_color)
                            }
                        }
                    }
                } // END Player_1 - Pawn attack / movement corrector 

            } // END for



            // Player_2 pawn movement / attack


                // Down movement / attack
                for(let i = 1; i <= move_row; i++) {
                    move_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`)
                    
                    // Player_2 - Pawn attack / movement corrector 
                    if(tile_row_id + i <= rows && unit_name == `pawn` && name_inner.includes('black')) {

                            // Void corrector for first and last column
                                attack_left_down = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)
                                attack_right_down = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)
                            // END void corrector
                        
                        if(tile_column_id - i >= 1) {
                            attack_left_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`)
                            if (name_inner.includes(player_1) && !attack_left_down.innerHTML.includes(player_1) && !attack_left_down.innerHTML.includes('void') || 
                                name_inner.includes(player_2) && !attack_left_down.innerHTML.includes(player_2) && !attack_left_down.innerHTML.includes('void')) {
                                attack_left_down.style.setProperty(`background-color`, unit_attack_color)
                            }
                        }
    
                        if (tile_column_id + i <= columns) {
                            attack_right_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`)
                            if (name_inner.includes(player_1) && !attack_right_down.innerHTML.includes(player_1) && !attack_right_down.innerHTML.includes('void') || 
                                name_inner.includes(player_2) && !attack_right_down.innerHTML.includes(player_2) && !attack_right_down.innerHTML.includes('void')) {
                                attack_right_down.style.setProperty(`background-color`, unit_attack_color)
                            }
                        } 
                        
                        if((!attack_left_down.innerHTML.includes("white")) && !attack_right_down.innerHTML.includes("white") && move_down.innerHTML.includes("void")) {
                        
                            if (!name_inner.includes('white') && tile_row_id + i <= rows) {
    
                                // Player_2 - Pawn first movement corrector
                                if(name_inner.includes('black') && unit_name == `pawn` && tile_row_id == 2) {
                                    if(tile_row_id + i <= rows && name_inner.includes('black')) {                             
                                        move_down = document.getElementById(`tile_${tile_row_id + (2*i)}_${tile_column_id}`)
                                        
                                        if (move_down.innerHTML.includes("void")) {
                                            move_down.style.setProperty(`background-color`, unit_movement_color)
                                                move_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`)
                                                move_down.style.setProperty(`background-color`, unit_movement_color)
                                        } else {
                                            move_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`)
    
                                            if (move_down.innerHTML.includes("void")) {
                                                move_down.style.setProperty(`background-color`, unit_movement_color)
                                            }
                                        }
                                    } // END Player_2 - Pawn first movement corrector
                                }
    
                                else {
                                    move_down.style.setProperty(`background-color`, unit_movement_color)
                                }
                            }
                        }
                    } // END Player_2 - Pawn attack / movement corrector 
                    
                } // END for

        } // END pawn movement / attack



////////////////////////////////////////////////////////////////////////////////////////////////////



        if(unit_name == `king` || unit_name == `queen` || unit_name == `rook`) {


        // Up movement / attack
            for(let i = 1; i <= move_row; i++) {  

                if(tile_row_id - i >= 1) {
                    move_up = document.getElementById(`tile_${tile_row_id -i}_${tile_column_id}`)

                    if (move_up.innerHTML.includes("void")) {
                        move_up.style.setProperty(`background-color`, unit_movement_color)

                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_up.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_up.innerHTML.includes(player_2)) {

                            attack_up = move_up
                            attack_up.style.setProperty(`background-color`, unit_attack_color)
                        }
                    }
                }
            } //  END Up movement / attack


        // Down movement / attack
            for(let i = 1; i <= move_row; i++) {  

                if(tile_row_id + i <= rows) {
                    move_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`)

                    if (move_down.innerHTML.includes("void")) {
                        move_down.style.setProperty(`background-color`, unit_movement_color)

                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_down.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_down.innerHTML.includes(player_2)) {

                            attack_down = move_down
                            attack_down.style.setProperty(`background-color`, unit_attack_color)
                        }
                    }
                }
            } //  END Down movement / attack


        } // END column movement / attack
            


////////////////////////////////////////////////////////////////////////////////////////////////////



    // Row movement / attack

        if(unit_name == `king` || unit_name == `queen` || unit_name == `rook`) {


        // Left movement / attack
            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id - i >= 1) {
                    move_left = document.getElementById(`tile_${tile_row_id}_${tile_column_id - i}`)

                    if (move_left.innerHTML.includes("void")) {
                        move_left.style.setProperty(`background-color`, unit_movement_color)

                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_left.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_left.innerHTML.includes(player_2)) {

                            attack_left = move_left
                            attack_left.style.setProperty(`background-color`, unit_attack_color)
                        }
                    }
                }
            } //  END Left movement / attack


        // Right movement / attack
            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id + i <= columns) {
                    move_right = document.getElementById(`tile_${tile_row_id}_${tile_column_id + i}`)

                    if (move_right.innerHTML.includes("void")) {
                        move_right.style.setProperty(`background-color`, unit_movement_color)

                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_right.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_right.innerHTML.includes(player_2)) {

                            attack_right = move_right
                            attack_right.style.setProperty(`background-color`, unit_attack_color)
                        }
                    }
                }
            } //  END Right movement / attack


        } // END row movement / attack



////////////////////////////////////////////////////////////////////////////////////////////////////



    // Diagonal movement / attack

        if(unit_name == `king` || unit_name == `queen` || unit_name == `bishop`) {


            //  Diagonal left up movement / attack
            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id - i >= 1 && tile_row_id - i >= 1) {
                    move_left_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`)

                    if (move_left_up.innerHTML.includes("void")) {
                        move_left_up.style.setProperty(`background-color`, unit_movement_color)

                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_left_up.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_left_up.innerHTML.includes(player_2)) {

                                attack_left_up = move_left_up
                                attack_left_up.style.setProperty(`background-color`, unit_attack_color)
                            }
                        }
                    }
                } //  END Diagonal left-up movement / attack



            //  Diagonal right down movement / attack
            for(let i = 1; i <= move_column; i++) {    

                if(tile_column_id + i <= columns && tile_row_id + i <= rows) {
                    move_right_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`)

                    if (move_right_down.innerHTML.includes("void")) {
                        move_right_down.style.setProperty(`background-color`, unit_movement_color)

                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_right_down.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_right_down.innerHTML.includes(player_2)) {

                                attack_right_down = move_right_down
                                move_right_down.style.setProperty(`background-color`, unit_attack_color)
                            }
                        }
                    }
                } //  END Diagonal right down movement / attack
                


////////////////////////////////////////////////////////////////////////////////////////////////////



        // Diagonal right-up movement / attack
            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id + i <= columns && tile_row_id - i >= 1) {
                    move_right_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`)

                    if (move_right_up.innerHTML.includes("void")) {
                        move_right_up.style.setProperty(`background-color`, unit_movement_color)

                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_right_up.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_right_up.innerHTML.includes(player_2)) {
                        
                            attack_right_up = move_right_up
                            attack_right_up.style.setProperty(`background-color`, unit_attack_color)
                        }
                    }
                }
            } //  END Diagonal right-up movement / attack


        // Diagonal left-down movement / attack
            for(let i = 1; i <= move_column; i++) {  

                if(tile_column_id - i >= 1 && tile_row_id + i <= rows) {
                    move_left_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`)

                    if (move_left_down.innerHTML.includes("void")) {
                        move_left_down.style.setProperty(`background-color`, unit_movement_color)
                    
                    } else {
                        i = move_column
                        if (name_inner.includes(player_1) && !move_left_down.innerHTML.includes(player_1) || 
                            name_inner.includes(player_2) && !move_left_down.innerHTML.includes(player_2)) {

                            attack_left_down = move_left_down
                            attack_left_down.style.setProperty(`background-color`, unit_attack_color)
                        }
                    }
                } 
            } // END Diagonal right-up movement / attack


        } // END diagonal movement / attack



////////////////////////////////////////////////////////////////////////////////////////////////////



        // Knight movement / attack
        if(unit_name == `knight`) {

        // Movement up ////////////////////////////////////////////////////////////////

            // Column -2, Row -1
                if(tile_column_id - 2 >= 1 && tile_row_id - 1 >= 1) {
                    move_knight_1 = document.getElementById(`tile_${tile_row_id - 1}_${tile_column_id - 2}`)

                    if (move_knight_1.innerHTML.includes("void")) {
                        move_knight_1.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_1.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_1.innerHTML.includes(player_2)) {
                                   
                        attack_knight_1 = move_knight_1
                        attack_knight_1.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column -2, Row -1



            // Column -1, Row -2
                if(tile_column_id - 1 >= 1 && tile_row_id - 2 >= 1) {
                    move_knight_2 = document.getElementById(`tile_${tile_row_id - 2}_${tile_column_id - 1}`)

                    if (move_knight_2.innerHTML.includes("void")) {
                        move_knight_2.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_2.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_2.innerHTML.includes(player_2)) {

                        attack_knight_2 = move_knight_2
                        attack_knight_2.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column -1, Row -2



            // Column +1, Row -2
                if(tile_column_id + 1 <= columns && tile_row_id - 2 >= 1) {
                    move_knight_3 = document.getElementById(`tile_${tile_row_id - 2}_${tile_column_id + 1}`)

                    if (move_knight_3.innerHTML.includes("void")) {
                        move_knight_3.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_3.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_3.innerHTML.includes(player_2)) {

                        attack_knight_3 = move_knight_3
                        attack_knight_3.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column +1, Row -2



            // Column +2, Row -1
                if(tile_column_id + 2 <= columns && tile_row_id - 1 >= 1) {
                    move_knight_4 = document.getElementById(`tile_${tile_row_id - 1}_${tile_column_id + 2}`)

                    if (move_knight_4.innerHTML.includes("void")) {
                        move_knight_4.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_4.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_4.innerHTML.includes(player_2)) {
 
                        attack_knight_4 = move_knight_4
                        attack_knight_4.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column +2, Row -1



        // Movement down    ////////////////////////////////////////////////////////////////

            // Column +2, Row +1
                if(tile_column_id + 2 <= columns && tile_row_id + 1 <= rows) {
                    move_knight_5 = document.getElementById(`tile_${tile_row_id + 1}_${tile_column_id + 2}`)

                    if (move_knight_5.innerHTML.includes("void")) {
                        move_knight_5.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_5.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_5.innerHTML.includes(player_2)) {
                                
                        attack_knight_5 = move_knight_5
                        attack_knight_5.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column +2, Row +1



            // Column +1, Row +2
                if(tile_column_id + 1 <= columns && tile_row_id + 2 <= rows) {
                    move_knight_6 = document.getElementById(`tile_${tile_row_id + 2}_${tile_column_id + 1}`)

                    if (move_knight_6.innerHTML.includes("void")) {
                        move_knight_6.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_6.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_6.innerHTML.includes(player_2)) {

                        attack_knight_6 = move_knight_6
                        attack_knight_6.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column +1, Row +2



            // Column -1, Row +2
                if(tile_column_id - 1 >= 1 && tile_row_id + 2 <= rows) {
                    move_knight_7 = document.getElementById(`tile_${tile_row_id + 2}_${tile_column_id - 1}`)

                    if (move_knight_7.innerHTML.includes("void")) {
                        move_knight_7.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_7.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_7.innerHTML.includes(player_2)) {

                        attack_knight_7 = move_knight_7
                        attack_knight_7.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column -1, Row +2



            // Column -2, Row +1
                if(tile_column_id - 2 >= 1 && tile_row_id + 1 <= rows) {
                    move_knight_8 = document.getElementById(`tile_${tile_row_id + 1}_${tile_column_id - 2}`)

                    if (move_knight_8.innerHTML.includes("void")) {
                        move_knight_8.style.setProperty(`background-color`, unit_movement_color)

                    } else if (name_inner.includes(player_1) && !move_knight_8.innerHTML.includes(player_1) || 
                               name_inner.includes(player_2) && !move_knight_8.innerHTML.includes(player_2)) {

                        attack_knight_8 = move_knight_8
                        attack_knight_8.style.setProperty(`background-color`, unit_attack_color)
                    }
                } // END Column -2, Row +1


        } // END knight movement / attack
        
        checkmate (name_inner, tile_row_id, tile_column_id, unit_name, move_row, move_column)

    } // END function select_unit



////////////////////////////////////////////////////////////////////////////////////////////////////
    // Units setup
////////////////////////////////////////////////////////////////////////////////////////////////////

    // Pawn
    function unit_pawn(name, tile_row_id, tile_column_id) {
        select_unit(name, tile_row_id, tile_column_id, `pawn`, pawn.movement, pawn.movement)
    }


    // Knight
    function unit_knight(name, tile_row_id, tile_column_id) {
        select_unit(name, tile_row_id, tile_column_id, `knight`, knight.movement, knight.movement)
    }


    // Rook
    function unit_rook(name, tile_row_id, tile_column_id) {
        select_unit(name, tile_row_id, tile_column_id, `rook`, rook.movement, rook.movement)
    }


    // Bishop
    function unit_bishop(name, tile_row_id, tile_column_id) {
        select_unit(name, tile_row_id, tile_column_id, `bishop`, bishop.movement, bishop.movement)
    }


    // Queen
    function unit_queen(name, tile_row_id, tile_column_id) {
        select_unit(name, tile_row_id, tile_column_id, `queen`, queen.movement, queen.movement)
    }


    // King
    function unit_king(name, tile_row_id, tile_column_id) {
        select_unit(name, tile_row_id, tile_column_id, `king`, king.movement, king.movement)
    }



////////////////////////////////////////////////////////////////////////////////////////////////////
        // Chess units create setup
////////////////////////////////////////////////////////////////////////////////////////////////////

        function set_chess_units(){

            // // Player 2
            // document.getElementById(`tile_1_${(Math.floor(columns/2))-3}`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
            // document.getElementById(`tile_1_${(Math.floor(columns/2))-2}`).innerHTML = `<img src="./images/units/black_knight.png"></img>`
            // document.getElementById(`tile_1_${(Math.floor(columns/2))-1}`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            // document.getElementById(`tile_1_${(Math.floor(columns/2))-0}`).innerHTML = `<img src="./images/units/black_queen.png"></img>`
            // document.getElementById(`tile_1_${(Math.floor(columns/2))+1}`).innerHTML = `<img src="./images/units/black_king.png"></img>`
            // document.getElementById(`tile_1_${(Math.floor(columns/2))+2}`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            // document.getElementById(`tile_1_${(Math.floor(columns/2))+3}`).innerHTML = `<img src="./images/units/black_knight.png"></img>`
            // document.getElementById(`tile_1_${(Math.floor(columns/2))+4}`).innerHTML = `<img src="./images/units/black_rook.png"></img>`

            //     for (let i = 1; i <= columns; i++) {
            //         document.getElementById(`tile_2_${i}`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
            //     }


            // // Player 1
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-3}`).innerHTML = `<img src="./images/units/white_rook.png"></img>`
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-2}`).innerHTML = `<img src="./images/units/white_knight.png"></img>`
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-1}`).innerHTML = `<img src="./images/units/white_bishop.png"></img>`
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-0}`).innerHTML = `<img src="./images/units/white_queen.png"></img>`
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+1}`).innerHTML = `<img src="./images/units/white_king.png"></img>`
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+2}`).innerHTML = `<img src="./images/units/white_bishop.png"></img>`
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+3}`).innerHTML = `<img src="./images/units/white_knight.png"></img>`
            // document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+4}`).innerHTML = `<img src="./images/units/white_rook.png"></img>`

            //     for (let i = 1; i <= columns; i++) {
            //         document.getElementById(`tile_${rows-1}_${i}`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
            //     }

            document.getElementById(`tile_4_7`).innerHTML = `<img src="./images/units/white_king.png"></img>`
            document.getElementById(`tile_5_5`).innerHTML = `<img src="./images/units/black_king.png"></img>`
            document.getElementById(`tile_3_1`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
            document.getElementById(`tile_4_1`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
            document.getElementById(`tile_5_1`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
            document.getElementById(`tile_5_2`).innerHTML = `<img src="./images/units/black_knight.png"></img>`

            document.getElementById(`tile_3_8`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            document.getElementById(`tile_4_8`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
            document.getElementById(`tile_5_8`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`

            document.getElementById(`tile_1_1`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            document.getElementById(`tile_8_8`).innerHTML = `<img src="./images/units/black_queen.png"></img>`
            document.getElementById(`tile_2_1`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
            document.getElementById(`tile_7_1`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`

            document.getElementById(`tile_1_2`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            document.getElementById(`tile_1_8`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            document.getElementById(`tile_1_7`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            document.getElementById(`tile_8_1`).innerHTML = `<img src="./images/units/black_queen.png"></img>`

            document.getElementById(`tile_4_2`).innerHTML = `<img src="./images/units/white_queen.png"></img>`

                create_name_bars()                 //////// change this position after init /// now only for testing

        } // END function set_chess_units



////////////////////////////////////////////////////////////////////////////////////////////////////
        // Chess units identify and setup unit movements / attack
////////////////////////////////////////////////////////////////////////////////////////////////////

        function player_identify (name, tile_row_id, tile_column_id) {

            if(active_player_toggle === true) {
                active_player = player_1
            } else if (active_player_toggle === false) {
                active_player = player_2
            }

        } // END function player_identify



        function unit_identify (name, tile_row_id, tile_column_id) {

        // Tile identify

            // Empty tile
            if(name.includes("void")) {
                }

                // Pawn tile
                if(name.includes("pawn")) {
                    unit_pawn(name, tile_row_id, tile_column_id)
                        unit_name_log = `PAWN`
                        return unit_name_log
                }

                // Knight tile
                if(name.includes("knight")) {
                    unit_knight(name, tile_row_id, tile_column_id)
                        unit_name_log = `KNIGHT`
                        return unit_name_log
                }

                // Rook tile
                if(name.includes("rook")) {
                    unit_rook(name, tile_row_id, tile_column_id)
                        unit_name_log = `ROOK`
                        return unit_name_log
                }

                // Bishop tile
                if(name.includes("bishop")) {
                    unit_bishop(name, tile_row_id, tile_column_id)
                        unit_name_log = `BISHOP`
                        return unit_name_log
                }

                // Queen tile
                if(name.includes("queen")) {
                    unit_queen(name, tile_row_id, tile_column_id)
                        unit_name_log = `QUEEN`
                        return unit_name_log
                }

                // King tile
                if(name.includes("king")) {
                    unit_king(name, tile_row_id, tile_column_id)
                        unit_name_log = `KING`
                        return unit_name_log
                }
            
        } // END function unit_identify



////////////////////////////////////////////////////////////////////////////////////////////////////
// Units promotion
////////////////////////////////////////////////////////////////////////////////////////////////////

function color_unite_promote_update () {

    if(scan_white_queen == 0 && player_color == `white` || scan_black_queen == 0 && player_color == `black`) {
        document.getElementById(`unit_promote`).innerHTML = 
        `<h1>Unit promote</h1>
        <div>
        <img onclick="select_knight_promote()" id="knight" src="./images/units/${player_color}_knight.png"></img>
        <img onclick="select_rook_promote()" id="rook" src="./images/units/${player_color}_rook.png"></img>
        <img onclick="select_bishop_promote()" id="bishop" src="./images/units/${player_color}_bishop.png"></img>
        <img onclick="select_queen_promote()" id="queen" src="./images/units/${player_color}_queen.png"></img>
        </div>`


    } else {
    document.getElementById(`unit_promote`).innerHTML = 
    `<h1>Unit promote</h1>
    <div>
    <img onclick="select_knight_promote()" id="knight" src="./images/units/${player_color}_knight.png"></img>
    <img onclick="select_rook_promote()" id="rook" src="./images/units/${player_color}_rook.png"></img>
    <img onclick="select_bishop_promote()" id="bishop" src="./images/units/${player_color}_bishop.png"></img>
    </div>`
    }

} // END color_unite_promote_update



function promote_scan () {

    for (let i = 1; i < columns; i++) {
        let first_row = document.getElementById(`tile_1_${i}`).innerHTML
        let last_row = document.getElementById(`tile_8_${i}`).innerHTML

        if (first_row.includes(`white_pawn`) || last_row.includes(`black_pawn`)) {
            document.getElementById(`unit_promote`).style.setProperty("display", `block`)
            promotion_display_on = true

            if(first_row.includes(`white_pawn`)) {
                player_color = player_1
                color_unite_promote_update()

                if(select_unit_promote != 0) {
                    document.getElementById(`tile_1_${i}`).innerHTML = `<img src="./images/units/${player_color}_${select_unit_promote}.png"></img>`
                    document.getElementById(`unit_promote`).style.setProperty("display", `none`)

                    selected_unit = 0
                    select_unit_promote = 0
                    promotion_display_on = false
                    active_player_toggle = !active_player_toggle

                }

            } else if (last_row.includes(`black_pawn`)) {
                player_color = player_2
                color_unite_promote_update()

                if(select_unit_promote != 0) {
                    document.getElementById(`tile_${rows}_${i}`).innerHTML = `<img src="./images/units/${player_color}_${select_unit_promote}.png"></img>`
                    document.getElementById(`unit_promote`).style.setProperty("display", `none`)

                    selected_unit = 0
                    select_unit_promote = 0
                    promotion_display_on = false
                    active_player_toggle = !active_player_toggle
                }
            }
        }

        // Update players panels content
        unit_scan()
        scan_log()
        // END update players panels content      

    } // END for

} // END function promote_scan



        // Knight promote
        function select_knight_promote() {
            select_unit_promote = `knight`
            promote_scan()
        } // END Knight promote

        // Rook promote
        function select_rook_promote() {
            select_unit_promote = `rook`
            promote_scan()
        } // END Rook promote

        // Bishop promote
        function select_bishop_promote() {
            select_unit_promote = `bishop`
            promote_scan()
        } // END Bishop promote

        // Queen promote
        function select_queen_promote() {
            select_unit_promote = `queen`
            promote_scan()
        } // END Queen promote



////////////////////////////////////////////////////////////////////////////////////////////////////
// Checkmate scan
////////////////////////////////////////////////////////////////////////////////////////////////////

let checkmate_scan
let checkmate_unit
let diagonal_scan
let diagonal_max
let checkmate_color


function checkmate (name_inner, tile_row_id, tile_column_id, unit_name, move_row, move_column) {

    if (name_inner.includes(`white`)) {
        checkmate_color = player_2                  // black enemy unit
    } else if (name_inner.includes(`black`)) {
        checkmate_color = player_1                  // white enemy unit
    }


    if (unit_name == `king`) {

    // Define diagonal scan
    if (tile_row_id <= tile_column_id) {
        diagonal_scan = tile_row_id
        diagonal_max = rows
    } else {
        diagonal_scan = tile_column_id
        diagonal_max = columns
    }

///////// Rows ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Left row checkmate scan
        for (let i = tile_column_id-1; i >= 1; i--) {

            checkmate_unit = document.getElementById(`tile_${tile_row_id}_${i}`)
            checkmate_scan = document.getElementById(`tile_${tile_row_id}_${i}`).innerHTML

            if (!checkmate_scan.includes(`void`)) {
                if (checkmate_scan.includes(`rook`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color) ) {
                    checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                    i = 0
                } else if (!checkmate_scan.includes(`void`)) {
                    i = 0
                }
            }
        } // END for


        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Right row checkmate scan
        for (let i = tile_column_id+1; i <= columns; i++) {

            checkmate_unit = document.getElementById(`tile_${tile_row_id}_${i}`)
            checkmate_scan = document.getElementById(`tile_${tile_row_id}_${i}`).innerHTML

            if (!checkmate_scan.includes(`void`)) {
                if (checkmate_scan.includes(`rook`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color)) {
                    checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                    i = columns
                } else if (!checkmate_scan.includes(`void`)) {
                    i = columns
                }
            }
        } // END for



///////// Columns /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Up column checkmate scan
        for (let i = tile_row_id-1; i >= 1; i--) {

            checkmate_unit = document.getElementById(`tile_${i}_${tile_column_id}`)
            checkmate_scan = document.getElementById(`tile_${i}_${tile_column_id}`).innerHTML

            if (!checkmate_scan.includes(`void`)) {
                if (checkmate_scan.includes(`rook`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color)) {
                    checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                    i = 0
                } else if (!checkmate_scan.includes(`void`)) {
                    i = 0
                }
            }
        } // END for


        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Down column checkmate scan
        for (let i = tile_row_id+1; i <= rows; i++) {

            checkmate_unit = document.getElementById(`tile_${i}_${tile_column_id}`)
            checkmate_scan = document.getElementById(`tile_${i}_${tile_column_id}`).innerHTML

            if (!checkmate_scan.includes(`void`)) {
                if (checkmate_scan.includes(`rook`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color)) {
                    checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                    i = rows
                } else if (!checkmate_scan.includes(`void`)) {
                    i = rows
                }
            }
        } // END for



///////// Diagonal ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        // Left up checkmate scan
        for (let i = 1; (i - diagonal_scan) < 1; i++) {

            // Column / row max id corrector
            if ((tile_row_id - i) < 1 || (tile_column_id - i) < 1) {
                i = diagonal_max

            } else {
                checkmate_unit = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`)
                checkmate_scan = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id - i}`).innerHTML

                if (!checkmate_scan.includes(`void`)) {
                    if (checkmate_scan.includes(`bishop`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color)) {
                        checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                        i = diagonal_max
                        
                    } else if (!checkmate_scan.includes(`void`)) {
                        i = diagonal_max
                        // checkmate_unit.style.setProperty(`background-color`, unit_test_color) // display path
                    }
                } else {
                    // checkmate_unit.style.setProperty(`background-color`, unit_void_color) // display path
                }
            }
        } // END for



        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Right up checkmate scan
        for (let i = 1; (i + diagonal_scan) <= diagonal_max; i++) {

            // Column / row max id corrector
            if ((tile_row_id - i) < 1 || (tile_column_id + i) > diagonal_max) {
                i = diagonal_max

            } else {
                checkmate_unit = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`)
                checkmate_scan = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id + i}`).innerHTML

                if (!checkmate_scan.includes(`void`)) {
                    if (checkmate_scan.includes(`bishop`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color)) {
                        checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                        i = diagonal_max
                        
                    } else if (!checkmate_scan.includes(`void`)) {
                        i = diagonal_max
                        // checkmate_unit.style.setProperty(`background-color`, unit_test_color) // display path
                    }
                } else {
                    // checkmate_unit.style.setProperty(`background-color`, unit_void_color) // display path
                }
            }
        } // END for



        ////////////////////////////////////////////////////////////////////////////////////////////////////
        // Left down checkmate scan
        for (let i = 1; (i + diagonal_scan) <= diagonal_max; i++) {

            // Column / row max id corrector
            if ((tile_row_id + i) > diagonal_max || (tile_column_id - i) < 1) {
                i = diagonal_max

            } else {
                checkmate_unit = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`)
                checkmate_scan = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`).innerHTML

                if (!checkmate_scan.includes(`void`)) {

                    if (checkmate_scan.includes(`bishop`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color)) {
                        checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                        i = diagonal_max
                        
                    } else if (!checkmate_scan.includes(`void`)) {
                        i = diagonal_max
                        // checkmate_unit.style.setProperty(`background-color`, unit_test_color) // display path
                    }
                } else {
                    // checkmate_unit.style.setProperty(`background-color`, unit_void_color) // display path
                }
            }
        } // END for



        ////////////////////////////////////////////////////////////////////////////////////////////////////
        //  Right down checkmate scan
        for (let i = 1; (i + diagonal_scan) <= diagonal_max; i++) {

            // Column / row max id corrector
            if ((tile_row_id + i) > diagonal_max || (tile_column_id + i) > diagonal_max) {
                i = diagonal_max

            } else {
                checkmate_unit = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`)
                checkmate_scan = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`).innerHTML

                if (!checkmate_scan.includes(`void`)) {

                    if (checkmate_scan.includes(`bishop`) && checkmate_scan.includes(checkmate_color) || checkmate_scan.includes(`queen`) && checkmate_scan.includes(checkmate_color)) {
                        checkmate_unit.style.setProperty(`background-color`, unit_checkmate_color)
                        i = diagonal_max
                        
                    } else if (!checkmate_scan.includes(`void`)) {
                        i = diagonal_max
                        // checkmate_unit.style.setProperty(`background-color`, unit_test_color) // display path
                    }
                } else {
                    // checkmate_unit.style.setProperty(`background-color`, unit_void_color) // display path
                }
            }
        } // END for
    }
} // END function checkmate



////////////////////////////////////////////////////////////////////////////////////////////////////
// 
////////////////////////////////////////////////////////////////////////////////////////////////////