const users = [{
    "id": 1,
    "name": "Surya",
    "password": "123"
}, {
    "id": 2,
    "name": "Sashi",
    "password": "456"
}];

export async function logIn ( name, password ) {
    const user = users.find(user => user.name === name && user.password === password);
    if ( user ) return { id: user.id, accessToken: "UYTU12Y4U24T23F4H2G__24927432GWEJH-2G34J2HG42J39879Y" };
    else return null;
}
