// debounce is used to manage network request i.e. if we search anything search bar
// then for each alphabet request not send to server i.e after specified time delay
// request gone which optimise server load


export default function useDebouncing(cb,delay=2000) { //Bydefault=2000
    let Timeset;
  return(...argu)=> {
     clearTimeout(Timeset)
     Timeset= setTimeout(() => {cb(...argu)}, delay) 
  }

}
