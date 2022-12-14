function image(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function item(url, left, bottom){
    let object = image(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

image('assets/green-character.gif',100,100)
/* let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter) */

image('assets/pine-tree.png',450,200)
/* let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)
 */

image('assets/tree.png', 200, 300)
image('assets/pillar.png', 350, 100)
image('assets/crate.png', 150, 200)
image('assets/well.png', 500, 425)

item('assets/sword.png', 500, 405)
item('assets/shield.png', 165, 185)
item('assets/staff.png', 600, 100)