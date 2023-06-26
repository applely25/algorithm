function solution(name, yearning, photo) {
    let result = []
    photo.map(users => {
        let score = 0
        users.map(user => {
            let index = name.indexOf(user)
            if(index !== -1){
                score += yearning[index]
            }
        })
        result.push(score)
    })
    return result
}