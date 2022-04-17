
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
                
            
                tile_color()


                // Color settings //

                function tile_color() {
                    if (color % 2 != 0) {
                        new_tile.classList.add(`odd_tile`)
                        new_tile.setAttribute('id',`tile_${i}`)
                        new_tile.innerHTML = `<img class="img" src="./images/void.png"></img>`
                        color_toggle = false

                    } else {
                        new_tile.classList.add(`even_tile`)
                        new_tile.setAttribute('id',`tile_${i}`)
                        new_tile.innerHTML = `<img class="img" src="./images/void.png"></img>`
                        color_toggle = true
                    }
                } // END function tile_color

                    

                // Add tile //
                document.getElementById(`playground`).appendChild(new_tile)


                // Set responsive tile size for SCSS
                    document.getElementById(`tile_${i}`).style.setProperty("width", `${tile_size}px`)
                    document.getElementById(`tile_${i}`).style.setProperty("height", `${tile_size}px`)

                    
            // END creating speed for tiles //
            }, tile_speed * i);

        } // END for
   
    } // END function create_grid

    

////////////////////////////////////////////////////////////////////////////////////////////////////
// Panels
////////////////////////////////////////////////////////////////////////////////////////////////////


function create_panels () {

    // Create game name panel
        const game_name = `Antirix Chess`
        const panel_name = document.createElement(`div`)
        panel_name.setAttribute(`id`, `name`)
        document.getElementById(`playground`).appendChild(panel_name)
        document.getElementById(`name`).innerHTML = `<h1>${game_name}</h1>`

    // Create player1 panel
        const panel_player1 = document.createElement(`div`)
        panel_player1.setAttribute(`id`, `player1`)
        document.getElementById(`playground`).appendChild(panel_player1)

    // Create player2 panel
        const panel_player2 = document.createElement(`div`)
        panel_player2.setAttribute(`id`, `player2`)
        document.getElementById(`playground`).appendChild(panel_player2)

    // Create log panel
        const panel_log = document.createElement(`div`)
        panel_log.setAttribute(`id`, `log`)
        document.getElementById(`playground`).appendChild(panel_log)

    // Create turn action panel
        const panel_turn_action = document.createElement(`div`)
        panel_turn_action.setAttribute(`id`, `turn_action`)
        document.getElementById(`playground`).appendChild(panel_turn_action)

    // Create turn action panel
        const panel_turn_count = document.createElement(`div`)
        panel_turn_count.setAttribute(`id`, `turn_count`)
        document.getElementById(`playground`).appendChild(panel_turn_count)

    // Create tile hover panel
        const panel_tile_hover = document.createElement(`div`)
        panel_tile_hover.setAttribute(`id`, `tile_hover`)
        document.getElementById(`playground`).appendChild(panel_tile_hover)



    // Set responsive panels margin align for SCSS
        const panels_side_margin_x = 50
        const panels_side_margin_y = panels_side_margin_x
        const panels_side_margin_align_x = (playground_width / 2) + panels_side_margin_x
        const panels_side_margin_align_y = (playground_height / 2) + (panels_side_margin_y / 2)

        // X align
            document.getElementById('player1').style.setProperty("left", `-${panels_side_margin_align_x}px`)
            document.getElementById('player2').style.setProperty("left", `${panels_side_margin_align_x}px`)
            document.getElementById('log').style.setProperty("left", `${panels_side_margin_align_x}px`)
            document.getElementById('turn_count').style.setProperty("left", `-${panels_side_margin_align_x}px`)
            document.getElementById('tile_hover').style.setProperty("left", `-${panels_side_margin_align_x}px`)

        // Y align
            document.getElementById('name').style.setProperty("top", `-${panels_side_margin_align_y}px`)
            document.getElementById('turn_action').style.setProperty("top", `${panels_side_margin_align_y}px`)



} // END function create_panels


