const ADJECTIVES = ['empty', 'victorious',
    'symptomatic',
    'organic',
    'homely',
    'high-pitched',
    'loutish',
    ' unable', ,
    'well-groomed',
    'straight',
]

const OBJECTS1 = [
    'protection',
    'guitar',
    'ability',
    'dirt',
    'technology',
    'transportation',
    'tradition',
    'trainer',
    'hall',
    'bonus',
]

const OBJECTS2 = [
    'scene',
    'development',
    'independence',
    'selection',
    'phone',
    'context',
    'power',
    'depth',
    'management',
    'passion',

]
function getAnonUsername(){
    const adj=ADJECTIVES[Math.floor(Math.random()*10)]
    const obj1=OBJECTS1[Math.floor(Math.random()*10)]
    const obj2=OBJECTS2[Math.floor(Math.random()*10)]
    return `${adj} ${obj1}-${obj2}`
}
