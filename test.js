// const data = [
//     {
//         firstName:'Abu111111',
//         lastName:'Zaid1111111',
//         email:'zaid11111170979@gmail.com',
//         password:'12345678',
//         phoneNo:1234567890,
//         notes:[
//             {
//                 firstName:'Abu1',
//                 lastName:'Zaid1',
//                 email:'zaid170979@gmail.com',
//                 password:'12345678',
//                 phoneNo:1234567890,
//             },
//             {
//                 firstName:'Abu2',
//                 lastName:'Zaid2',
//                 email:'zaid270979@gmail.com',
//                 password:'12345678',
//                 phoneNo:1234567890,
//             },
//         ]
//     },
//     {
//         firstName:'Abu222222222',
//         lastName:'Zaid2222222222',
//         email:'zaid22222222270979@gmail.com',
//         password:'12345678Aa',
//         phoneNo:1234567890,
//         notes:[
//             {
//                 firstName:'Abu3',
//                 lastName:'Zaid3',
//                 email:'zaid370979@gmail.com',
//                 password:'12345678',
//                 phoneNo:1234567890,
//             },
//             {
//                 firstName:'Abu4',
//                 lastName:'Zaid4',
//                 email:'zaid470979@gmail.com',
//                 password:'12345678',
//                 phoneNo:1234567890,
//             },
//         ]
//     },
// ]
// let userEmail = 'zaid22222222270979@gmail.com'
// let userPass = '12345678Aa'
// data.map((element)=>{
//     if(element.email===userEmail && element.password===userPass){
//         console.log(element.firstName)
//         console.log(element.lastName)
//         console.log(element.email)
//         console.log(element.notes)
//     }
// })

const NoteBookData = [
    {
        firstName:'Abu111111',
        lastName:'Zaid1111111',
        email:'zaid11111170979@gmail.com',
        password:'12345678',
        phoneNo:1234567890,
        notes:[
           'afdasdfasdfafd adsfasdf asdfasdfas','asdf asfdasd asfsdaf afdsafasd asdfasf'
        ]
    },
    {
        firstName:'Abu222222222',
        lastName:'Zaid2222222222',
        email:'zaid22222222270979@gmail.com',
        password:'12345678Aa',
        phoneNo:1234567890,
        notes:[
            'afdasdfasdfafd adsfasdf asdfasdfas','asdf asfdasd asfsdaf afdsafasd asdfasf','asdfa','asfdsaf'
        ]
    },
]

let newUser = {
    firstName:'Abu3333333',
    lastName:'Zaid333333333',
    email:'zaid33333370979@gmail.com',
    password:'12345678Aa',
    phoneNo:1234567890,
    notes:[
        'afdasdfasdfafd adsfasdf asdfasdfas','asdf asfdasd asfsdaf afdsafasd asdfasf','asdfa','asfdsaf'
    ]
}
NoteBookData.push(newUser)
let userEmail = 'zaid33333370979@gmail.com'
let userPass = '12345678Aa'
NoteBookData.map((element)=>{
    if(element.email===userEmail && element.password===userPass){
                console.log(element.firstName)
                console.log(element.lastName)
                console.log(element.email)
                element.notes.push('yesyes yes yes')
                console.log(element.notes)
            }
})