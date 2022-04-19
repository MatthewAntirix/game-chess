
////////////////////////////////////////////////////////////////////////////////////////////////////
// Chess grid
////////////////////////////////////////////////////////////////////////////////////////////////////


// Grid size //
const rows = 8
const columns = rows
const tiles = rows * columns

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



    // Tiles ID settings //
        let rows_array = []
        let columns_array = []
        let tiles_array = []
    
            let tile_row_id = 0
            let tile_column_id = 0
    
    
        // create rows array
            for(let row = 1; row <= rows; row++) {
                rows_array.push(row)
            }
    
        // create columns array
            for (let column = 1; column <= columns; column++) {
                columns_array.push(column)
            } 


            
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


                
                // Set tile color and create tile //
                
            
                tile_setup()



                // Tile settings //

                function tile_setup() {

                    if (color % 2 != 0) {

                        // Color settings //
                            new_tile.classList.add(`odd_tile`)
                            new_tile.setAttribute('id',`tile_${i}`)
                            new_tile.innerHTML = `<img class="img" src="./images/void.png"></img>`
                            color_toggle = false

                        // Add tile //
                            document.getElementById(`playground`).appendChild(new_tile)

                        // Add listener //
                            set_listener(i)


                    } else {

                        // Color settings //
                            new_tile.classList.add(`even_tile`)
                            new_tile.setAttribute('id',`tile_${i}`)
                            new_tile.innerHTML = `<img class="img" src="./images/void.png"></img>`
                            color_toggle = true

                        // Add tile //
                            document.getElementById(`playground`).appendChild(new_tile)
                        
                        // Add listener //
                            set_listener(i)
                    }


                } // END function tile_setup


                
                // Set responsive tile size for SCSS
                    document.getElementById(`tile_${i}`).style.setProperty("width", `${tile_size}px`)
                    document.getElementById(`tile_${i}`).style.setProperty("height", `${tile_size}px`)


            // END creating speed for tiles //
            }, tile_speed * i);


        } // END for

   
    } // END function create_grid

    

////////////////////////////////////////////////////////////////////////////////////////////////////
    // Listener setup
////////////////////////////////////////////////////////////////////////////////////////////////////

    function set_listener(i){

        document.getElementById(`tile_${i}`).addEventListener('click',function (){
            console.log(`active tile id = ${i}`)
        })
    }