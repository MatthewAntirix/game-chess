
new_game()
unit_promote()
create_panels()



////////////////////////////////////////////////////////////////////////////////////////////////////
// New game panel
////////////////////////////////////////////////////////////////////////////////////////////////////

function new_game () {
    const new_game_panel = document.createElement(`div`)
    new_game_panel.setAttribute(`id`, `new_game`)
    document.querySelector(`body`).appendChild(new_game_panel)
    document.getElementById(`new_game`).innerHTML = 
    `<h2>NEW GAME</h2>

    <button onclick="game_initialization()"> 2 players </button>


    <div>

        <p>
        <img id="select" src="./images/void.png"></img>
        Tile selected unit color
        </p>

        <p>
        <img id="movement" src="./images/void.png"></img>
        Tile movement color
        </p>

        <p>
        <img id="attack" src="./images/void.png"></img>
        Tile attack color
        </p>

        <p>
        <img id="checkmate" src="./images/void.png"></img>
        Tile checkmate scan color
        </p>

    </div>`

}

    // SCSS responsive colors
    document.getElementById('select').style.setProperty("background-color", `${unit_select_color}`)
    document.getElementById('movement').style.setProperty("background-color", `${unit_movement_color}`)
    document.getElementById('attack').style.setProperty("background-color", `${unit_attack_color}`)
    document.getElementById('checkmate').style.setProperty("background-color", `${unit_ban_movement_color}`)



////////////////////////////////////////////////////////////////////////////////////////////////////
// Promotion panel
////////////////////////////////////////////////////////////////////////////////////////////////////

function unit_promote () {
    const unit_promote_panel = document.createElement(`div`)
    unit_promote_panel.setAttribute(`id`, `unit_promote`)
    document.getElementById(`playground`).appendChild(unit_promote_panel)
    document.getElementById(`unit_promote`).innerHTML = 
    `<h1>Unit promote</h1>
    <div>
    <img onclick="select_knight_promote()" id="knight" src="./images/units/white_knight.png"></img>
    <img onclick="select_rook_promote()" id="rook" src="./images/units/white_rook.png"></img>
    <img onclick="select_bishop_promote()" id="bishop" src="./images/units/white_bishop.png"></img>
    <img onclick="select_queen_promote()" id="queen" src="./images/units/white_queen.png"></img>
    </div>`

}



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

            document.getElementById(`player1`).innerHTML = `<h2>WHITE</h2>`


    // Create player2 panel
        const panel_player2 = document.createElement(`div`)
        panel_player2.setAttribute(`id`, `player2`)
        document.getElementById(`playground`).appendChild(panel_player2)

            document.getElementById(`player2`).innerHTML = `<h2>BLACK</h2>`


    // Create log panel
        const panel_log = document.createElement(`div`)
        panel_log.setAttribute(`id`, `log`)
        document.getElementById(`playground`).appendChild(panel_log)

            document.getElementById(`log`).innerHTML = `<h3>Log</h3>`


            const panel_log_area = document.createElement(`div`)
            panel_log_area.setAttribute(`id`, `log_area`)
            document.getElementById(`log`).appendChild(panel_log_area)

            document.getElementById(`log_area`).innerHTML = `<p></p>`


    // Create turn action panel
        const panel_turn_action = document.createElement(`div`)
        panel_turn_action.setAttribute(`id`, `turn_action`)
        document.getElementById(`playground`).appendChild(panel_turn_action)

            document.getElementById(`turn_action`).innerHTML = `<p></p>`


    // Create turn count panel
        const panel_turn_count = document.createElement(`div`)
        panel_turn_count.setAttribute(`id`, `turn_count`)
        document.getElementById(`playground`).appendChild(panel_turn_count)

            document.getElementById(`turn_count`).innerHTML = `<h3>Turn</h3><p>0</p>`


    // Create tile hover panel
        const panel_tile_hover = document.createElement(`div`)
        panel_tile_hover.setAttribute(`id`, `tile_hover`)
        document.getElementById(`playground`).appendChild(panel_tile_hover)

            document.getElementById(`tile_hover`).innerHTML = `<h3>Tile</h3><p></p>`


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
            document.getElementById('unit_promote').style.setProperty("left", `-${panels_side_margin_align_x}px`)

        // Y align
            document.getElementById('name').style.setProperty("top", `-${panels_side_margin_align_y}px`)
            document.getElementById('turn_action').style.setProperty("top", `${panels_side_margin_align_y}px`)



} // END function create_panels



////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////