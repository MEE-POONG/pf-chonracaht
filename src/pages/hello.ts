class hello {
    name: string = ''
    lastnamme: string =''
    nickname: string = ''
    age: any =''

    
    hihello (){
        return "i'm"+ this.name + "Nick Name" + this.nickname + "Age" + this.age
        }


}

/*ฟอร์มสำหรับใส่ค่าในฟิวหรือเพิ่มข้อมูล เพื่อดึงตัวแปรข้างบนมาใช้งาน*/ 
const user: any= new hello()
user.name='Chonracaht Intarasut'
user.nickname='POnd'
user.age= '23 Year'

/*ประกาศเพื่อเรียกตัวแปรและฟอร์มมาแสดงที่นี้*/
console.log(user.hihello())

