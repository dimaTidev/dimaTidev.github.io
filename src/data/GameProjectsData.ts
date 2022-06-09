import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("MusicHeroRacer", "Music Hero Racer", "img/projects/NeonRacer/Icon.png", `
    <div class="paragraph">
        Variation of the game Guitar Hero. In this game, you need to collect blocks to the music. Collect cars and upgrade them. 
        The game is currently under development. 
    </div>
    <div class="paragraph center">
        <iframe class="pc-screenshot" src="https://www.youtube.com/embed/JZoOfqqCLDU" frameborder="0" allowfullscreen></iframe>
        <iframe class="pc-screenshot" src="https://www.youtube.com/embed/hdQsFNckNtA" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshothalf" src="img/projects/NeonRacer/CarSwitch.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshothalf" src="img/projects/NeonRacer/Screen_0.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshothalf" src="img/projects/NeonRacer/Screen_1.jpg" alt="Singing Addict Screenshot" />
    </div>
    <div class="paragraph">
      I've covered interesting technical aspects here:
        <ul>
        <li>Shaders - Dissolve (mobile optimized), Screen Effects (radial blur, dirty lence, lut), World Curve</li>
        <li>Procedural wheel generation. Every wheel assemble from little parts: spokes, rim, bolts, tyre. Texture generate in depend wheel parts. Everything can be changed parametrically</li>
        <li>UI show only items in view. We can scroll a ton of items but actually exists only viewed items in hierarchy.</li>
        </ul>
    </div>
    `, "#222222"),
    new ProjectData("BrawlKarts", "Brawl Karts", "img/projects/BrawlKarts/Icon.png", `
    <div class="paragraph">
        Prototype. Casual racing game. You can select 1 of 5 types of vehicles. You can use weapons to survive. Who drives too slowly will be run over by an evil machine.
    </div>
    <br/>Short demo about gameplay.
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/vxk5EmamNvQ" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/BrawlKarts/Screen_0.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BrawlKarts/Screen_1.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BrawlKarts/Screen_2.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BrawlKarts/Screen_3.jpg" alt="Singing Addict Screenshot" />
    </div>`, "#222222"),
    new ProjectData("HideIO", "HideIO", "img/projects/HideIO/Icon.png", `
    Prototype of game Hide and Seek. Multiplayer game, made on Unity Network. You can play for hider or seeker. Hiders can morphed to objects. Seekers have to find hiders. You also can customize character like clothes, boots, helmets, weapons. 
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/HideIO/HideSeek.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/HideIO/CharacterCustomization.gif" alt="Singing Addict Screenshot" />
    </div>
    <div class="paragraph center">
        <img class="pc-screenshothalf" src="img/projects/HideIO/OpenCrate.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshothalf" src="img/projects/HideIO/hider_morph.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshothalf" src="img/projects/HideIO/hider_morph_2.gif" alt="Singing Addict Screenshot" />
    </div>
    <div class="paragraph">
    I've covered interesting technical aspects here:
      <ul>
      <li>Character castomization system
      <li>Texture baking
      <li>Baking mesh with bones
     </ul>
    </div>
    `, "#222222"),
    new ProjectData("FoesIO", "FoesIO", "img/projects/FoesIO/Icon.png", `
        Sorry, show case in progress.
    `, "#222222"),
    new ProjectData("SlimeAttack", "Slime attack", "img/projects/SlimeAttack/Icon.png", `
    <div class="paragraph">
        Completed prototype. 2d color match game. Main goal feed porings with the same color of apple. In game you can upgrade and use some special skills.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/9v8zv753_fY" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/SlimeAttack/Screen_3.PNG" alt="Singing Addict Screenshot" />
        <img class="phone-screenshot" src="img/projects/SlimeAttack/Screen_4.PNG" alt="Singing Addict Screenshot" />
        <img class="phone-screenshot" src="img/projects/SlimeAttack/Screen_1.PNG" alt="Singing Addict Screenshot" />
        <img class="phone-screenshot" src="img/projects/SlimeAttack/Screen_2.PNG" alt="Singing Addict Screenshot" />
        <img class="phone-screenshot" src="img/projects/SlimeAttack/Screen_5.PNG" alt="Singing Addict Screenshot" />
        <img class="phone-screenshot" src="img/projects/SlimeAttack/Screen_6.PNG" alt="Singing Addict Screenshot" />
    </div>`, "#222222"),
    new ProjectData("project-1", "World of Derby", "img/projects/WOD/Icon.png", 
    `
    <div class="paragraph">
    Released in <strong>2015</strong> on <a href="https://play.google.com/store/apps/details?id=com.CactusGames.WOD" target="_blank">GooglePlay</a> and <a href="https://apps.apple.com/us/app/world-of-derby-full/id1078273212" target="_blank">Apple AppStore</a>. World of Derby its a racing game about derby in arenas. We were inspired by the game Flatout 2.
    You can buy and upgrade, repair cars. Take part in arena battles.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/MqUwtk5L-_o" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.CactusGames.WOD" target="_blank"><img src="img/projects/logo_googlePlayStore.png" alt="Play Store badge" /></a>
        <a href="https://apps.apple.com/us/app/world-of-derby-full/id1078273212" target="_blank"><img src="img/projects/logo_AppStore.png" alt="Play Store badge" /></a>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/WOD/Wod_screen_3.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/WOD/Wod_screen_2.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/WOD/Wod_screen_4.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/WOD/Wod_screen_5.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/WOD/Wod_screen_menu.jpg" alt="Singing Addict Screenshot" />
    </div>
    `, "#222222"),
    new ProjectData("BCL_U", "BigCityLife Update", "img/projects/BCL/Icon.png", `
    <div class="paragraph">
    <p>The old version of this game was published on google play. Here is shown huge update for this game. But due to a team breakup development of this project was stopped.</p>
    <p>In this game, the player can use jobs to earn money and buy cars, house, customize a character, and fulfill desires. There is a taxi job, food delivery, 3 types of city clean job, builder, thief. Character need for sleep, eat and have fun. If a player uses cheats, the game will put him in the prison.
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/BCL_Update/Car_Destructibles.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BCL_Update/Jobs.gif" alt="Singing Addict Screenshot" />
    </div>
    <div class="paragraph center">
        <img class="pc-screenshothalf" src="img/projects/BCL_Update/DayNightShift.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshothalf" src="img/projects/BCL_Update/LightScaleUp.gif" alt="Singing Addict Screenshot" />
        <img class="pc-screenshothalf" src="img/projects/BCL_Update/TopDownShadow.gif" alt="Singing Addict Screenshot" />
    </div>
    <div class="paragraph">
        I've covered interesting technical aspects here:
        <ul>
        <li>Cheat detection and delayed punishment (put in prison).</li>
        <li>Car physics</li>
        <li>Traffic system. Finding close point on the traffic network, and spawning traffic vehicles only near this point. Vehicles from traffic do not have physics. They switch to gameObject with physics only when a player hits them.</li>
        <li>All dynamic object spawns only around the player. All far objects, which are not visible, will despawn.</li>
        </ul>
        Effects:
        <ul>
        <li>Custom LightMap. The result from blending 2 lightMaps (Day and Night) at runtime for the Day change effect.</li>
        <li>Lights based on a topdown map</li>
        <li>Light effect, from street lights, scale to up direction when the camera comes close to avoid overdraws</li>
        <li>Shader-based banners animation. All light banners are baked into one mesh. The difference between them is vertex data which does change the effect.</li>
        <li>Partition, shader-based falling snow. All snow pieces are baked into one mesh. Used a local billboard and fall down by shader. Vertex data control vertical offset and speed. 9 identical volumes around the player, will move with the player when he changes grid cell.</li>
    </ul>
    </div>
    `, "#222222"),
    new ProjectData("project-2", "Clash of Crime", "img/projects/COC/Icon.png", `
    <div class="paragraph">
        Released in <strong>2016</strong> on <a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime&hl=ru&gl=US" target="_blank">GooglePlay</a> and <a href="https://apps.apple.com/us/app/clash-of-crime-mad-city-full/id1104797523" target="_blank">Apple AppStore</a>.
        You play as a third person character. In the game you can fight, shoot weapons, steal vehicles, run away from the police 
    </div>
    <br/>Video recorded by some player.
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/D59QY0KkYYs" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime&hl=ru&gl=US" target="_blank"><img src="img/projects/logo_googlePlayStore.png" alt="Play Store badge" /></a>
        <a href="https://apps.apple.com/us/app/clash-of-crime-mad-city-full/id1104797523" target="_blank"><img src="img/projects/logo_AppStore.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/COC/Screen_1.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/COC/Screen_2.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/COC/Screen_3.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/COC/Screen_4.jpg" alt="Singing Addict Screenshot" />

    </div>
    `, "#222222"),
    new ProjectData("project-3", "Clash of Crime 2", "img/projects/COC2/Icon.png", `
    <div class="paragraph">
        Released in <strong>2016</strong> on <a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime2&hl=ru&gl=US" target="_blank">GooglePlay</a>.
        You play as a third person character. In the game you can fight, shoot weapons, steal vehicles, run away from the police     
    </div>
    <br/>Video recorded by some player.
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/LjfpPOLWSmQ" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.CactusGames.ClashOfCrime2" target="_blank"><img src="img/projects/logo_googlePlayStore.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/COC2/Screen_1.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/COC2/Screen_2.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/COC2/Screen_3.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/COC2/Screen_4.jpg" alt="Singing Addict Screenshot" />
    </div>
    `, "#222222"),
    new ProjectData("ClashOfZombie", "Clash of Zombie", "img/projects/Zombie/Icon.png", `
    <div class="paragraph">
    Clone of the game SAS3. You can buy weapons, ammo, grenades. And participate in battles with zombies. The game has not been published.
    </div>
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/PsJd1iXRkxw" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
        <div class="notice">
        Windows build available on <a href="https://drive.google.com/file/d/1w_V8ODyUfAaurP-DqQPkOkOR4J1xIf_O/view?usp=sharing" target="_blank">google drive</a>.
        </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Zombie/Screen_2.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/Zombie/Screen_3.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/Zombie/Screen_4.jpg" alt="Singing Addict Screenshot" />
    <img class="pc-screenshot" src="img/projects/Zombie/Screen_5.jpg" alt="Singing Addict Screenshot" />

    </div>
    `, "#222222"),
    new ProjectData("project-5", "Big City Life", "img/projects/BCL/Icon.png", `
    <div class="paragraph">
        Released in <strong>2017</strong> on <a href="https://play.google.com/store/apps/details?id=com.CactusGames.BCL" target="_blank">GooglePlay</a>. A game without firearms and violence. This is an attempt to combine 2 types of games: GTA and SIMS. In this game, you appear in a small town where you can earn extra money by working: pizza delivery, taxi driver, builder on a construction site, garbage collector, thief. You will need to take a driving license in a driving school to be able to drive a car. You can buy cars, an apartment, furniture in an apartment.
    </div>
    <br/>Video recorded by some player.
    <div class="paragraph center">
        <iframe class="youtube" src="https://www.youtube.com/embed/-Fc8oy1aavY" frameborder="0" allowfullscreen></iframe>
    </div>

    <div class="paragraph center">
        <a href="https://play.google.com/store/apps/details?id=com.CactusGames.BCL" target="_blank"><img src="img/projects/logo_googlePlayStore.png" alt="Play Store badge" /></a>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/BCL/GTA3_screen_0.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BCL/GTA3_screen_1.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BCL/GTA3_screen_2.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BCL/GTA3_screen_3.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BCL/GTA3_screen_5.jpg" alt="Singing Addict Screenshot" />
        <img class="pc-screenshot" src="img/projects/BCL/GTA3_screen_6.jpg" alt="Singing Addict Screenshot" />
    </div>`, "#222222")
];