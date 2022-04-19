
////////////////////////////////////////////////////////////////////////////////////////////////////
// Chess grid
////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////// Main Settings /////////////////////////////

// Grid size //
const rows = 3
const columns = rows
const tiles = rows * columns


    // Colors settings //
    const odd_tile_color = "#fff"
    const even_tile_color = "#000"
    const tile_hover_color = "#79efed"
    const tile_click_color = "#2b7a79"


        // Color corrector //
        let new_row = 0
        let color = 1


    // Tile creating speed //
    const tile_speed = 25

    // Create grid //
    create_grid(tiles, columns)

    // Set responsive playground size for SCSS
        const playground_width = 400                    // max 600px
        const playground_height = playground_width
        const tile_size = playground_width / columns

        document.getElementById('playground').style.setProperty("width", `${playground_width}px`)



///////////////////////////// ID settings /////////////////////////////

    // Tiles ID settings //
        let rows_array = []
        let columns_array = []
        let tiles_array = []                        /////// not used
    
            let row_name = []
            let column_name = []
            let column_name_array_loop1 = 0         // Define base column name from array A-Z
            let column_name_array_loop2 = 0 - 1     // Define column name out of array A-Z          // -1 for starting on letter "A"

                let tile_row_id = 0
                let tile_column_id = 0


    
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

    function create_grid(tiles, columns) {
        let new_tile

        for (let i = 1; i <= tiles; i++) {

            // Set creating speed for tiles //
            setTimeout(function () {

                new_tile = document.createElement(`div`)
                new_row++


                
            // Color corrector //

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

                                // Color corrector //

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
                


                // Set tile color and create tile //
                
                tile_setup()



                // Tile settings //

                function tile_setup() {

                    // Set row ID //
                        tile_row_id = Math.ceil(i / rows)

                    // Set column ID //
                        tile_column_id = (i % rows)

                            if(tile_column_id == 0) {
                                tile_column_id = columns
                            }

                            
                            

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
    // Listener setup
////////////////////////////////////////////////////////////////////////////////////////////////////

    function set_listener(tile_row_id, tile_column_id, color){

        // Mouse-click listener

            document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).addEventListener('click',function (){

                let clicked_tile = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)
                    clicked_tile.style.setProperty(`background-color`, tile_click_color)

            }) // END mouse-click listener



        // Mouse-over listener

            document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).addEventListener('mouseover',function (){

                let selected_tile = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)
                    selected_tile.style.setProperty(`background-color`, tile_hover_color)

                    document.getElementById(`tile_hover`).innerHTML = `<h3>Tile</h3><p>${column_name[tile_column_id-1]}${row_name[tile_row_id-1]}</p>`

            }) // END mouse-over listener
                


        // Mouse-out listener

            document.getElementById(`tile_${tile_row_id}_${tile_column_id}`).addEventListener('mouseout',function (){

                let unselected_tile = document.getElementById(`tile_${tile_row_id}_${tile_column_id}`)

                    if(color % 2 != 0) {
                        unselected_tile.style.setProperty(`background-color`, odd_tile_color)
                    } else {
                        unselected_tile.style.setProperty(`background-color`, even_tile_color)
                    }

            }) // END mouse-out listener

    } // END function set_listener