
////////////////////////////////////////////////////////////////////////////////////////////////////
// Chess grid
////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////// Main Settings /////////////////////////////

// Grid size //
const rows = 8
const columns = rows
const tiles = rows * columns


    // Colors settings //
    const odd_tile_color = "#fff"
    const even_tile_color = "#555"

    // Const tile_hover_color = "#79efed"
        const unit_select_color = "rgb(0, 0, 255)"              // only RGB format
        const unit_movement_color = "rgb(0, 255, 0)"            // only RGB format
        const unit_attack_color = "rgb(255, 0, 0)"              // only RGB format
        const unit_checkmate_color = "rgb(255, 0, 255)"         // only RGB format
        const unit_checkmate_attack_color = "rgb(0, 255, 255)"  // only RGB format
        const unit_ban_movement_color = "rgb(255, 255, 0)"      // only RGB format



        // Color corrector //
        let new_row = 0
        let color = 1


    // Tile creating speed //
    const tile_speed = 25

    // Create grid //
    create_grid(tiles)

    // Set responsive playground size for SCSS
        const playground_width = 400                    // max 600px
        const playground_height = playground_width
        const tile_size = playground_width / columns

        document.getElementById('playground').style.setProperty("width", `${playground_width}px`)



///////////////////////////// Panels settings /////////////////////////////

        let turn = 1


///////////////////////////// ID settings /////////////////////////////

    // Tiles ID settings //
        let selected_tile
        let rows_array = []
        let columns_array = []

            let reset_array = []     
            let reset_id = 0                   
    
                let row_name = []
                let column_name = []
                let column_name_array_loop1 = 0         // Define base column name from array A-Z
                let column_name_array_loop2 = 0 - 1     // Define column name out of array A-Z          // -1 for starting on letter "A"

                    let tile_row_id = 0
                    let tile_column_id = 0     

                    let log_array = []
                    let tile_row_id_log = 0             // for save previous id value
                    let tile_column_id_log = 0          // for save previous id value
                    let new_log_line, log_line

                    let scan_array = []
                    let scan_tile
                    let scan_pawn, scan_knight, scan_rook, scan_bishop, scan_queen, scan_king
                        let scan_white_pawn, scan_white_knight, scan_white_rook, scan_white_bishop, scan_white_queen, scan_white_king
                        let scan_black_pawn, scan_black_knight, scan_black_rook, scan_black_bishop, scan_black_queen, scan_black_king


            // Rows and columns id settings
                function set_grid_id(i) {

                    // Set row ID //
                        tile_row_id = Math.ceil(i / rows)

                    // Set column ID //
                        tile_column_id = (i % rows)

                            if(tile_column_id == 0) {
                                tile_column_id = columns
                                            }

                } // END function set_grid_id


    
        // Create rows array
            for(let row = 1; row <= rows; row++) {
                rows_array.push(row)
            }

            // Set row name for hover tile
                row_name = rows_array.reverse()
            
    

        // Create columns array
            for (let column = 1; column <= columns; column++) {
                columns_array.push(column)
            } 

            // Set column name for hover tile
                const column_name_array = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"] 


                for (let i = 0; i < columns; i++) {

                    // Set base column name from array A-Z
                    if(column_name_array_loop1 < column_name_array.length && i < column_name_array.length) {
                        column_name.push(column_name_array[columns_array[column_name_array_loop1]-1])
                        column_name_array_loop1++

                    // Set new additional column name out of array A-Z 
                    } else if (column_name_array_loop1 == column_name_array.length && i >= column_name_array.length) {
                        column_name_array_loop2++
                        column_name_array_loop1 = 0
                        column_name.push(`${column_name_array[columns_array[column_name_array_loop2]-1]}${column_name_array[columns_array[column_name_array_loop1]-1]}`)
                        column_name_array_loop1++
                        
                    // Set next additional column name out of array A-Z 
                    } else {
                        column_name.push(`${column_name_array[columns_array[column_name_array_loop2]-1]}${column_name_array[columns_array[column_name_array_loop1]-1]}`)
                        column_name_array_loop1++
                    }
                    
                } // END for



////////////////////////////////////////////////////////////////////////////////////////////////////
    // Creating chess tiles
////////////////////////////////////////////////////////////////////////////////////////////////////

    function create_grid(tiles) {
        let new_tile

        for (let i = 1; i <= tiles; i++) {

            // Set creating speed for tiles //
            setTimeout(function () {

                new_tile = document.createElement(`div`)
               
                // Color corrector
                color_corrector(i)
                
                // Set tile color and create tile //
                tile_setup(i)



                // Tile settings //

                function tile_setup() {

                    set_grid_id(i)

                        
                    // Creating tiles //    

                    if (color % 2 != 0) {

                        // Color settings //
                            new_tile.classList.add(`odd_tile`)
                            new_tile.setAttribute('id',`tile_${tile_row_id}_${tile_column_id}`)
                            new_tile.innerHTML = `<img src="./images/void.png"></img>`
                            color_toggle = false

                        // Add tile //
                            document.getElementById(`playground`).appendChild(new_tile)
                            document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).style.setProperty(`background-color`, odd_tile_color)

                        // Add listener //
                            set_listener(tile_row_id, tile_column_id, color)


                    } else {

                        // Color settings //
                            new_tile.classList.add(`even_tile`)
                            new_tile.setAttribute('id',`tile_${tile_row_id}_${tile_column_id}`)
                            new_tile.innerHTML = `<img src="./images/void.png"></img>`
                            color_toggle = true

                        // Add tile //
                            document.getElementById(`playground`).appendChild(new_tile)
                            document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).style.setProperty(`background-color`, even_tile_color)
                        
                        // Add listener //
                            set_listener(tile_row_id, tile_column_id, color)
                    }


                } // END function tile_setup


                
                // Set responsive tile size for SCSS
                    document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).style.setProperty("width", `${tile_size}px`)
                    document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).style.setProperty("height", `${tile_size}px`)
                    

            // END creating speed for tiles //
            }, tile_speed * i);


        } // END for

   
    } // END function create_grid

    

////////////////////////////////////////////////////////////////////////////////////////////////////
    // Color corrector & color reset
////////////////////////////////////////////////////////////////////////////////////////////////////

    function color_corrector (i) {
        new_row++

            // If count of rows == odd num
            if(rows % 2 != 0) {

                // Odd row - last tile //
                if (new_row == columns) {
                    color = i

                // Even row - last tile //
                } else if (new_row == (columns*2)) {
                    color = i
                    new_row = 0

                // Others tiles //
                } else {
                    color = i
                } 


            // If count of rows == even num
            } else {

                // Odd row - last tile //
                if (new_row == columns) {
                    color = i

                // Even row - last tile //
                } else if (new_row == (columns*2)) {
                    color = i + 1
                    new_row = 0

                // Others tiles //
                } else {
                    color = i + Math.floor(i/columns)
                } 

            } // END color corrector

    } // END function color_corrector



////////////////////////////////////////////////////////////////////////////////////////////////////
    // Listener setup
////////////////////////////////////////////////////////////////////////////////////////////////////


    function set_listener(tile_row_id, tile_column_id){

        // Mouse-click listener

            document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).addEventListener('click',function (){

                // Update tile hover data
                document.getElementById(`tile_hover`).innerHTML = `<h3>Tile</h3><p>${column_name[tile_column_id-1]}${row_name[tile_row_id-1]}</p>`
                // END update tile hover data


                if(!selected_unit) {
                    clicked_tile = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)            
                    player_identify(clicked_tile.innerHTML, tile_row_id, tile_column_id)


                    // Set turn count data
                    if(turn == 1) {
                        document.getElementById(`turn_count`).innerHTML = `<h3>Turn</h3><p>${turn}</p>`
                    } // END set turn count data

                    if(clicked_tile.innerHTML.includes(active_player)) {
                        clicked_tile.style.setProperty(`background-color`, unit_select_color)
                        selected_unit = (clicked_tile.innerHTML)

                        unit_identify(clicked_tile.innerHTML, tile_row_id, tile_column_id)

                        // Set last turn data default position
                        if(tile_row_id_log == 0 && tile_column_id_log == 0) {
                            tile_row_id_log = tile_row_id
                            tile_column_id_log = tile_column_id
                        } // END set last turn data default position


                        // Set players panels content
                        unit_scan()
                        if(turn == 1) {
                            scan_log()
                        } // END set players panels content
                    }
                    

                } else if (selected_unit) {
                    target_tile = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)

                    if (target_tile.style.backgroundColor.includes(unit_select_color)) {
                        selected_unit = 0 
                        reset_color_tile()


                    } else if (target_tile.style.backgroundColor.includes(unit_movement_color) || target_tile.style.backgroundColor.includes(unit_attack_color) || target_tile.style.backgroundColor.includes(unit_checkmate_color)) {

                        clicked_tile.innerHTML = `<img src="./images/void.png"></img>`

                        moved_unit = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)
                        moved_unit.innerHTML = selected_unit

                        reset_color_tile()
                        


                        // Update last turn data
                        log_line = document.getElementById(`turn_action`).innerHTML = `<p>
                            ${turn}. 
                            ${active_player.toUpperCase()} ${unit_name_log} 
                            [ ${column_name[tile_column_id_log-1]}${row_name[tile_row_id_log-1]} 
                            -> ${column_name[tile_column_id-1]}${row_name[tile_row_id-1]} ]
                            </p>`

                        log_array.push(log_line)

                        tile_row_id_log = 0
                        tile_column_id_log = 0
                        // END update last turn data


                            // Update log data
                            for (let i = 0; i < log_array.length; i++) {
                                new_log_line = document.createElement(`span`)
                                new_log_line.innerHTML = log_array[i]
                            }
                                document.getElementById(`log_area`).prepend(new_log_line)
                            // END update log data


                            // Check pawns promotion
                            promote_scan()
                            // END check pawns promotion


                            // Update players panels content
                            unit_scan()
                            scan_log()
                            // END update players panels content         


                        // Update turn count data
                        if(active_player == player_2) {
                            turn++
                            document.getElementById(`turn_count`).innerHTML = `<h3>Turn</h3><p>${turn}</p>`
                        } // END update turn count data


                        // Next player
                        if (promotion_display_on == false) {
                            active_player_toggle = !active_player_toggle
                            selected_unit = 0
                        }
                    }
                }
            }) // END mouse-click listener

    } // END function set_listener



////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions for correcting grid
////////////////////////////////////////////////////////////////////////////////////////////////////

    function reset_color_tile () {
    
        reset_array = columns_array

        for (let new_row = 1; new_row <= rows; new_row++) {

            for (let new_column = 1; new_column <= columns; new_column++) {
                reset_id++


            // Reset color corrector

                // If count of rows == odd num
                if(rows % 2 != 0) {

                    if (reset_id > tiles) {
                        reset_id = 1
                    }

                    color = reset_id


                // If count of rows == even num
                } else {

                    // Odd row - last tile //
                    if (reset_id == columns) {
                        color = reset_id

                    // Even row - last tile //
                    } else if (reset_id == (columns*2)) {
                        color = reset_id + 1
                        reset_id = 0

                    // Others tiles //
                    } else {
                        color = reset_id + Math.floor(reset_id/columns)
                    } 

                } // END reset color corrector
                

                let unselected_tile = document.getElementById(`tile_${reset_array[new_row-1]}_${reset_array[new_column-1]}`)

                if(color % 2 != 0) {
                    unselected_tile.style.setProperty(`background-color`, odd_tile_color)

                } else {
                    unselected_tile.style.setProperty(`background-color`, even_tile_color)

                }

            }// END for column_row

        } // END for new_row

    } // END function reset_color_tile



////////////////////////////////////////////////////////////////////////////////////////////////////

    function create_name_bars () {

    // Columns name bars

        // Upper bar
        let columns_name_bar_upper = document.createElement(`div`)
        columns_name_bar_upper.setAttribute('id',`upper_bar`)
        document.getElementById(`playground`).prepend(columns_name_bar_upper)
    
        // Lower bar
        let columns_name_bar_lower = document.createElement(`div`)
        columns_name_bar_lower.setAttribute('id',`lower_bar`)
        document.getElementById(`playground`).append(columns_name_bar_lower)
    
        // Set values
        for (let i = 0; i < columns; i++) {
            let column_name_bar
    
                // Upper bar
                column_name_bar = document.createElement(`div`)
                column_name_bar.setAttribute('id',`upper_column_name_${i+1}`)
                column_name_bar.innerHTML = column_name_array[i]
                document.getElementById(`upper_bar`).append(column_name_bar)

                    // SCSS responsive 
                    document.getElementById(`upper_column_name_${i+1}`).style.setProperty("width", `${tile_size}px`)
    
                // Lower bar
                column_name_bar = document.createElement(`div`)
                column_name_bar.setAttribute('id',`lower_column_name_${i+1}`)
                column_name_bar.innerHTML = column_name_array[i]
                document.getElementById(`lower_bar`).append(column_name_bar) 
                
                    // SCSS responsive 
                    document.getElementById(`lower_column_name_${i+1}`).style.setProperty("width", `${tile_size}px`)

        } // END for
    
        

    // Rows name bars
    
        // Left bar
        let rows_name_bar_left = document.createElement(`div`)
        rows_name_bar_left.setAttribute('id',`left_bar`)
        document.getElementById(`playground`).prepend(rows_name_bar_left)
    
        // Right bar
        let rows_name_bar_right = document.createElement(`div`)
        rows_name_bar_right.setAttribute('id',`right_bar`)
        document.getElementById(`playground`).prepend(rows_name_bar_right)
    
        // Set values
        for (let i = 0; i < rows; i++) {
            let row_name_bar
    
                // Left bar
                row_name_bar = document.createElement(`div`)
                row_name_bar.setAttribute('id',`left_row_name_${i+1}`)
                row_name_bar.innerHTML = rows_array[i]
                document.getElementById(`left_bar`).append(row_name_bar)

                    // SCSS responsive 
                    document.getElementById(`left_row_name_${i+1}`).style.setProperty("height", `${tile_size}px`)
    
                // Right bar
                row_name_bar = document.createElement(`div`)
                row_name_bar.setAttribute('id',`right_row_name_${i+1}`)
                row_name_bar.innerHTML = rows_array[i]
                document.getElementById(`right_bar`).append(row_name_bar)

                    // SCSS responsive 
                    document.getElementById(`right_row_name_${i+1}`).style.setProperty("height", `${tile_size}px`)

         
        } // END for
        
                        
    } // END function create_name_bars



////////////////////////////////////////////////////////////////////////////////////////////////////
// Scan
////////////////////////////////////////////////////////////////////////////////////////////////////

function unit_scan () {
    scan_white_pawn = 0, scan_white_knight = 0, scan_white_rook = 0, scan_white_bishop = 0, scan_white_queen = 0, scan_white_king = 0
    scan_black_pawn = 0, scan_black_knight = 0, scan_black_rook = 0, scan_black_bishop = 0, scan_black_queen = 0, scan_black_king = 0

    for (let new_row = 1; new_row <= rows; new_row++) {

        for (let new_column = 1; new_column <= columns; new_column++) {
            scan_tile = document.getElementById(`tile_${new_row}_${new_column}`).innerHTML
            scan_array.push(scan_tile)
        } // END for
    } // END for


    for (let i = 0; i < tiles; i++) {

        // White player
            if(scan_array[i].includes(`${player_1}_pawn`)) {
                scan_white_pawn++
            }
            if(scan_array[i].includes(`${player_1}_knight`)) {
                scan_white_knight++
            }
            if(scan_array[i].includes(`${player_1}_rook`)) {
                scan_white_rook++
            }
            if(scan_array[i].includes(`${player_1}_bishop`)) {
                scan_white_bishop++
            }
            if(scan_array[i].includes(`${player_1}_queen`)) {
                scan_white_queen++
            }
            if(scan_array[i].includes(`${player_1}_king`)) {
                scan_white_king++
            }


        // Black player
            if(scan_array[i].includes(`${player_2}_pawn`)) {
                scan_black_pawn++
            }
            if(scan_array[i].includes(`${player_2}_knight`)) {
                scan_black_knight++
            }
            if(scan_array[i].includes(`${player_2}_rook`)) {
                scan_black_rook++
            }
            if(scan_array[i].includes(`${player_2}_bishop`)) {
                scan_black_bishop++
            }
            if(scan_array[i].includes(`${player_2}_queen`)) {
                scan_black_queen++
            }
            if(scan_array[i].includes(`${player_2}_king`)) {
                scan_black_king++
            }

    } // END for

    scan_array = []

} // END function unit_scan



function scan_log () {
    
    for(let i = 1; i <= 2; i++) {
        let player
        
        if(i == 1) {
            player = player_1
            scan_king = scan_white_king, scan_queen = scan_white_queen, scan_bishop = scan_white_bishop, scan_rook = scan_white_rook, scan_knight = scan_white_knight, scan_pawn = scan_white_pawn
        } else {
            player = player_2
            scan_king = scan_black_king, scan_queen = scan_black_queen, scan_bishop = scan_black_bishop, scan_rook = scan_black_rook, scan_knight = scan_black_knight, scan_pawn = scan_black_pawn
        }


        document.getElementById(`player${i}`).innerHTML = 
            `<h2>${player}</h2>
            <p>
            <div><img src="./images/units/${player}_king.png"></img> <br> ${scan_king} </div>
            <div><img src="./images/units/${player}_queen.png"></img> <br> ${scan_queen} </div>
            </p>

            <p>
            <div><img src="./images/units/${player}_rook.png"></img> <br> ${scan_rook} </div>
            <div><img src="./images/units/${player}_bishop.png"></img> <br> ${scan_bishop} </div>
            </p>

            <p>
            <div><img src="./images/units/${player}_knight.png"></img> <br> ${scan_knight} </div>
            <div><img src="./images/units/${player}_pawn.png"></img> <br> ${scan_pawn} </div>
            </p>`

    } // END for

} // END function scan_log



////////////////////////////////////////////////////////////////////////////////////////////////////
// 
////////////////////////////////////////////////////////////////////////////////////////////////////