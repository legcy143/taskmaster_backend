
export const DateTimeGenerator = ():string => {
    let datetime = new Date().toLocaleString();
    return datetime
}