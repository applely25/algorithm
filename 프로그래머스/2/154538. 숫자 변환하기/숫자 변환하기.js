function solution(x, y, n) {
    let queue = []
    let check = new Set([y])
    
    queue.push([y, 0])

    while(queue.length){
        let [number, level] = queue.shift()
        if(number === x) return level
        
        const numbers = [number/2, number/3, number-n]

        for(let i of numbers){
            if(i >= x && !check.has(i) && Math.floor(number) === number){
                check.add(i)
                queue.push([i, level+1])
            }
        }
    }
    return -1
}