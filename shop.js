
//Shop features
function openCloseShopTab() {
    if (document.getElementById("shopDiv").style.display == "block") {
        document.getElementById("shopDiv").style.display = "none"
        document.getElementById("shopListInner").innerHTML = ""
    }
    else {
        document.getElementById("shopDiv").style.display = "block"
        displayItems()
    }
}

function displayItems() {
    document.getElementById("shopListInner").innerHTML = ""
    let itemBox = document.createElement("div")
    itemBox.style.display = "inline-block"
    itemBox.style.position = "relative"
    itemBox.style.width = "128px"
    itemBox.style.height = "128px"
    itemBox.style.margin = "8px 0 0 8px"
    itemBox.style.border = "8px solid black"
    itemBox.style.cursor = "pointer"
    itemBox.style.backgroundColor = "#888"
    itemBox.style.backgroundImage = "url('img/halftoneDots.png')"
    itemBox.className += "itemBox"
    itemBoxes = document.getElementsByClassName("itemBox");
    for (i = 1; i < items.length; i++) {
        document.getElementById("shopListInner").appendChild(itemBox.cloneNode(true))
        itemBoxes[i - 1].setAttribute("id", i)
        itemBoxes[i - 1].addEventListener('click', function () { buyItem(parseInt(this.id)) })
        itemBoxes[i - 1].addEventListener('mouseover', function () { showItemInfo(parseInt(this.id)) })
        itemBoxes[i - 1].addEventListener('mouseout', function () { showItemInfo(0) })
        if (game.items[i] >= items[i][1]) itemBoxes[i - 1].style.backgroundColor = "#282"
        //1st red 2nd green 3rd blue
        itemBoxes[i - 1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px' onerror=\"this.onerror=null;this.src='img/shop/0.png';\">"
        if (!game.items[i]) { itemBoxes[i - 1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>0</p>" }
        else { itemBoxes[i - 1].innerHTML += "<p style='position: absolute; top: 0; left: 0; margin: 2px; color: white; font-size: 24px'>" + game.items[i] + "</p>" }
        if (i <= 6) itemBoxes[i - 1].style.border = "8px outset #555"
        else if (i <= 12) itemBoxes[i - 1].style.border = "8px outset #447"
        else if (i <= 18) itemBoxes[i - 1].style.border = "8px outset #647"
        else if (i <= 24) itemBoxes[i - 1].style.border = "8px outset #500"
        else if (i <= 39) itemBoxes[i - 1].style.border = "8px outset #990"
        else if (i <= 46) itemBoxes[i - 1].style.border = "8px outset #229"
        else if (i <= 55) itemBoxes[i - 1].style.border = "8px outset #bbb"
        else if (i <= 63) itemBoxes[i - 1].style.border = "8px outset #282"
        if (i > 18 && game.highestLevel <= 20000) {
            itemBoxes[i - 1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
            itemBoxes[i - 1].addEventListener('mouseover', function () { showItemHiddenInfo(parseInt(this.id)) })
            itemBoxes[i - 1].addEventListener('mouseout', function () { showItemHiddenInfo(0) })
        }
        if (i > 24 && game.items[24] < 1) {
            itemBoxes[i - 1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
            itemBoxes[i - 1].addEventListener('mouseover', function () { showItemHiddenInfo(parseInt(this.id)) })
            itemBoxes[i - 1].addEventListener('mouseout', function () { showItemHiddenInfo(0) })
        }
        if (i > 35 && game.items[30] < 1) {
            itemBoxes[i - 1].innerHTML = "<img src='img/shop/" + i + ".png' style='width: 128px; filter: brightness(0)'>"
            itemBoxes[i - 1].addEventListener('mouseover', function () { showItemHiddenInfo(parseInt(this.id)) })
            itemBoxes[i - 1].addEventListener('mouseout', function () { showItemHiddenInfo(0) })
        }
    }

    j = items.length - 1
}

function buyItem(x) {
    if (game.items[x] >= items[x][1]) { alert("Upgrade is maxed") }
    else {
        if (x == 1) {
            if (game.coins >= 50 && game.pets[1] >= 20) {
                game.coins -= 50
                game.pets[1] -= 20
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/50 coins, " + game.pets[1] + "/20 Green butterflies")
                itemChosen = 0
            }
        }
        if (x == 2) {
            if (game.coins >= 100 && game.pets[10] >= 5) {
                game.coins -= 100
                game.pets[10] -= 5
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/100 coins, " + game.pets[10] + "/5 Gargoyles")
                itemChosen = 0
            }
        }
        if (x == 3) {
            if (game.coins >= 150 && game.pets[43] >= 1) {
                game.coins -= 150
                game.pets[43] -= 1
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/150 coins, " + game.pets[43] + "/1 Golden butterflies")
                itemChosen = 0
            }
        }
        if (x == 4) {
            if (game.coins >= 200 && game.pets[3] >= 20 && game.pets[18] >= 5 && game.pets[24] >= 5) {
                game.coins -= 200
                game.pets[3] -= 20
                game.pets[18] -= 5
                game.pets[24] -= 5
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/200 coins, " + game.pets[3] + "/20 Rats, " + game.pets[18] + "/5 Cats, " + game.pets[24] + "/5 Shiny rats")
                itemChosen = 0
            }
        }
        if (x == 5) {
            if (game.coins >= 250 && game.pets[5] >= 10 && game.pets[16] >= 3) {
                game.coins -= 250
                game.pets[5] -= 10
                game.pets[16] -= 3
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/250 coins, " + game.pets[5] + "/10 Glowing spiders, " + game.pets[16] + "/3 Living roses")
                itemChosen = 0
            }
        }
        if (x == 6) {
            if (game.coins >= 500 && game.enemies[5] >= 1) {
                game.coins -= 500
                itemChosen = x
                alert("Unlocked a new area")
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/500 coins, " + game.enemies[5] + "/1 Armored humans beaten")
                itemChosen = 0
            }
        }
        if (x == 7) {
            if (game.coins >= 500 && game.pets[41] >= 5 && game.pets[42] >= 3) {
                game.coins -= 500
                game.pets[41] -= 5
                game.pets[42] -= 3
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/500 coins, " + game.pets[41] + "/5 Eyeloons, " + game.pets[42] + "/3 Glowing jellyfishes")
                itemChosen = 0
            }
        }
        if (x == 8) {
            if (game.coins >= 500 && game.pets[4] >= 20 && game.pets[23] >= 7) {
                game.coins -= 500
                game.pets[4] -= 20
                game.pets[23] -= 7
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/500 coins, " + game.pets[4] + "/20 Purple butterflies, " + game.pets[23] + "/7 Blue butterflies")
                itemChosen = 0
            }
        }
        if (x == 9) {
            if (game.coins >= 750 && game.pets[14] >= 15 && game.pets[25] >= 5) {
                game.coins -= 750
                game.pets[14] -= 15
                game.pets[25] -= 5
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/750 coins, " + game.pets[14] + "/15 Large tortoises, " + game.pets[25] + "/5 Earth snakes")
                itemChosen = 0
            }
        }
        if (x == 10) {
            if (game.coins >= 250 && game.pets[6] >= 1) {
                game.coins -= 250
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/250 coins, " + game.pets[6] + "/1 Green dragon")
                itemChosen = 0
            }
        }
        if (x == 11) {
            if (game.coins >= 1000 && game.pets[33] >= 5 && game.pets[29] >= 1) {
                game.coins -= 1000
                game.pets[33] -= 5
                if (game.items[x] == 1) game.pets[29] -= 1
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/1000 coins, " + game.pets[33] + "/5 Poisonous eyeballs, " + game.pets[29] + "/1 Spirit")
                itemChosen = 0
            }
        }
        if (x == 12) {
            if (game.coins >= 2000 && game.XPBoost >= 201 && game.pets[9] >= 20 && game.pets[32] >= 10 && game.pets[48] >= 3) {
                game.coins -= 2000
                game.XPBoost -= 200
                game.pets[9] -= 20
                game.pets[32] -= 10
                game.pets[48] -= 3
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/2000 coins, " + numberShortAlert(game.XPBoost) + "/201 XPboost, " + game.pets[9] + "/20 Eldritch eyeballs, " + game.pets[32] + "/10 Red slimes, " + game.pets[48] + "/3 Small skeletons")
                itemChosen = 0
            }
        }
        if (x == 13) {
            if (game.coins >= 1500 && game.pets[1] >= 50 && game.pets[12] >= 2 && game.pets[43] >= 1) {
                game.coins -= 1500
                game.pets[1] -= 50
                game.pets[12] -= 2
                game.pets[43] -= 1
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/1500 coins, " + game.pets[1] + "/50 Green butterflies, " + game.pets[12] + "/2 Red butterflies, " + game.pets[43] + "/1 Golden butterfly")
                itemChosen = 0
            }
        }
        if (x == 14) {
            if (game.coins >= 1750 && game.pets[17] >= 5 && game.pets[35] >= 5 && game.pets[19] >= 2) {
                game.coins -= 1750
                game.pets[17] -= 5
                game.pets[35] -= 5
                game.pets[19] -= 2
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/1750 coins, " + game.pets[17] + "/5 Ice golems, " + game.pets[35] + "/5 Living trees, " + game.pets[19] + "/2 Vortex monsters")
                itemChosen = 0
            }
        }
        if (x == 15) {
            if (game.coins >= 2000 && game.pets[40] >= 25 && game.enemies[1] >= 10 && game.enemies[4] >= 2) {
                game.coins -= 2000
                game.pets[40] -= 25
                game.enemies[1] -= 10
                game.enemies[4] -= 2
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/2000 coins, " + game.pets[40] + "/25 Small elfs, " + game.enemies[1] + "/10 Small humanoids beaten, " + game.enemies[4] + "/2 Nordic grandfathers beaten")
                itemChosen = 0
            }
        }
        if (x == 16) {
            if (game.coins >= 1750 && game.pets[2] >= 75 && game.pets[7] >= 30 && game.pets[15] >= 10) {
                game.coins -= 1750
                game.pets[2] -= 75
                game.pets[7] -= 30
                game.pets[15] -= 10
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/1750 coins, " + game.pets[2] + "/75 Green lizards, " + game.pets[7] + "/30 Snakes, " + game.pets[15] + "/10 Mutant tarantulas")
                itemChosen = 0
            }
        }
        if (x == 17) {
            if (game.coins >= 2500 && game.pets[8] >= 20 && game.pets[36] >= 1 && game.pets[28] >= 1) {
                game.coins -= 2500
                game.pets[8] -= 20
                game.pets[36] -= 1
                game.pets[28] -= 1
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/2500 coins, " + game.pets[8] + "/20 Giant fireflies, " + game.pets[36] + "/1 Fire spectral, " + game.pets[28] + "/1 Lilypad")
                itemChosen = 0
            }
        }
        if (x == 18) {
            if (game.coins >= 5000 && game.pets[56] >= 5 && game.pets[49] >= 3 && game.pets[37] >= 1) {
                game.coins -= 5000
                game.pets[56] -= 5
                game.pets[49] -= 3
                game.pets[37] -= 1
                itemChosen = x
                alert("Bought " + items[x][0])
            }
            else {
                alert("Not enough items; " + numberShortAlert(game.coins) + "/5000 coins, " + game.pets[56] + "/5 Ghost rodents, " + game.pets[49] + "/3 Skeletal dogs, " + game.pets[37] + "/1 Purple star")
                itemChosen = 0
            }
        }
        if (x == 19) {
            if (game.highestLevel < 20000) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 15000 && game.pets[64] >= 3 && game.pets[65] >= 1) {
                    game.coins -= 15000
                    game.pets[64] -= 3
                    game.pets[65] -= 1
                    itemChosen = x
                    alert("Bought " + items[x][0])
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.coins) + "/15000 coins, " + game.pets[64] + "/3 Infected spiders, " + game.pets[65] + "/1 Red snake")
                    itemChosen = 0
                }
            }
        }
        if (x == 20) {
            if (game.highestLevel < 20000) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 25000 && game.enemies[6] >= 3 && game.enemies[9] >= 1) {
                    game.coins -= 25000
                    game.enemies[6] -= 3
                    game.enemies[9] -= 1
                    itemChosen = x
                    alert("Bought " + items[x][0])
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.coins) + "/25000 coins, " + game.enemies[6] + "/3 Stone boys beaten, " + game.enemies[9] + "/1 Magma boys beaten")
                    itemChosen = 0
                }
            }
        }
        if (x == 21) {
            if (game.highestLevel < 20000) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 30000 && game.pets[44] >= 3 && game.pets[66] >= 1) {
                    game.coins -= 30000
                    game.pets[44] -= 3
                    game.pets[66] -= 1
                    itemChosen = x
                    alert("Bought " + items[x][0])
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.coins) + "/30000 coins, " + game.pets[44] + "/3 2-Headed snakes, " + game.pets[66] + "/1 Dimensional eye")
                    itemChosen = 0
                }
            }
        }
        if (x == 22) {
            if (game.highestLevel < 20000) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 50000 && game.pets[11] >= 10 && game.pets[26] >= 5 && game.highestLevel >= 75000) {
                    game.coins -= 50000
                    game.pets[11] -= 10
                    game.pets[26] -= 5
                    itemChosen = x
                    alert("Bought " + items[x][0])
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.coins) + "/50000 coins, " + game.pets[11] + "/10 Glowing eyeballs, " + game.pets[26] + "/5 Salamanders, " + numberShort(game.highestLevel) + "/75k Highest level")
                    itemChosen = 0
                }
            }
        }
        if (x == 23) {
            if (game.highestLevel < 20000) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 75000 && game.pets[34] >= 10 && game.pets[27] >= 3 && game.highestLevel >= 100000) {
                    game.coins -= 75000
                    game.pets[34] -= 10
                    game.pets[27] -= 3
                    itemChosen = x
                    alert("Bought " + items[x][0])
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.coins) + "/75000 coins, " + game.pets[34] + "/10 Eyeball spiders, " + game.pets[27] + "/3 Dark snakes, " + numberShort(game.highestLevel) + "/100k Highest level")
                    itemChosen = 0
                }
            }
        }
        if (x == 24) {
            if (game.highestLevel < 20000) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 250000 && pets[game.selectedPet][1] > pets[46][1] && upgrade24requirement() >= 22 && game.highestLevel >= 250000) {
                    game.coins -= 250000
                    alert("Bought " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.coins) + "/250k coins, " + pets[game.selectedPet][1] + "/747 XP multi from pets, " + upgrade24requirement() + "/22 Upgrades maxed, " + numberShortAlert(game.highestLevel) + "/250k Highest level")
                    itemChosen = 0
                }
            }
        }
        if (x == 25) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.tier >= 5) {
                    dimensionalReset()
                    alert("Performed " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Tier " + game.tier + "/5 Try again later")
                    itemChosen = 0
                }
            }
        }
        if (x == 26) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.tier >= 8 && game.items[25] >= 1) {
                    dimensionalReset()
                    alert("Performed " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Tier " + game.tier + "/8, " + game.items[25] + "/1 Dimensional reset #1")
                    itemChosen = 0
                }
            }
        }
        if (x == 27) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.tier >= 12 && game.items[26] >= 1) {
                    dimensionalReset()
                    alert("Performed " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Tier " + game.tier + "/12, " + game.items[26] + "/1 Dimensional reset #2")
                    itemChosen = 0
                }
            }
        }
        if (x == 28) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.tier >= 18 && game.items[27] >= 1) {
                    dimensionalReset()
                    alert("Performed " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Tier " + game.tier + "/18, " + game.items[27] + "/1 Dimensional reset #3")
                    itemChosen = 0
                }
            }
        }
        if (x == 29) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.tier >= 28 && game.items[28] >= 1) {
                    dimensionalReset()
                    alert("Performed " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Tier " + game.tier + "/28, " + game.items[28] + "/1 Dimensional reset #4")
                    itemChosen = 0
                }
            }
        }
        if (x == 30) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.tier >= 40 && game.items[29] >= 1) {
                    dimensionalReset(1)
                    alert("Performed " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Tier " + game.tier + "/40, " + game.items[29] + "/1 Dimensional reset #5")
                    itemChosen = 0
                }
            }
        }
        if (x == 31) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.level >= 500000 && game.items[25] >= 1 && game.pets[13] >= 1 && game.pets[66] >= 5) {
                    game.pets[13] -= 1
                    game.pets[66] -= 5
                    game.buttonClicks += 5000
                    alert("Bought " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.level) + "/500k levels, " + game.pets[13] + "/1 Blue dragon, " + game.pets[66] + "/5 Dimensional eyes, " + game.items[25] + "/1 Dimensional reset #1")
                    itemChosen = 0
                }
            }
        }
        if (x == 32) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 500000 && game.items[26] >= 1 && game.enemies[9] >= 10 && game.pets[36] >= 40 && game.pets[45] >= 3) {
                    game.coins -= 500000
                    game.enemies[9] -= 10
                    game.pets[36] -= 40
                    game.pets[45] -= 3
                    alert("Bought " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Not enough items; " + numberShortAlert(game.coins) + "/500k coins, " + game.enemies[9] + "/10 Magma boys beaten, " + game.pets[36] + "/40 Fire spectrals, " + game.pets[45] + "/3 Fire lords, " + game.items[26] + "/1 Dimensional reset #2")
                    itemChosen = 0
                }
            }
        }
        if (x == 33) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.level >= 2500000 && game.items[27] >= 1 && game.pets[21] >= 5 && game.pets[68] >= 5) {
                    game.pets[21] -= 5
                    game.pets[68] -= 5
                    alert("Bought " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Not enough items, " + numberShortAlert(game.level) + "/2.5m levels, " + game.pets[21] + "/5 Death scorpions, " + game.pets[68] + "/5 Toxic mushrooms, " + game.items[27] + "/1 Dimensional reset #3")
                    itemChosen = 0
                }
            }
        }
        if (x == 34) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 6000000 && game.items[28] >= 1 && game.pets[37] >= 10 && game.pets[52] >= 1 && game.pets[60] >= 1) {
                    game.coins -= 6000000
                    game.pets[37] -= 10
                    game.pets[52] -= 1
                    game.pets[60] -= 1
                    alert("Bought " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Not enough items, " + numberShortAlert(game.coins) + "/6m coins, " + game.pets[37] + "/10 Purple stars, " + game.pets[52] + "/1 Skeletal vulture, " + game.pets[60] + "/1 Ghost dog, " + game.items[28] + "/1 Dimensional reset #4")
                    itemChosen = 0
                }
            }
        }
        if (x == 35) {
            if (game.items[24] < 1) { alert("Not unlocked yet") }
            else {
                if (game.level >= 50000000 && game.items[29] >= 1 && game.pets[30] >= 3 && game.pets[38] >= 1 && game.pets[69] >= 1) {
                    game.pets[30] -= 3
                    game.pets[38] -= 1
                    game.pets[69] -= 1
                    alert("Bought " + items[x][0])
                    itemChosen = x
                    for (i = 0; i < game.buttonCooldowns.length; i++) { game.buttonCooldowns[i] = 0 }
                }
                else {
                    alert("Not enough items, " + numberShortAlert(game.level) + "/50m levels, " + game.pets[30] + "/3 Living mushrooms, " + game.pets[38] + "/1 Holy pig, " + game.pets[69] + "/1 Universal vortex, " + game.items[29] + "/1 Dimensional reset #5")
                    itemChosen = 0
                }
            }
        }
        if (x == 36) {
            if (game.items[30] < 1) { alert("Not unlocked yet") }
            else {
                if (game.coins >= 50000000 && game.level >= 250000000 && game.petsDiscovered >= 66 && game.tier >= 40 && game.pets[72] >= 1) {
                    game.coins -= 50000000
                    alert("Bought " + items[x][0])
                    itemChosen = x
                }
                else {
                    alert("Not enough items, " + numberShortAlert(game.coins) + "/50m coins, " + numberShortAlert(game.level) + "/250m levels, " + game.petsDiscovered + "/66 Pets discovered, " + game.tier + "/40 Tiers, " + game.pets[72] + "/1 White dragons")
                    itemChosen = 0
                }
            }
        }

        if (itemChosen == x) {
            if (!game.items[itemChosen]) {
                game.items[itemChosen] = 1
            }
            else {
                game.items[itemChosen]++
            }
            displayItems();
        }
        else itemChosen = 0
    }
}
function showItemInfo(x) {
    if (x == 0) { document.getElementById("shopInfo").innerHTML = "" }
    else {
        let appendix = ""
        if (x == 1) { appendix = "Cost:<br>" + numberShort(game.coins) + "/50 Coins<br>" + game.pets[1] + "/20 Green butterflies<br><br>Effects:<br>+50% XP gain</p></center>" }
        if (x == 2) { appendix = "Cost:<br>" + numberShort(game.coins) + "/100 Coins<br>" + game.pets[10] + "/5 Gargoyles<br><br>Effects:<br>+25% Stats gain</p></center>" }
        if (x == 3) { appendix = "Cost:<br>" + numberShort(game.coins) + "/150 Coins<br>" + game.pets[43] + "/1 Golden butterfly<br><br>Effects:<br>+25% XPBoost gain</p></center>" }
        if (x == 4) { appendix = "Cost:<br>" + numberShort(game.coins) + "/200 Coins<br>" + game.pets[3] + "/20 Rats<br>" + game.pets[18] + "/5 Cats<br>" + game.pets[24] + "/5 Shiny rats<br><br>Effects:<br>+2% Faster cooldowns</p></center>" }
        if (x == 5) { appendix = "Cost:<br>" + numberShort(game.coins) + "/250 Coins<br>" + game.pets[5] + "/10 Glowing spiders<br>" + game.pets[16] + "/3 Living roses<br><br>Effects:<br>+30% Fighting rewards</p></center>" }
        if (x == 6) { appendix = "Cost:<br>" + numberShort(game.coins) + "/500 Coins<br>-Beat (Armored Human)<br>" + game.enemies[5] + "/1 Armored humans beaten<br><br>Effects:<br>-Unlock a new area (focused on coin drops)</p></center>" }
        if (x == 7) { appendix = "Cost:<br>" + numberShort(game.coins) + "/500 Coins<br>" + game.pets[41] + "/5 Eyeloons<br>" + game.pets[42] + "/3 Glowing jellyfishes<br><br>Effects:<br>+75% XPBoost</p></center>" }
        if (x == 8) { appendix = "Cost:<br>" + numberShort(game.coins) + "/500 Coins<br>" + game.pets[4] + "/20 Purple butterflies<br>" + game.pets[23] + "/7 Blue butterflies<br><br>Effects:<br>+100% XP gain</p></center>" }
        if (x == 9) { appendix = "Cost:<br>" + numberShort(game.coins) + "/750 Coins<br>" + game.pets[14] + "/15 Large tortoises<br>" + game.pets[25] + "/5 Earth snakes<br><br>Effects:<br>+75% Stats gain</p></center>" }
        if (x == 10) { appendix = "Cost:<br>" + numberShort(game.coins) + "/250 Coins<br>-Own (Green dragon)<br>" + game.pets[6] + "/1 Green dragons<br><br>Effects:<br>-Crates will only have popups if it's a new pet discovered</p></center>" }
        if (x == 11) { appendix = "Cost:<br>" + numberShort(game.coins) + "/1000 Coins<br>" + game.pets[33] + "/5 Poisonous eyeballs<br>" + game.pets[29] + "/1 Spirit (2nd level only)<br><br>Effects:<br>+90% Fighting rewards</p></center>" }
        if (x == 12) { appendix = "Cost:<br>" + numberShort(game.coins) + "/2000 Coins<br>" + game.XPBoost + "/201 XPBoost<br>" + game.pets[9] + "/20 Eldritch eyeballs<br>" + game.pets[32] + "/10 Red slimes<br>" + game.pets[48] + "/3 Small skeletons<br><br>Effects:<br>+200% XPBoost<br>-Softcap exponent +^0.05</p></center>" }
        if (x == 13) { appendix = "Cost:<br>" + numberShort(game.coins) + "/1500 Coins<br>" + game.pets[1] + "/50 Green butterflies<br>" + game.pets[12] + "/2 Red butterflies<br>" + game.pets[43] + "/1 Golden butterfly<br><br>Effects:<br>+200% XP gain</p></center>" }
        if (x == 14) { appendix = "Cost:<br>" + numberShort(game.coins) + "/1750 Coins<br>" + game.pets[17] + "/5 Ice golems<br>" + game.pets[35] + "/5 Living trees<br>" + game.pets[19] + "/2 Vortex monsters<br><br>Effects:<br>+150% Fighting stats</p></center>" }
        if (x == 15) { appendix = "Cost:<br>" + numberShort(game.coins) + "/2000 Coins<br>" + game.pets[40] + "/25 Small elfs<br>" + game.enemies[1] + "/10 Small humanoids beaten<br>" + game.enemies[4] + "/2 Nordic grandfathers beaten<br><br>Effects:<br>-The 4 basic pet crates try to be opened every 30 minutes automatically</p></center>" }
        if (x == 16) { appendix = "Cost:<br>" + numberShort(game.coins) + "/1750 Coins<br>" + game.pets[2] + "/75 Green lizards<br>" + game.pets[7] + "/30 Snakes<br>" + game.pets[15] + "/10 Mutant tarantulas<br><br>Effects:<br>-The 4 basic crates unbox an extra pet every time it opens<br>-The skeleton/ghost crates also unbox an extra pet every time</p></center>" }
        if (x == 17) { appendix = "Cost:<br>" + numberShort(game.coins) + "/2500 Coins<br>" + game.pets[8] + "/20 Giant fireflies<br>" + game.pets[36] + "/1 Fire spectral<br>" + game.pets[28] + "/1 Lilypad<br><br>Effects:<br>+220% Fighting rewards</p></center>" }
        if (x == 18) { appendix = "Cost:<br>" + numberShort(game.coins) + "/5000 Coins<br>" + game.pets[56] + "/5 Ghost rodents<br>" + game.pets[49] + "/3 Skeletal dogs<br>" + game.pets[37] + "/1 Purple star<br><br>Effects:<br>-XPBoost affects DailyXP at a reduced rate<br>-Any item that multiplies xp also works for daily xp</p></center>" }
        if (x == 19) { appendix = "Cost:<br>" + numberShort(game.coins) + "/15000 Coins<br>" + game.pets[64] + "/3 Infected spiders<br>" + game.pets[65] + "/1 Red snake<br><br>Effects:<br>x2 XP (additive with itself, multiplicative with others)</p></center>" }
        if (x == 20) { appendix = "Cost:<br>" + numberShort(game.coins) + "/25000 Coins<br>" + game.enemies[6] + "/3 Stone boys beaten<br>" + game.enemies[9] + "/1 Magma boys beaten<br><br>Effects:<br>x2 Stats</p></center>" }
        if (x == 21) { appendix = "Cost:<br>" + numberShort(game.coins) + "/30000 Coins<br>" + game.pets[44] + "/3 2-Headed snakes<br>" + game.pets[66] + "/1 Dimensional eye<br><br>Effects:<br>+700% XPBoost</p></center>" }
        if (x == 22) { appendix = "Cost:<br>" + numberShort(game.coins) + "/50000 Coins<br>" + game.pets[11] + "/10 Glowing eyeballs<br>" + game.pets[26] + "/5 Salamanders<br>-Reach level 75k<br>" + numberShort(game.highestLevel) + "/75k highest level<br><br>Effects:<br>/1.1 All button cooldowns</p></center>" }
        if (x == 23) { appendix = "Cost:<br>" + numberShort(game.coins) + "/75000 Coins<br>" + game.pets[34] + "/10 Eyeball spiders<br>" + game.pets[27] + "/3 Dark snakes<br>-Reach level 100k<br>" + numberShort(game.highestLevel) + "/100k highest level<br><br>Effects:<br>x2 Fighting rewards (Additive with itself, stacks with others)</p></center>" }
        if (x == 24) { appendix = "Cost:<br>" + numberShort(game.coins) + "/250k Coins<br>-Equip a pet stronger than Dark Blue Dragon<br>-Reach level 250k<br>-Have maxed 22 shop upgrades<br><br><br>After collecting some of the strongest pets in this dimension and controlling time to our level needs, the space-time continuum is breaking. In panic, you spot a portal ahead, but there's some writings on the frame. It tells you what do you need to own to proceed, else everything will collapse into oblivion. You do some preparations and activate the portal. Where could this lead?<br>(Unlocks a new feature)</p></center>" }
        if (x == 25) { appendix = "Cost:<br>-Tier 5<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Shard gain is doubled<br>-The 5th dimension is unlocked at a certain tier<br>-XP gain is multiplied by your tier (^1.5 if upgrade 30 is bought)</p></center>" }
        if (x == 26) { appendix = "Cost:<br>-Tier 8<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D2 are doubled<br>-The 6th dimension is unlocked at a certain tier<br>-Button cooldowns are reduced based on your tier (like items do)<br>Formula: 1 + 0.01 * tier (0.025 if upgrade 30 is bought)</p></center>" }
        if (x == 27) { appendix = "Cost:<br>-Tier 12<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D3 are doubled<br>-The 7th dimension is unlocked at a certain tier<br>-All dimensions cooldowns /1.5</p></center>" }
        if (x == 28) { appendix = "Cost:<br>-Tier 18<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D4 are doubled<br>-The 8th dimension is unlocked at a certain tier<br>-XPBoost softcap ^(+0.001) for each tier (+0.0025 if upgrade 30 is bought)</p></center>" }
        if (x == 29) { appendix = "Cost:<br>-Tier 28<br>-The previous dimensional reset<br><br>Effects:<br>-Your tier, shards and dimension amounts are reset<br>-Multipliers for D1-D5 are doubled<br>-The 9th dimension is unlocked at a certain tier<br>-Stats gain +0.01 for each tier (+0.025 if upgrade 30 is bought)</p></center>" }
        if (x == 30) { appendix = "Cost:<br>-Tier 40<br>-All 5 Dimensional resets<br><br>Effects:<br>-Your tier, shards, dimension amounts, dimensional resets and upgrades 31-35 are reset<br>-Dimensional resets extra effects are stronger<br>-All dimension multipliers x2</p></center>" }
        if (x == 31) { appendix = "Cost:<br>-Level 500k<br>-Perform the first dimensional reset<br>-5 Dimensional Eyes<br>-1 Blue Dragon<br><br>Effects:<br>+5000 Button Clicks<br>-XP buttons count as clicked twice<br>-Buttons clicked stat gets converted to an all dimensions multiplier</p></center>" }
        if (x == 32) { appendix = "Cost:<br>-500k Coins<br>-Perform the second dimensional reset<br>-10 Magma boys beaten<br>-40 Fire spectral<br>-3 Fire lord<br><br>Effects:<br>x2 Stats gain<br>x3 Fighting rewards<br>-Enemies killed provides a multiplier to all dimensions<br><br>(Disclaimer: This is a reference to an item in the game Elden Ring of the same name, and the texture was simply found in a free textures pack that could maybe be found in internet. There's no intent of copy-ing Elden Ring, and if any verified dev wants me to change it, feel free to text me)</p></center>" }
        if (x == 33) { appendix = "Cost:<br>-Level 2.5m<br>-Perform the third dimensional reset<br>-5 Death scorpoions<br>-5 Toxic mushrooms<br><br>Effects:<br>-Unlocks a bossfight where hp saves after dying and rewards increase with each kill<br>-Rewards include an all dimensions multiplier<br><br>Lore:<br>In a desperate need of speeding up these dimensions, the shopkeeper offers you a necklace. He says that evil powers cursed the previous wielder centuries ago as he tried to enhance his powers... -I don't know what might happen when you wear it but be ready for a tough fight- He said while showing you the cost.</p></center>" }
        if (x == 34) { appendix = "Cost:<br>-6m coins<br>-Perform the fourth dimensional reset<br>-1 Skeletal vulture<br>-1 Ghost dog<br>-10 Purple stars<br><br>Effects:<br>x10 XP gain<br>x100 XPBoost<br>x100 Daily XP<br>x2 All dimension multipliers</p></center>" }
        if (x == 35) { appendix = "Cost:<br>-Level 50m<br>-Perform the fifth dimensional reset<br>-3 Living mushrooms<br>-1 Holy pig<br>-1 Universal Vortex<br><br>Effects:<br>/1.5 Button Cooldowns<br>/1.5 Dimension Cooldowns<br>-Pet automation triggers every 5 minutes, opens the other 3 crates and they are free to open<br>-All cooldowns are reset when the upgrade is bought<br><br>Lore:<br>Hey, feeling like you are caught somewhere in time? If you give me some of your interesting goodies I will accelerate everything and even help you out with some manual labour. Deal? You stare for a while at this floating talking hand with some sort of incorporated sand clock meanwhile you think of an answer. Doubtful? Every single button cooldown on purchase will be set to 0. *heavy breathing* Deal.<br>(Developer warning: This will not work if for some absurd reason the previous automation upgrade is not bought)</p></center>" }
        if (x == 36) { appendix = "Cost:<br>-50m coins<br>-Level 250m<br>-Tier 40<br>-Discover 66 pets<br>-Own a White dragon<br><br>Effects:<br>x2 All Dimensions multiplier<br>x2 XP gain<br>x2 Stat gain<br>-Allows you to claim a role for beating Check Back on the discord server<br><br><br>After killing the strongest entities on earth, after collecting pets from all around the world and travelling to other dimensions just to satisfy your levelup needs, the shopkeeper offers you a final item. A trophy given to those who managed to sacrifice all the dimensions in their path to fixing the space-time continuum. Proudly, you raise it up into the air as a sign of victory, when you spot on the bottom side this text:<br>Congratulations for beating Check Back v1.0. More content coming soon, stay tuned. -Marc <3</p></center>" }
        document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'>" + items[x][0] + "</span><br>You got " + game.items[x] + "/" + items[x][1] + "</p><br><img src='img/shop/" + x + ".png' style='width: 50%'><br><p style='color: white'></span>" + appendix
    }
}

function showItemHiddenInfo(x) {
    if (x == 0) { document.getElementById("shopInfo").innerHTML = "" }
    else {
        if (x == 19) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock" }
        if (x == 20) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock" }
        if (x == 21) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock" }
        if (x == 22) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock" }
        if (x == 23) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock" }
        if (x == 24) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Reach level 20k to Unlock" }
        if (x == 25) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 26) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 27) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 28) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 29) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 30) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 31) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 32) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 33) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 34) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 35) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Buy the portal to Unlock" }
        if (x == 36) { document.getElementById("shopInfo").innerHTML = "<br><br><center><p style='color: white'><span style='font-size: 32px; font-weight: bold'> Perform a dimensional sacrifice to Unlock" }
    }
}

function updateShopBoosts() {
    game.itemXP = (1 + (game.items[1] * 0.5) + (game.items[8] * 1) + (game.items[13] * 2)) * (game.items[19] + 1) * (9 * game.items[34] + 1) * (game.items[36] + 1)
    game.itemStat = (1 + (game.items[2] * 0.25) + (game.items[9] * 0.75) + (game.items[14] * 1.5)) * (2 ** (game.items[20] + game.items[32] + game.items[36]))
    game.itemXPBoost = (1 + (game.items[3] * 0.25) + (game.items[7] * 0.75) + (game.items[12] * 2) + (game.items[21] * 7)) * (99 * game.items[34] + 1)
    game.itemCooldown = 1 + (game.items[4] * 0.02) + (game.items[22] * 0.1) + (game.items[35] * 0.5)
    game.itemLoot = (1 + (game.items[5] * 0.3) + (game.items[11] * 0.9) + (game.items[17] * 2.2)) * (game.items[23] + 1) * (2 * game.items[32] + 1)
    game.itemXPBoostEffectSoftcap = 0 + (game.items[12] * 0.05) + (game.items[28] * game.tier * 2.5 ** Math.min(game.items[30], 1)) / 1000
    game.itemUnlocks = 0 + (Math.min(game.items[6], 1)) + (Math.min(game.items[24], 1)) + (Math.min(game.items[33], 1))
    game.extraPetAmount = 0 + (game.items[16])
    game.dimensionCooldown = 1 * 1.5 ** (game.items[27] + game.items[35])
    if (game.items[18] >= 1) game.itemDailyXP = ((game.XPBoostEffect ** 0.5) * game.itemXP * (9 * game.items[34] + 1))
    else game.itemDailyXP = 1
    if (game.items[25] >= 1) game.tierXPmulti = game.tier ** (Math.min(game.items[30], 0.5) + 1)
    else game.tierXPmulti = 1
    if (game.items[26] >= 1) game.tierCooldown = 1 + (game.tier * 2.5 ** Math.min(game.items[30], 1)) / 100
    else game.tierCooldown = 1
    if (game.items[29] >= 1) game.tierStats = 1 + (game.tier * 2.5 ** Math.min(game.items[30], 1)) / 100
    else game.tierStats = 1
    if (game.items[31] >= 1) game.clickToDimension = Math.sqrt((game.buttonClicks ** 1.5) / 353553)
    else game.clickToDimension = 1
    if (game.items[32] >= 1) game.enemiesToDimension = Math.log(Math.E + game.enemiesDefeated / 250)
    else game.enemiesToDimension = 1

}
setInterval(updateShopBoosts, 50)

function itemBoosts() {
    result = ""
    if (game.itemXP > 1) { result += "XP gain x" + numberShort(game.itemXP) + "<br>" }
    if (game.itemStat > 1) { result += "Stat gain x" + numberShort(game.itemStat) + "<br>" }
    if (game.itemXPBoost > 1) { result += "XPBoost gain x" + numberShort(game.itemXPBoost) + "<br>" }
    if (game.itemCooldown > 1) { result += "All button cooldown /" + numberShort(game.itemCooldown) + "<br>" }
    if (game.itemLoot > 1) { result += "Fighting loot x" + numberShort(game.itemLoot) + "<br>" }
    if (game.itemXPBoostEffectSoftcap > 0) { result += "XPBoost effect exponent +" + numberShort(game.itemXPBoostEffectSoftcap) + "<br>" }
    if (game.itemDailyXP > 1) { result += "Daily XP x" + numberShort(game.itemDailyXP) + "<br>" }
    if (game.extraPetAmount > 0) { result += "Extra pets: " + levelShort(game.extraPetAmount) + " <br>" }
    return result
}
