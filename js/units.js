
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


    // Define players
        const player_1 = "white"
        const player_2 = "black"


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

    function select_unit(name_inner, tile_row_id, tile_column_id, unit_name, move_row, move_column) {

    // Column movement / attack
        if(unit_name == `king` || unit_name == `queen` || unit_name == `rook` || unit_name == `pawn`) {


        // Up movement / attack
            for(let i = 1; i <= move_row; i++) {

                // Player 1 - Pawn first movement corrector
                if(name_inner.includes('white') && unit_name == `pawn` && tile_row_id == (rows-1)) {
                    if(tile_row_id - i >= 1 && name_inner.includes('white')) {
                        move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                        move_up = document.getElementById(`tile_${tile_row_id - (2*i)}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                    } // END Player 1 - Pawn first movement corrector



                } else if (!name_inner.includes('black_pawn') && tile_row_id - i >= 1) {
                    move_up = document.getElementById(`tile_${tile_row_id - i}_${tile_column_id}`)

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

                // Player 2 - Pawn first movement corrector
                if(name_inner.includes('black') && unit_name == `pawn` && tile_row_id == 2) {
                    if(tile_row_id + i <= rows && name_inner.includes('black')) {
                        move_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                        move_down = document.getElementById(`tile_${tile_row_id + (2*i)}_${tile_column_id}`).style.setProperty(`background-color`, unit_movement_color)
                    } // END Player 2 - Pawn first movement corrector

                } else if (!name_inner.includes('white_pawn') && tile_row_id + i <= rows) {
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



            // // Attack





            //     // Player 2 - Pawn attack corrector
            //     if(tile_row_id + i <= rows && unit_name == `pawn` && name_inner.includes('black')) {
            //         if(tile_column_id - i >= 1) {
            //             attack_left_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id - i}`).style.setProperty(`background-color`, unit_attack_color)
            //         }
            //         if (tile_column_id + i <= columns) {
            //             attack_right_down = document.getElementById(`tile_${tile_row_id + i}_${tile_column_id + i}`).style.setProperty(`background-color`, unit_attack_color)
            //         }
            //     } // END Player 2 - Pawn attack corrector

                

            //     // Others units
            //     if (unit_name != `pawn`) {
            //         if(tile_row_id - i >= 1) {
            //             attack_up = move_up
            //             attack_up.style.setProperty(`background-color`, unit_attack_color)
            //         }

            //         if(tile_row_id + i <= rows) {
            //             attack_down = move_down
            //             attack_down.style.setProperty(`background-color`, unit_attack_color)
            //         }
            //     } // END others units

            // } // END for
            
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
                        console.log(`log2`)
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

            // Player 2
            document.getElementById(`tile_1_${(Math.floor(columns/2))-3}`).innerHTML = `<img src="./images/units/black_rook.png"></img>`
            document.getElementById(`tile_1_${(Math.floor(columns/2))-2}`).innerHTML = `<img src="./images/units/black_knight.png"></img>`
            document.getElementById(`tile_1_${(Math.floor(columns/2))-1}`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            document.getElementById(`tile_1_${(Math.floor(columns/2))-0}`).innerHTML = `<img src="./images/units/black_queen.png"></img>`
            document.getElementById(`tile_1_${(Math.floor(columns/2))+1}`).innerHTML = `<img src="./images/units/black_king.png"></img>`
            document.getElementById(`tile_1_${(Math.floor(columns/2))+2}`).innerHTML = `<img src="./images/units/black_bishop.png"></img>`
            document.getElementById(`tile_1_${(Math.floor(columns/2))+3}`).innerHTML = `<img src="./images/units/black_knight.png"></img>`
            document.getElementById(`tile_1_${(Math.floor(columns/2))+4}`).innerHTML = `<img src="./images/units/black_rook.png"></img>`

                for (let i = 1; i <= columns; i++) {
                    document.getElementById(`tile_2_${i}`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
                }


            // Player 1
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-3}`).innerHTML = `<img src="./images/units/white_rook.png"></img>`
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-2}`).innerHTML = `<img src="./images/units/white_knight.png"></img>`
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-1}`).innerHTML = `<img src="./images/units/white_bishop.png"></img>`
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))-0}`).innerHTML = `<img src="./images/units/white_queen.png"></img>`
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+1}`).innerHTML = `<img src="./images/units/white_king.png"></img>`
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+2}`).innerHTML = `<img src="./images/units/white_bishop.png"></img>`
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+3}`).innerHTML = `<img src="./images/units/white_knight.png"></img>`
            document.getElementById(`tile_${rows}_${(Math.floor(columns/2))+4}`).innerHTML = `<img src="./images/units/white_rook.png"></img>`

                for (let i = 1; i <= columns; i++) {
                    document.getElementById(`tile_${rows-1}_${i}`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
                }


                // testing units
                document.getElementById(`tile_3_${(Math.floor(columns/2))-0}`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
                document.getElementById(`tile_6_${(Math.floor(columns/2))-0}`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`

                document.getElementById(`tile_3_${(Math.floor(columns/2))-1}`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
                document.getElementById(`tile_6_${(Math.floor(columns/2))+1}`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`

                document.getElementById(`tile_4_${(Math.floor(columns/2))+2}`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`
                document.getElementById(`tile_5_${(Math.floor(columns/2))+1}`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`

                document.getElementById(`tile_4_${(Math.floor(columns/2))-1}`).innerHTML = `<img src="./images/units/black_pawn.png"></img>`
                document.getElementById(`tile_5_${(Math.floor(columns/2))+1}`).innerHTML = `<img src="./images/units/white_pawn.png"></img>`

        } // END function set_chess_units



////////////////////////////////////////////////////////////////////////////////////////////////////
        // Chess units identify and setup unit movements / attack
////////////////////////////////////////////////////////////////////////////////////////////////////

        function unit_identify (name, tile_row_id, tile_column_id) {

        // Color identify

            if(name.includes("white")) {
                console.log('white!')

            } else if (name.includes("black")) {
                console.log('black')
            }



        // Tile identify

            // Empty tile
            if(name.includes("void")) {
                console.log('void!')
                }

                // Pawn tile
                if(name.includes("pawn")) {
                    unit_pawn(name, tile_row_id, tile_column_id)
                }

                // Knight tile
                if(name.includes("knight")) {
                    unit_knight(name, tile_row_id, tile_column_id)
                }

                // Rook tile
                if(name.includes("rook")) {
                    unit_rook(name, tile_row_id, tile_column_id)
                }

                // Bishop tile
                if(name.includes("bishop")) {
                    unit_bishop(name, tile_row_id, tile_column_id)
                }

                // Queen tile
                if(name.includes("queen")) {
                    unit_queen(name, tile_row_id, tile_column_id)
                }

                // King tile
                if(name.includes("king")) {
                    unit_king(name, tile_row_id, tile_column_id)
                }
            
        }
