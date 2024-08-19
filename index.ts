//Generic Classes 

// interface DataBase{
//   email: string;
//   connection: string
// }

// const getDa = <T,U extends DataBase>(value1: T, value2:U) : object => {
//   return {
//     value1, 
//     value2
//   }
// }


// class Sellable<T>{
//   cart: T[] = []; 

//   addProduct(prod:T){
//     return this.cart.push(prod);
//   }
//   removeProduct(prod:T){
//     return this.cart.splice(prod,1);
//   }
// }

// const product = new Sellable<string>();
// product.addProduct("Product 1");
// product.addProduct("Product 2");
// console.log(product.cart);
// product.removeProduct("Product 1");
// console.log(product.cart);

// const identityone=(x: number | boolean) : number | boolean =>{
//   return x;
// }

// const identitytwo=(x:any): any =>{
//   return x;
// }

// const identitythree=<Type>(x: Type): Type=>{
//   return x;
// }
// const identityfour=<T>(x: T): T=>{
//   return x;
// }


// abstract class Camera{
//   name:string
//   burst: number

//   constructor(name:string, burst: number){
//     this.name = name; 
//     this.burst = burst;
//   }

//   abstract getReels():void
  
// }


// class Camera1 extends Camera{
//   reels:number
//   constructor(name:string, burst: number, reel:number){
//     super(name, burst);
//     this.reels = reel;
//   }
//   getReels(): void {
//    console.log('Camera'); 
// }
// }

// const cam = new Camera1('sony',20, 4);
// console.log(cam)
// cam.getReels();


// interface Camera{
//   singleshot:number, 
//   burst:string
// }

// interface Story{
//   createStory():string
// }

// class Youtube implements Camera, Story{
//     singleshot: number;
//     burst: string;
//     multiple:string;
//     getImages(image:string):string{
//       return image;
//     }

//   constructor(singleshot: number, burst: string, multi: string){
//     this.singleshot = singleshot;
//     this.burst = burst;
//     this.multiple = multi;
//   }

//   createStory(): string {
//     return 'Story created';
//   };
// }

// const youtube = new Youtube(10, 'burst', 'multiple',);

// console.log(youtube.getImages('nike.jpg'));
// console.log(youtube.createStory());


// class User{
//   email:string 
//   count:number

//   get getcount():number{
//     return this.count;
//   }

//   set setCount(count:number){
//     this.count = ++count;
//   }
  
//   constructor(email:string,count:number){
//     this.email=email; 
//     this.count = count
//   }

// }



// class UserParent extends User{
//   parentname:string
//   constructor(email:string,count:number,parentname:string){
//       super(email, count);
//     this.count = count;
//     this.email = email; 
//     this.parentname = parentname;
    
//   }
  
// }

// let user1 = new UserParent("tugrp@example.com",1,"Nikhil");

// console.log(user1.getcount)

// const user = new User('sdf',4);

// user.setCount = 6; 
// console.log(user.getcount)


// interface User{
//   readonly id: number;
//     name: string;
//     age: number;
//     isLogin(): boolean; 
//   getCoupon(name: string): number
// }

// const user: User = {id: 2, name: 'Jack', age: 18, isLogin: () => true,
//                     getCoupon:()=>{
//   return 10;
// }}

// console.log(user)

// const enum SeatChoice{
//   window, 
//   MIDDLE, 
//   FRONT
// }

// const getSeatChoice =(seat: SeatChoice)=>{
//   if(SeatChoice.FRONT){
//     console.log('front seat is choosen')
//   } else if(SeatChoice.MIDDLE){
//     console.log('middle seat is choosen')
//   } else {
//     console.log('window seat is choosen')
//   }
// }

// getSeatChoice(SeatChoice.FRONT)


//tuples 
// let b:[string , number, boolean];
// b = ['hello', 50, false];
// console.log(b);


// type User = [number, string];  

// const newuser: User = [1, 'John'];

// newuser.push('5', 23, '33'); 
// // newuser.push('5'); 

// console.log(newuser)

//making a dynamic array with typescript
// let arr : (string | number)[] = [12,'34',5,'23']; 

// let index = 0;
// arr.splice(index,3 );
// console.log(arr)


// let getDbId=(id: number | string)=>{
//   if(typeof id === 'number'){
//     id+1;
//   } else{
//      id.toLowerCase();
//   }
//   return id;
// }
 

// let id1 = getDbId(2);
// console.log(id1);


//union 
// type User ={
//   name:string 
//   id: number
// }

// type Admin ={
//   adminname:string 
//   id: number
// }

// let user: User | Admin = {name: 'jhon', id:1}
// user = {adminname: 'camer', id: 1};


// const names = ["alex", "brian", "testName", "charles", "testD"];
// const validNames = names.filter(str => !str.toLowerCase().startsWith("test"));
// console.log(validNames);

//filter method
// let oddnumber: number[] = [1, 23, 4, 5, 6, 7, 8, 9, 10, 43, 22, 36];


// let checknumber = oddnumber.filter(n => n % 2 == 0);

// for (let i = 1; i <= 10; i++) {
//   console.log(`${2} * ${i} =${i * 2}`);
// }





// let isBigNum=(num: number)=>{
//   return (num<10);
// }


// let b = [23,10,34].every(isBigNum); 

// console.log(b);


// const array: string[] =[];


// array.push('superhero', 'thor', 'spidy');

// console.log(array);

// function createname({}) : {name:string}{
//   return {name: 'name'}
// }

// type User = {
//   readonly _id: string;
//   name: string;
//   age: number;
//   creadted?: string
// }; 

// let b: User = {_id:"23", name:"name", age:23, creadted:"23"}
// console.log(b)

// const printName=(name:string, age:number,)=>{
//   return "Hello".concat(name);
// }

// printName("sagar",)

//we can call it in function 
// interface Point{
//   x: number; 
//   y: number;
// };

// let points=(point: Points)=>{
//   return `(${point.x},${point.y})`
// }

// let pointt = {x: 13, y: 15}; 

// console.log(points(pointt));


// let getlength=(obj: string | string[])=> {
//   return obj.length;
// }
// console.log(getlength(["hello", "hy"]));
// let myworld:string = 'hello World'; 

// console.log(myworld);

// type MyBool = false | true;

// type WindowIs = 'Close' | 'Open' | 'Minimize' | 'Maximize';

// console.log(WindowIs);


// class UserAccount{
//   name: string; 
//   id:number; 
//   isAdmin: boolean;


// getfullname(){
//   return `Employe name is ${this.name} and id is ${this.id} and he is ${this.isAdmin == true ? 'Admin' : 'not a an admin'}.`;
// }

//   constructor(name: string, id: number, isAdmin: boolean){
//     this.name = name; 
//     this.id = id; 
//     this.isAdmin = isAdmin;
//   }
// }

// const user = new UserAccount("Ahmed", 1, false);

// console.log(user.getfullname());

// function deleteUser(user: UserAccount){
//   return console.log(user.name, user.id=2, user.isAdmin= false, );
// }
// deleteUser(user);