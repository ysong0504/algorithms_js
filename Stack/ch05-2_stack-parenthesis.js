/**
 * 1차 시도
 * 결과: 실패
 * 원인: 단순히 1차원적으로 풀어서그렇다.
 * @param {} s 
 * @returns 
 */
function solution(s){
    const arr = s.split('');
    
    if(arr[0] === ')' || arr[arr.length-1] === '(') {
        return false;
    }
    
    const open = arr.filter((v) => v === ')');
    const close = arr.filter((v) => v === '(');
    
    return open.length === close.length ? true : false
}

/**
 * 2차 시도
 * 결과 - 실패 
 * 원인 - 효율성 X
 *  */
function solution(s){
    const stack = []
    
    if(s[0] === ')') {
        return false
    }
    
    for(const bracket of s) { 
        if(bracket === '(') {
            stack.push(bracket)
        } else if (stack[stack.length-1] === '(' && bracket === ')') {
            stack.pop()
        }
    }
    
    return !stack.length ? true : false
}