export interface Runnable{
    // is a contract, no body only abstract method/field
    // 也能帮助在编译时及时找到typo的错误
    // implement by class
    start():any;
    stop():any;
}